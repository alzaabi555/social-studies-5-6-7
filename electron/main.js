const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    icon: path.join(__dirname, '../public/icon.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    }
  });

  // ملاحظة: تم إلغاء أكواد صلاحيات الميكروفون من هنا بناءً على طلبك.

  // تحديد المسار بناءً على البيئة
  const isDev = process.env.BROWSER === 'none'; 

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    // المسار الصحيح للملفات بعد البناء
    const distPath = path.join(__dirname, '../dist-react/index.html');
    mainWindow.loadFile(distPath);
  }

  // إخفاء القوائم العلوية
  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
