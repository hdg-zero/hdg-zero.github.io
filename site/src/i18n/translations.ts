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
            roleBadge: 'Ingénieur en systèmes d\'information',
            headline: 'Développer et',
            headlineAccent: 'partager.',
            subtitle: 'Ingénieur en systèmes d\'information, j\'explore au quotidien la nécessité de la protection des données personnelles et privées, le potentiel de l\'IA générative et toute sorte de sujet touchant de près ou de loin aux technologies de l\'information. Retrouvez ici mes projets techniques, mes expérimentations et mes retours d\'expérience.',
            viewWork: 'Voir mes projets',
            readBlog: 'Lire le blog',
        },

        // Bento Grid / Work section
        work: {
            sectionLabel: 'Réalisations & Ingénierie',
            title: 'Projets',
            titleAccent: 'phares',
            description: 'Architectures de sécurité, applications offline-first et configurations système pensées pour la performance.',
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
            description: 'Architectures logicielles, environnements conteneurisés et outils open-source axés sur la confidentialité.',
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
            roleBadge: 'Information Systems Engineer',
            headline: 'Develop and',
            headlineAccent: 'share.',
            subtitle: 'Information systems engineer, I explore daily the need for personal and private data protection, the potential of generative AI, and all kinds of topics related to information technology. Find here my technical projects, experiments, and takeaways.',
            viewWork: 'View my projects',
            readBlog: 'Read the blog',
        },

        // Bento Grid / Work section
        work: {
            sectionLabel: 'Featured Engineering',
            title: 'Key',
            titleAccent: 'projects',
            description: 'Security architectures, offline-first applications, and tuned Linux workflows built for performance.',
            latest: 'Latest Project',
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
            description: 'Software architectures, containerized environments, and privacy-focused open-source tooling.',
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
