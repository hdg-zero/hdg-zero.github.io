// site/src/i18n/translations.ts
// Internationalization translations for FR/EN

export const translations = {
    fr: {
        // Navigation
        nav: {
            home: 'Accueil',
            work: 'Projets',
            blog: 'Blog',
            contact: 'Contact',
        },

        // Hero
        hero: {
            headline: 'Créer des expériences',
            headlineAccent: 'digitales.',
            subtitle: 'Architecte digital créant des expériences web premium avec les technologies modernes. Code propre, interfaces élégantes, interactions fluides.',
            viewWork: 'Voir mes projets',
            readBlog: 'Lire le blog',
        },

        // Bento Grid / Work section
        work: {
            sectionLabel: 'Travaux sélectionnés',
            title: 'Projets',
            titleAccent: 'récents',
            description: 'Une collection de mes travaux récents — applications web, design systems et expérimentations créatives.',
            latest: 'Dernier projet',
            viewAll: 'Voir tous les projets',
            viewDetails: 'Voir le détail',
        },

        // Skills
        skills: {
            react: 'Architecture UI',
            typescript: 'Type Safety',
            design: 'Design Systems',
            node: 'Backend',
        },

        // Blog
        blog: {
            sectionLabel: 'Blog',
            title: 'Articles &',
            titleAccent: 'réflexions',
            description: 'Plongées profondes dans le développement web, les patterns d\'architecture et les leçons apprises en chemin.',
            readArticle: 'Lire l\'article',
            minRead: 'min de lecture',
            noArticles: 'Aucun article pour le moment',
            comingSoon: 'Les premiers articles arrivent bientôt !',
            subscribe: 'S\'abonner',
            stayUpdated: 'Restez informé',
            newsletterDesc: 'Recevez les nouveaux articles directement dans votre boîte mail.',
            engineeringBlog: 'Blog technique',
            blogDesc: 'Plongées profondes dans le code et les patterns.',
            readArticles: 'Lire les articles',
        },

        // Projects
        projects: {
            sectionLabel: 'Portfolio',
            title: 'Mes',
            titleAccent: 'projets',
            description: 'Une sélection de mes travaux récents — des applications web complexes aux expérimentations open-source.',
            all: 'Tous',
            noProjects: 'Aucun projet',
            comingSoon: 'Les projets arrivent bientôt !',
            viewLive: 'Voir le site',
            sourceCode: 'Code source',
        },

        // CTA
        cta: {
            title: 'Construisons quelque chose',
            titleAccent: 'd\'extraordinaire',
            description: 'Vous avez un projet en tête ? J\'adorerais en discuter. Parlons de comment nous pouvons collaborer.',
            getInTouch: 'Me contacter',
        },

        // Footer
        footer: {
            navigation: 'Navigation',
            connect: 'Connexion',
        },

        // Common
        common: {
            backTo: 'Retour aux',
        },
    },

    en: {
        // Navigation
        nav: {
            home: 'Home',
            work: 'Work',
            blog: 'Blog',
            contact: 'Contact',
        },

        // Hero
        hero: {
            headline: 'Building digital',
            headlineAccent: 'experiences.',
            subtitle: 'Digital architect crafting premium web experiences with modern technologies. Clean code, beautiful interfaces, seamless interactions.',
            viewWork: 'View Work',
            readBlog: 'Read Blog',
        },

        // Bento Grid / Work section
        work: {
            sectionLabel: 'Selected Work',
            title: 'Featured',
            titleAccent: 'projects',
            description: 'A curated collection of recent work spanning web applications, design systems, and creative experiments.',
            latest: 'Latest',
            viewAll: 'View all projects',
            viewDetails: 'View details',
        },

        // Skills
        skills: {
            react: 'UI Architecture',
            typescript: 'Type Safety',
            design: 'Design Systems',
            node: 'Backend',
        },

        // Blog
        blog: {
            sectionLabel: 'Blog',
            title: 'Articles &',
            titleAccent: 'thoughts',
            description: 'Deep dives into web development, architecture patterns, and lessons learned along the way.',
            readArticle: 'Read article',
            minRead: 'min read',
            noArticles: 'No articles yet',
            comingSoon: 'First articles coming soon!',
            subscribe: 'Subscribe',
            stayUpdated: 'Stay updated',
            newsletterDesc: 'Get new articles delivered straight to your inbox.',
            engineeringBlog: 'Engineering Blog',
            blogDesc: 'Deep dives into code and patterns.',
            readArticles: 'Read articles',
        },

        // Projects
        projects: {
            sectionLabel: 'Portfolio',
            title: 'My',
            titleAccent: 'projects',
            description: 'A curated selection of recent work — from complex web applications to open-source experiments.',
            all: 'All',
            noProjects: 'No projects yet',
            comingSoon: 'Projects coming soon!',
            viewLive: 'View live',
            sourceCode: 'Source code',
        },

        // CTA
        cta: {
            title: 'Let\'s build something',
            titleAccent: 'extraordinary',
            description: 'Have a project in mind? I\'d love to hear about it. Let\'s discuss how we can work together.',
            getInTouch: 'Get in touch',
        },

        // Footer
        footer: {
            navigation: 'Navigation',
            connect: 'Connect',
        },

        // Common
        common: {
            backTo: 'Back to',
        },
    },
};

export type Lang = 'fr' | 'en';
export type Translations = typeof translations.fr;

export function t(lang: Lang): Translations {
    return translations[lang];
}
