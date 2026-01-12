const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false // مطلوب لتحميل الصور المحلية
    },
    icon: path.join(__dirname, '../public/icon.png')
  });

  // إعدادات صلاحيات الميكروفون لـ Gemini Live
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    const allowedPermissions = ['media', 'audioCapture', 'mediaKeySystem'];
    if (allowedPermissions.includes(permission)) {
      callback(true);
    } else {
      callback(false);
    }
  });
  
  session.defaultSession.setPermissionCheckHandler((webContents, permission) => {
      if (permission === 'media' || permission === 'audio-capture') {
          return true;
      }
      return false;
  });

  // التحويل بين وضع التطوير والإنتاج
  const isDev = process.env.BROWSER === 'none'; 
  
  if (isDev) {
    win.loadURL('http://localhost:5173');
  } else {
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
