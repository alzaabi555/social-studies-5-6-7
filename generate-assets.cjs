const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

// التأكد من وجود مجلد public
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// قائمة بالصور المستخدمة في التطبيق لتوليد بدائل لها
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

// صورة عنصر نائب (Placeholder) عبارة عن 1x1 بكسل
const placeholderData = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
const placeholderBuffer = Buffer.from(placeholderData, 'base64');

console.log('Checking and generating placeholder assets...');

assets.forEach(asset => {
  const filePath = path.join(publicDir, asset);
  if (!fs.existsSync(filePath)) {
    try {
      fs.writeFileSync(filePath, placeholderBuffer);
      console.log(`Generated placeholder for: ${asset}`);
    } catch (err) {
      console.error(`Error creating ${asset}:`, err);
    }
  }
});

console.log('Assets generation complete.');
