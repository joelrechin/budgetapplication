// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const expensesDB = require("./src/db/expensemgr");


const API = {
  loadCategories: (callback) => ipcRenderer.on("loadCategories", (_event, args) => callback(args) ),
 // getCategories: () => ipcRenderer.invoke('getCategories'),
  saveCategory: (category) => ipcRenderer.send("saveCategory", category)
}

contextBridge.exposeInMainWorld("sqlite", {expensesDB, });
contextBridge.exposeInMainWorld("require", require);
contextBridge.exposeInMainWorld("expenseAPI", API);

const TEST_API = {
  greet: (message) => ipcRenderer.send("greet", message),
  LoadCategories: () => ipcRenderer.invoke("loadCategories"),
}

contextBridge.exposeInMainWorld("api", TEST_API);


// All the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })



  

