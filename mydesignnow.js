console.log("*** Inicia MyDesignNow.js (Electron) ***");
const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Crea la ventana del navegador.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // y carga el  index.html de la aplicación.
  win.loadFile('mydesignnow.html')
}

app.whenReady().then(createWindow)
console.log("*** Termina MyDesignNow.js (Electron) ***");