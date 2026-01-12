const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

// مهم جداً: هذا السطر يعالج أحداث التثبيت وإلغاء التثبيت في ويندوز (Squirrel)
// بدونه قد يفشل بناء ملف exe أو لا يعمل بعد التثبيت
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // إعدادات نافذة التطبيق الرئيسية
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    // تحديد مسار الأيقونة (نخرج من مجلد electron ونبحث في public)
    icon: path.join(__dirname, '../public/icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true
    },
    autoHideMenuBar: true, // إخفاء القوائم العلوية لمظهر أنظف
    title: "الكتاب التفاعلي",
    backgroundColor: '#F8FAFC' // لون الخلفية لتجنب الوميض الأبيض
  });

  // التحقق هل التطبيق في وضع التطوير أم الإنتاج (بعد البناء)
  const isDev = !app.isPackaged;

  if (isDev) {
    // في وضع التطوير: تحميل الرابط من خادم Vite
    mainWindow.loadURL('http://localhost:5173');
    console.log('Running in development mode');
  } else {
    // في وضع الإنتاج: تحميل ملف index.html الذي تم بناؤه في مجلد dist
    // path.join يضمن دمج المسارات بشكل صحيح في ويندوز
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // التعامل مع الروابط الخارجية (فتحها في المتصفح الافتراضي وليس داخل التطبيق)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
};

// تهيئة التطبيق عند الجاهزية
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // إعادة إنشاء النافذة في نظام Mac إذا تم النقر على الأيقونة
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// إغلاق التطبيق عند إغلاق جميع النوافذ (ويندوز و لينكس)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
