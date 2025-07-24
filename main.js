const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 600,
    icon: path.join(__dirname, 'src/img/crc-manager-icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Carrega o HTML principal
  win.loadFile('views/index.html');
}

const geradorWindow = () => {
const gerador = new BrowserWindow ({ width: 800, height: 500,
    icon: path.join(__dirname, 'src/img/crc-manager-icon.png')
})
gerador.loadFile('views/gerador.html')
}

app.whenReady().then(() =>{
    createWindow()
    geradorWindow()
});

