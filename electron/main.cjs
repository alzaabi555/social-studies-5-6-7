import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: "social-studies-7",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // For simple interaction in this demo scope
      devTools: false // Disable dev tools in production for cleaner look
    },
    icon: path.join(__dirname, '../public/icon.png'),
    autoHideMenuBar: true // Hide the ugly top menu on Windows
  });

  // In production, load the local bundle file
  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  } else {
    // In dev, load the vite server
    win.loadURL('http://localhost:5173');
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
