// هذا السطر ضروري جداً لإنشاء اختصارات سطح المكتب أثناء التثبيت
if (require('electron-squirrel-startup')) {
  require('electron').app.quit();
  process.exit(0);
}

const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');

const isDev = process.env.NODE_ENV === 'development' || !app.isPackaged;

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    // تأكد من وجود الأيقونة في مجلد public
    icon: path.join(__dirname, '../public/icon.png'),
    webPreferences: {
      // إعدادات الأمان والربط
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    },
    autoHideMenuBar: true,
    title: "الكتاب التفاعلي",
    backgroundColor: '#F8FAFC'
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    // في الإنتاج، تحميل الملف المبني
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  // فتح الروابط الخارجية في المتصفح
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
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

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// استقبال الرسائل من الواجهة
ipcMain.on('toMain', (event, args) => {
  console.log("Received:", args);
});
