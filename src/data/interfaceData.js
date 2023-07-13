// errors - для обработки ошибок
// topMenu - данные для меню и теги для страниц начальных страниц
// interface - здесь детали сайта, такие как время работы, адрес и т.д.
// catHeaders - pаголовки для разделов
// blockHeaders - заголовки для блоков сайта, не только те что для главной страницы

export const interfaceData = {
  en: {
    errors: { NotFound: 'Page not found, fuck you' },
    topMenu: {
      cases: { name: 'Cases', description: 'Our Cases' },
      marketing: { name: 'Marketing', description: 'Our Marketing' },
      development: { name: 'Development', description: 'Our Development' },
      team: { name: 'Team', description: 'Our team' },
      contacts: { name: 'Contacts', description: 'Our contacts' },
      news: { name: 'News', description: 'Our news' },
    },
    interface: {
      time: 'from 9:00 am to 20:00 pm',
    },
    catHeaders: {
      cases: { title: 'Our Cases', subtitle: 'Histories of success' },
      marketing: { title: 'Marketing', subtitle: 'Histories of success' },
      development: { title: 'Development', subtitle: 'Histories of success' },
      news: { title: 'News', subtitle: 'Histories of success' },
    },
    blockHeaders: {
      lastNews: {
        title: 'Last news',
        subtitle: 'Check our news',
      },
      gallery: {
        title: 'Gallery',
        subtitle: 'Images our',
      },
    },
  },
  ru: {
    errors: { NotFound: 'Страница удалена или перемещена' },
    topMenu: {
      cases: { name: 'Кейсы', description: 'Наши кейсы' },
      marketing: { name: 'Маркетинг', description: 'Услуги маркетинга' },
      development: { name: 'Разработка', description: 'Our Development' },
      team: { name: 'Команда', description: 'Our team' },
      contacts: { name: 'Контакты', description: 'Our contacts' },
      news: { name: 'Новости', description: 'Наши новости' },
    },
    interface: {
      time: 'с 9:00 до 20:00',
    },
    catHeaders: {
      cases: { title: 'Наши кейсы', subtitle: 'Истории нашего успеха' },
      marketing: { title: 'Маркетинг', subtitle: 'Histories of success' },
      development: { title: 'Разработка', subtitle: 'Histories of success' },
      news: { title: 'Новости', subtitle: 'Histories of success' },
    },
    blockHeaders: {
      lastNews: {
        title: 'Последние новости',
        subtitle: 'Следите за нашими новостями',
      },
      gallery: {
        title: 'Изображения новости',
        subtitle: 'Images our',
      },
    },
  },
};
