---
title: "Les agents IA sans la magie : pourquoi j'ai conçu Lughus"
description: "Déconstruire l'illusion de complexité des agents autonomes et reprendre la maîtrise de l'exécution, des outils et des données avec un micro-framework sobre."
publishDate: 2026-09-20
cover: "../../assets/blog/3_lughus/3_lughus.svg"
coverAlt: "Architecture et boucle d'exécution du micro-framework agentique Lughus"
lang: fr
---

Quand on regarde le paysage des frameworks d'agents IA aujourd'hui, on a vite le tournis : des graphes d'état tentaculaires, des dizaines de couches d'abstraction, des orchestrateurs complexes qui promettent monts et merveilles...

C'est spectaculaire sur le papier, mais est-ce qu'on n'a pas un peu perdu de vue la simplicité du problème ?

---

## Qu'est-ce qu'un agent, au juste ? (Sans les paillettes)

Le principe de départ est pourtant limpide.

Un modèle de langage (LLM) utilisé seul est un formidable moteur textuel : il génère des réponses à partir de sa fenêtre de contexte et de son entraînement préalable. Mais dès qu'on lui demande de vérifier une information fraîche à sa source, d'effectuer un calcul mathématique exact ou d'interagir avec le monde réel (une base SQL, une API tierce, un fichier système), cela ne suffit plus. Le modèle « hallucine » ou tourne en rond.

Un **agent**, c'est tout simplement ce qui lui donne une capacité d'action concrète.

Rien de magique là-dedans. Un agent reçoit une mission, inspecte les quelques outils qu'on l'autorise à employer, en choisit un, observe son retour d'exécution, puis ajuste ou termine son raisonnement.

```text
Objectif  ──►  Outil  ──►  Résultat  ──►  Décision
   ▲                                         │
   └─────────────────────────────────────────┘
```

C'est une **boucle logicielle élémentaire**. Et comme pour toute boucle en informatique, l'enjeu primordial n'est pas d'empiler des couches de magie : c'est de savoir précisément la piloter.

---

## Le piège de la boîte noire

La difficulté commence quand cette boucle devient opaque :

* Des abstractions qui s'empilent au point qu'on ne sait plus quel prompt est réellement envoyé au modèle.
* Des traces d'appels introuvables quand un agent se met à boucler dans le vide.
* Des factures de jetons (tokens) imprévisibles.
* Et surtout, **trois questions fondamentales souvent balayées sous le tapis** :
  1. *Où tourne le code exécuté par l'agent ?*
  2. *À quelles données sensibles a-t-il réellement accès ?*
  3. *Comment garde-t-on le contrôle en cas de dérive ?*

C'est précisément de ce constat qu'est né **[Lughus](https://github.com/hdg-zero/lughus)**, un projet open source consacré aux architectures agentiques sobres et contrôlables.

---

## Les trois piliers de Lughus

Pour concevoir Lughus, j'ai voulu revenir à une ingénierie saine résumée par un mot d'ordre : **« Moins de magie, plus d'ingénierie »**.

Trois principes directeurs guident chaque brique du projet :

### 1. Maîtriser l'exécution 🎯
Savoir exactement sur quel runtime tourne le code, quelles ressources locales ou distantes sont exposées, et par où transitent les données sensibles. L'agent ne doit jamais être une porte dérobée sur votre infrastructure.

### 2. Conserver une architecture lisible 📐
Bannir les graphes ésotériques et les pseudo-langages intermédiaires. Lughus repose sur du code Python direct, typé et évident. Les appels d'outils, les observations et les décisions du modèle restent 100 % transparents, observables et auditables via OpenTelemetry.

### 3. Encadrer strictement les ressources 🛡️
Appliquer au niveau du moteur d'exécution des garde-fous explicites : limites d'itérations, quotas stricts de tokens, timeouts et sandboxing d'outils. Un agent autonome ne doit jamais pouvoir consommer un budget infini ou saturer une machine en roue libre.

---

## Un micro-agent en quelques lignes

Voici à quoi ressemble une boucle d'agent avec Lughus : pas de serveur obligatoire, pas de graph builder, juste un registre d'outils et un appel de fonction asynchrone :

```python
import asyncio
from lughus import ToolRegistry, agent_loop, LLM

# 1. Enregistrement d'outils typés avec inférence automatique du schéma
registry = ToolRegistry()

@registry.tool
def get_server_status(service_name: str) -> str:
    """Vérifie l'état d'un service système."""
    return f"Service {service_name} : actif et stable (uptime 42j)"

# 2. Exécution de la boucle sans fioritures
async def main():
    llm = LLM(model="openai/gpt-4o")
    
    result = await agent_loop(
        llm=llm,
        system="Tu es un assistant d'exploitation technique rigoureux.",
        context="Peux-tu vérifier le statut du service database ?",
        registry=registry,
        tool_names=["get_server_status"],
        max_iterations=5,
    )
    
    print(result)
    print(f"Consommation : {result.iterations} itérations, {result.total_tokens} tokens")

asyncio.run(main())
```

Et si l'on a besoin d'un mode serveur avec streaming, console développeur interactive et protocole A2A (Agent-to-Agent), une simple commande CLI `lughus new` et `lughus serve` instancie une passerelle FastAPI prête à l'emploi.

---

## Un projet ouvert pour avancer ensemble

Lughus est un projet jeune, encore en phase pré-1.0. 

Si j'ai choisi de publier le code en open source dès maintenant, c'est précisément pour confronter ces partis pris à la réalité : éprouver la simplicité de l'API, identifier les cas limites et faire évoluer le framework avec la communauté.

Prochaine étape dans les cartons : **un cas d'usage concret autour de l'accès aux bases de données d'entreprise**, pour montrer comment un agent peut interroger un schéma SQL sous le principe du moindre privilège, sans fuite d'informations sensibles.

Si la démarche vous parle, le projet est disponible sur GitHub :

👉 **[github.com/hdg-zero/lughus](https://github.com/hdg-zero/lughus)**

N'hésitez pas à tester, ouvrir une issue ou partager vos retours d'expérience !
