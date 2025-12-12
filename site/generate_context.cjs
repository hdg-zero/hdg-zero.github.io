const fs = require('fs');
const path = require('path');

// --- CONFIGURATION ---
const OUTPUT_FILE = 'CONTEXT_PROJECT.md';
const IGNORE_DIRS = ['node_modules', '.git', '.astro', 'dist', '.vscode', '.idea'];
const IGNORE_FILES = ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', '.DS_Store', OUTPUT_FILE, path.basename(__filename)];
const IGNORE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.ico', '.svg', '.woff', '.woff2', '.ttf', '.eot'];

// Fonction pour générer l'arborescence visuelle
function generateTree(dir, prefix = '') {
    let output = '';
    const files = fs.readdirSync(dir);
    
    // Filtrage simple pour l'affichage
    const filteredFiles = files.filter(file => !IGNORE_DIRS.includes(file) && !IGNORE_FILES.includes(file));

    filteredFiles.forEach((file, index) => {
        const fullPath = path.join(dir, file);
        const isLast = index === filteredFiles.length - 1;
        const marker = isLast ? '└── ' : '├── ';
        
        output += `${prefix}${marker}${file}\n`;
        
        if (fs.statSync(fullPath).isDirectory()) {
            output += generateTree(fullPath, prefix + (isLast ? '    ' : '│   '));
        }
    });
    return output;
}

// Fonction récursive pour lire le contenu des fichiers
function scanDirectory(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        // Si c'est un dossier ignoré, on saute
        if (stat.isDirectory()) {
            if (!IGNORE_DIRS.includes(file)) {
                scanDirectory(fullPath, fileList);
            }
        } else {
            // Vérifications fichiers
            const ext = path.extname(file).toLowerCase();
            if (!IGNORE_FILES.includes(file) && !IGNORE_EXTENSIONS.includes(ext)) {
                fileList.push(fullPath);
            }
        }
    });

    return fileList;
}

// --- MAIN EXECUTION ---
console.log('🔄 Génération du contexte IA en cours...');

try {
    const rootDir = process.cwd();
    let outputContent = `# CONTEXTE DU PROJET ASTRO\n\n`;
    outputContent += `Date de génération : ${new Date().toLocaleString()}\n\n`;

    // 1. Ajouter l'arborescence
    outputContent += `## 1. STRUCTURE DU PROJET\n\`\`\`text\n`;
    outputContent += generateTree(rootDir);
    outputContent += `\`\`\`\n\n`;

    // 2. Ajouter le contenu des fichiers
    outputContent += `## 2. CONTENU DES FICHIERS\n\n`;
    
    const allFiles = scanDirectory(rootDir);

    allFiles.forEach(filePath => {
        // Chemin relatif pour l'affichage (ex: src/pages/index.astro)
        const relativePath = path.relative(rootDir, filePath);
        const extension = path.extname(filePath).substring(1) || 'txt';
        
        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            
            outputContent += `--- DEBUT FICHIER : ${relativePath} ---\n`;
            outputContent += `Path: ${relativePath}\n`;
            outputContent += `\`\`\`${extension}\n`;
            outputContent += content;
            outputContent += `\n\`\`\`\n`;
            outputContent += `--- FIN FICHIER ---\n\n`;
            
        } catch (err) {
            console.error(`Erreur lecture ${relativePath}:`, err.message);
        }
    });

    fs.writeFileSync(OUTPUT_FILE, outputContent);
    console.log(`✅ Succès ! Fichier généré : ${OUTPUT_FILE}`);
    console.log(`📂 Vous pouvez maintenant donner ce fichier à votre agent IA.`);

} catch (error) {
    console.error('❌ Une erreur est survenue :', error);
}