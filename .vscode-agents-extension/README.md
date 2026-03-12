# VSCode Agents AutoCopy Extension

Questa estensione copia e **aggiorna automaticamente** la cartella `.github/agents` in ogni workspace VS Code ad ogni avvio, sovrascrivendo i file esistenti con la versione inclusa nell'estensione. Aggiorna anche il `.gitignore` per escluderla dal versionamento.

## Come funziona
- All'avvio del workspace, la cartella `.github/agents` viene copiata (o aggiornata) dalla cartella `agents` dell'estensione.
- I file esistenti in `.github/agents` vengono **sempre sovrascritti** con quelli dell'estensione.
- La voce `.github/agents` viene aggiunta a `.gitignore` se non già presente.

## Agent inclusi

| File | Descrizione |
|------|-------------|
| `Boolean.agent.md` | Mentore per compiti Boolean (HTML/CSS/JS, Bootstrap, Java, PHP, MySQL) |
| `backendmentor.agent.md` | Mentore per PHP e MySQL — debug backend, query, sicurezza |
| `javamentor.agent.md` | Mentore per Java — errori, stacktrace, OOP, flusso |
| `webmentor.agent.md` | Mentore per HTML/CSS/JS e Bootstrap — audit layout e debug |

Tutti gli agent hanno un approccio severo: guidano senza scrivere soluzioni complete e senza modificare file.

## Personalizzazione
Sostituisci o aggiungi file nella cartella `agents` dell'estensione con i tuoi custom agent. Ad ogni avvio del workspace i file verranno ricpiati nel progetto corrente.

## Build e installazione
1. Installa le dipendenze:
   ```bash
   npm install
   ```
2. Compila:
   ```bash
   npm run compile
   ```
3. Impacchetta e installa:
   ```bash
   npx vsce package
   code --install-extension vscode-agents-autocopy-0.0.4.vsix
   ```

## Note
- Compatibile con VSCode >= 1.70.0.
- Gli agent vengono **sempre aggiornati** ad ogni avvio del workspace.
- La cartella `.github/agents` è esclusa dal versionamento git tramite `.gitignore`.
