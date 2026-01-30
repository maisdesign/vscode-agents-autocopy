import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

function copyFolderSync(src: string, dest: string) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyFolderSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

export function activate(context: vscode.ExtensionContext) {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders) return;
    const rootPath = workspaceFolders[0].uri.fsPath;
    const agentsFolder = path.join(rootPath, '.github', 'agents');
    const extensionAgents = context.asAbsolutePath('agents');

    if (!fs.existsSync(agentsFolder)) {
        try {
            copyFolderSync(extensionAgents, agentsFolder);
        } catch (e) {
            vscode.window.showErrorMessage('Errore nella copia della cartella agents: ' + e);
        }
    }

    // Aggiorna .gitignore
    const gitignorePath = path.join(rootPath, '.gitignore');
    let gitignoreContent = '';
    if (fs.existsSync(gitignorePath)) {
        gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
    }
    if (!gitignoreContent.includes('.github/agents')) {
        gitignoreContent += (gitignoreContent.endsWith('\n') ? '' : '\n') + '.github/agents\n';
        fs.writeFileSync(gitignorePath, gitignoreContent);
    }
}

export function deactivate() {}
