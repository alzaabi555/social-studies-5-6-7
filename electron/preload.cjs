const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  // هنا نضع أي دوال نريد تمريرها من النظام إلى الواجهة
  versions: process.versions,
});