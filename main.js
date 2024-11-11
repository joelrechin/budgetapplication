// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
const path = require('node:path')

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    minHeight: 600,
    minWidth: 1200,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'), 
      enableRemoteModule: true,
    }
  })
  // and load the index.html of the app.
  mainWindow.loadFile('./src/html/index.html')
  mainWindow.webContents.openDevTools()
}

app.on('browser-window-created', (event, window) => {
  window.setAlwaysOnTop(true);
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
})  


// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.