const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  // إنشاء نافذة المتصفح
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    icon: path.join(__dirname, '../public/icon.png'), // تأكد من وجود أيقونة بهذا الاسم
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: !app.isPackaged // تفعيل أدوات المطور فقط في وضع التطوير
    },
    autoHideMenuBar: true, // إخفاء شريط القوائم العلوي لمظهر أجمل
    backgroundColor: '#ffffff'
  });

  if (!app.isPackaged) {
    // في وضع التطوير: تحميل من السيرفر المحلي (Vite)
    // نستخدم try-catch للتأكد من أن السيرفر يعمل
    win.loadURL('http://localhost:5173').catch(e => {
        console.log('Error loading URL, is Vite running?');
    });
    win.webContents.openDevTools();
    console.log("Running in development mode");
  } else {
    // في وضع الإنتاج (بعد البناء): تحميل ملف index.html من مجلد dist
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

// تهيئة التطبيق
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// إغلاق التطبيق عند إغلاق كل النوافذ (ويندوز ولينكس)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});