const fs = require('fs');
const path = require('path');

const directories = ['/app', '/components'];

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Regex to match Tailwind's rounded utility classes, EXCLUDING rounded-full and rounded-sm (maybe keep sm? the request says 8px which is rounded-lg, but let's just make it all rounded-[8px])
            // Matches: rounded-md, rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-[xx], rounded-t-xx, rounded-b-xx, etc.
            // Actually, to be safe, replace rounded-lg, rounded-xl, rounded-2xl, rounded-3xl, rounded-[16px], rounded-[24px], rounded-[32px], rounded-[40px], rounded-[20px] 
            
            content = content.replace(/rounded-(md|lg|xl|2xl|3xl)/g, 'rounded-[8px]');
            content = content.replace(/rounded-\[([0-9]+)px\]/g, 'rounded-[8px]');
            
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Processed: ${fullPath}`);
        }
    }
}

// Ensure the paths are relative to workspace root
const rootDir = process.cwd();
directories.forEach(dir => processDirectory(path.join(rootDir, dir)));
