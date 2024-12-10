const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 800 });

  // Загрузка основного файла приложения
  win.loadFile('dist/frontend/browser/index.html');

  // Обработка ошибки загрузки
  win.webContents.on('did-fail-load', () => {
    win.loadFile('dist/frontend/browser/index.html');
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Закрытие приложения на macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
