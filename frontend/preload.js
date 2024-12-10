const { contextBridge, ipcRenderer } = require('electron');

// Вы можете определить API, доступный для рендера
contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message) => ipcRenderer.send('message', message),
  onMessage: (callback) => ipcRenderer.on('message', callback),
});
