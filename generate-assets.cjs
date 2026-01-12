const fs = require('fs');
const path = require('path');

// تحديد مسار مجلد public
const publicDir = path.join(__dirname, '../public');

// التأكد من وجود مجلد public، وإنشاؤه إذا لم يكن موجوداً
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// قائمة بجميع الصور المستخدمة في التطبيق والتي تحتاج إلى عناصر نائبة (Placeholders)
const assets = [
  'map_bin_nur.png',
  'map_socotra.png',
  'earth_texture.jpg',
  'map_political.png',
  'map_hattin.png',
  'map_mongol.png',
  'map_ain_jalut.png',
  'map_nabhanid.png',
  'map_trade_routes.png',
  'img_al_aqr.png',
  'img_arch_civil.png',
  'img_arch_military.png',
  'arabesque_pattern.png',
  'oman_emblem.png',
  'stardust_pattern.png',
  'soil_pattern.png',
  'icon.png'
];

// بيانات صورة شفافة صغيرة جداً (1x1 بكسل) بصيغة Base64 لاستخدامها كعنصر نائب
const placeholderData = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
const placeholderBuffer = Buffer.from(placeholderData, 'base64');

console.log('Checking and generating placeholder assets...');

assets.forEach(asset => {
  const filePath = path.join(publicDir, asset);
  
  // التحقق مما إذا كان الملف موجوداً مسبقاً
  if (!fs.existsSync(filePath)) {
    try {
      // إنشاء الملف باستخدام بيانات الصورة النائبة
      fs.writeFileSync(filePath, placeholderBuffer);
      console.log(`Generated placeholder for: ${asset}`);
    } catch (err) {
      console.error(`Error creating ${asset}:`, err);
    }
  } else {
    // إذا كان الملف موجوداً، لا نفعل شيئاً (لتجنب الكتابة فوق الصور الحقيقية إذا قام المستخدم بإضافتها)
    console.log(`Asset already exists: ${asset}`);
  }
});

console.log('Assets generation complete.');
