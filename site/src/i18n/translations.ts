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
            titleAccent: 'actualités',
            description: 'Partage d\'expériences et d\'idées sur ce que j\'apprends, découvre et mets en place.',
            readArticle: 'Lire l\'article',
            minRead: 'min de lecture',
            noArticles: 'Aucun article pour le moment',
            comingSoon: 'Les premiers articles arrivent bientôt !',
            subscribe: 'S\'abonner',
            stayUpdated: 'Restez informé',
            newsletterDesc: 'Recevez les nouveaux articles directement dans votre boîte mail.',
            engineeringBlog: 'Le Blog',
            blogDesc: 'Partage d\'expériences et d\'idées',
            readArticles: 'Lire les articles',
            backToBlog: 'Retour au blog',
            allArticles: 'Tous les articles',
            alsoRead: 'À lire également',
            share: 'Partager',
            shareTwitter: 'Partager sur Twitter',
            shareLinkedin: 'Partager sur LinkedIn',
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
            backToProjects: 'Retour aux projets',
            relatedProjects: 'Projets similaires',
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
            title: 'Articles',
            titleAccent: '& news',
            description: 'Sharing experiences and ideas about what I learn, discover, and implement.',
            readArticle: 'Read article',
            minRead: 'min read',
            noArticles: 'No articles yet',
            comingSoon: 'First articles coming soon!',
            subscribe: 'Subscribe',
            stayUpdated: 'Stay updated',
            newsletterDesc: 'Get new articles delivered straight to your inbox.',
            engineeringBlog: 'The Blog',
            blogDesc: 'Sharing experiences and ideas.',
            readArticles: 'Read articles',
            backToBlog: 'Back to blog',
            allArticles: 'All articles',
            alsoRead: 'Also read',
            share: 'Share',
            shareTwitter: 'Share on Twitter',
            shareLinkedin: 'Share on LinkedIn',
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
            backToProjects: 'Back to projects',
            relatedProjects: 'Related projects',
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
