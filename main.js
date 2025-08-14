// main.js

const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');


function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    icon: path.join(__dirname, 'src/img/crc-manager-icon.png'),
    webPreferences: {
      nodeIntegration: true,         // permite usar Node no renderer
      contextIsolation: false        // desativa isolamento (recomendado evitar em produção)
    }
  });

  mainWindow.loadFile('views/index.html');
}

//Cria a janela do Gerador de Documentos 
function createGeradorWindow() {
  const geradorWindow = new BrowserWindow({
    width: 800,
    height: 500,
    title: "Gerador de Documentos",
    icon: path.join(__dirname, 'src/img/crc-manager-icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  geradorWindow.loadFile('views/gerador.html');
}

// Recebe sinal do renderer para abrir a janela do gerador
ipcMain.on('abrir-janela-gerador', () => {
  createGeradorWindow();
});

//  Inicializa o app
app.whenReady().then(() => {
  createMainWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
