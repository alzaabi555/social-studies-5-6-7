const { app, BrowserWindow } = require('electron');
const path = require('path');

// تمت إزالة شرط electron-squirrel-startup الذي كان يسبب الخطأ

const createWindow = () => {
  // إنشاء نافذة المتصفح
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    // تحديد مسار الأيقونة (تأكد من وجود icon.png في مجلد public)
    icon: path.join(__dirname, '../public/icon.png')
  });

  // تحميل التطبيق
  if (!app.isPackaged) {
    // في وضع التطوير
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    // في وضع الإنتاج (بعد التثبيت)
    // المسار الصحيح للملف داخل حزمة asar
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }
  
  // إخفاء شريط القوائم العلوي لمظهر أفضل
  mainWindow.setMenuBarVisibility(false);
};

// تشغيل التطبيق عند الجاهزية
app.on('ready', createWindow);

// إنهاء التطبيق عند إغلاق النوافذ (ويندوز ولينكس)
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
