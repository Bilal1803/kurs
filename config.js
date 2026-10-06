// Поменяй адреса на свои
const LOCAL = ["localhost", "127.0.0.1"].includes(location.hostname); // локальный запуск для проверки
window.CONFIG = {
  API_URL: LOCAL ? "http://127.0.0.1:8000" : "https://api.ТВОЙ-ДОМЕН.ru",   // адрес сервера (backend)
  SITE_URL: LOCAL ? location.origin + "/" : "https://bilal1803.github.io/kurs/", // адрес этого сайта на GitHub Pages
  CONTACT_URL: "https://t.me/stylles",           // куда писать, чтобы повысить тариф
  // тарифы от младшего к старшему: из цен считается доплата при повышении
  TARIFFS: [
    {id: "start",  name: "Старт",     price: 2990,  desc: "Обучение без поиска клиентов"},
    {id: "earn",   name: "Заработок", price: 5990,  desc: "Обучение и поиск клиентов"},
    {id: "mentor", name: "Наставник", price: 11990, desc: "Всё и личная поддержка наставника"}
  ]
};
