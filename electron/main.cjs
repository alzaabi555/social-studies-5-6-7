const { app, BrowserWindow, session } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false // مطلوب أحياناً لتحميل الصور المحلية في بيئة الإلكترون
    },
    icon: path.join(__dirname, '../public/icon.png')
  });

  // منح صلاحيات الميكروفون لاستخدام المعلم الذكي (Gemini Live)
  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    const allowedPermissions = ['media', 'audioCapture']; 
    if (allowedPermissions.includes(permission)) {
      callback(true); // السماح
    } else {
      callback(false);
    }
  });
  
  // التحقق من الأجهزة
  session.defaultSession.setPermissionCheckHandler((webContents, permission) => {
      if (permission === 'media' || permission === 'audio-capture') {
          return true;
      }
      return false;
  });

  // تحديد الرابط بناءً على البيئة (تطوير أو إنتاج)
  const isDev = process.env.BROWSER === 'none'; // يتم ضبط هذا المتغير في سكريبت electron:dev
  
  if (isDev) {
    // في وضع التطوير، الاتصال بسيرفر Vite
    win.loadURL('http://localhost:5173');
  } else {
    // في وضع الإنتاج (التطبيق النهائي)، تحميل ملف index.html
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
