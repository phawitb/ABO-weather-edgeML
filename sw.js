self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // รับข้อมูลผ่าน network ปกติ
  e.respondWith(fetch(e.request));
});