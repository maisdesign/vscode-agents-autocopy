# VSCode Agents AutoCopy Extension

Questa estensione copia automaticamente la cartella `.github/agents` in ogni nuovo progetto VS Code se non è già presente e aggiorna il `.gitignore` per escluderla dal versionamento.

## Come funziona
- All'avvio di un workspace, se `.github/agents` non esiste, viene copiata dalla cartella dell'estensione.
- Se `.github/agents` esiste già, non viene sovrascritta.
- La voce `.github/agents` viene aggiunta a `.gitignore` se non presente.

## Personalizzazione
Sostituisci i file nella cartella `agents` dell'estensione con i tuoi custom agent.

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
   code --install-extension vscode-agents-autocopy-0.0.1.vsix
   ```

## Note
- Compatibile con Windows.
- Non sovrascrive agent già presenti nei progetti.
