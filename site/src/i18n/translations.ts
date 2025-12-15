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
            headline: 'Développer et',
            headlineAccent: 'partager.',
            subtitle: 'Ingénieur en systèmes d\'information, j\'explore au quotidien la nécessité de la protection des données personnelles et privées, le potentiel de l\'IA générative et toute sorte de sujet touchant de près ou loin aux technologies de l\'information.',
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
            headline: 'Develop and',
            headlineAccent: 'share.',
            subtitle: 'Information systems engineer, I explore daily the need for personal and private data protection, the potential of generative AI, and all kinds of topics related to information technology.',
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
