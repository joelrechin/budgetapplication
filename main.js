// main.js
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';
// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron/main');
const path = require("node:path");
const fs = require("fs");
const { get } = require('node:http');

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
      preload: path.join(__dirname, "preload.js"),
      enableRemoteModule: true,
    },
  });
  

  mainWindow.loadFile("./src/html/index.html");
  mainWindow.webContents.openDevTools();
};


app.on("browser-window-created", (event, window) => {
  window.setAlwaysOnTop(true);
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on("saveCategory", saveCategory);
//ipcMain.handle('getCategories', getCategories);

//IPC HANDLERS
// ipcMain.on("greet", (event, args) => {console.log(args)});
// //ipcMain.handle("loadCategories", async (event, args) => { return 1; });
// ipcMain.handle("loadCategories", getCategories);


async function getCategories() {
  let categories;
  try {
    const data = fs.readFileSync("./configs/app.json", "utf8");
    let jsonData = JSON.parse(data);
    categories = jsonData.expenses.categories;
  } catch (err) {
    console.error("Error reading file:", err);
  }
  console.log("categories: ")
  console.log(categories)
  return categories;
}

function saveCategory(event, category) {
  try {
    const data = fs.readFileSync("./configs/app.json", "utf8");
    let jsonData = JSON.parse(data);
    jsonData.expenses.categories.push(category);
    fs.writeFileSync("./configs/app.json", JSON.stringify(jsonData));
    event.reply("categorySaved", category);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};
