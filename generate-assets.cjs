const fs = require('fs');
const path = require('path');

// إنشاء المجلدات إذا لم تكن موجودة
const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// صورة PNG بسيطة (1x1 بكسل) مشفرة بـ Base64 لتعمل كعنصر نائب
const placeholderImage = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
  'base64'
);

const rootDir = path.join(__dirname, '..');
const publicDir = path.join(rootDir, 'public');
const assetsDir = path.join(rootDir, 'assets');

console.log('Checking assets...');

// تأكد من وجود المجلدات
ensureDir(publicDir);
ensureDir(assetsDir);

// قائمة الملفات المطلوبة لنجاح البناء
const requiredFiles = [
  { path: path.join(publicDir, 'icon.png'), content: placeholderImage },
  { path: path.join(publicDir, 'icon.ico'), content: placeholderImage }, // مجرد ملف مؤقت
  { path: path.join(assetsDir, 'icon.png'), content: placeholderImage },
  { path: path.join(assetsDir, 'splash.png'), content: placeholderImage }
];

// إنشاء الملفات إذا كانت مفقودة
requiredFiles.forEach(file => {
  if (!fs.existsSync(file.path)) {
    fs.writeFileSync(file.path, file.content);
    console.log(`Created placeholder asset: ${file.path}`);
  }
});

console.log('Assets generation complete.');
