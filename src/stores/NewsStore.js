import { makeAutoObservable } from 'mobx';

class NewsStore {
  dataInitial = []; // Начальные новости, которые отдаются при серверном рендеринге.
  dataUpdated = []; // Новости уже обновляемые для компонентов.
  dataPreviewItems = []; // Три последние новости для главной страницы.
  dataCurrentItem = {}; // Хранение одной новости для текущий страницы.

  currentItems = 1;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchInitialData(currentLocale) {
    let apiUrl = null;
    // Загрузка всех данных в зависимости от языка приложения

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://agency-ten-rouge.vercel.app/api/news';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/news';
    }

    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    if (currentLocale === 'en') {
      this.dataInitial = jsonData.en.slice(0, this.currentItems);
    }
    if (currentLocale === 'ru') {
      this.dataInitial = jsonData.ru.slice(0, this.currentItems);
    }
  }

  async fetchUpdatedData(currentLocale) {
    let apiUrl = null;

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://agency-ten-rouge.vercel.app/api/news';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/news';
    }

    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    // Загрузка уже обновдлённых данных.
    if (currentLocale === 'en') {
      this.dataUpdated = jsonData.en.slice(0, this.currentItems);
    }
    if (currentLocale === 'ru') {
      this.dataUpdated = jsonData.ru.slice(0, this.currentItems);
    }
  }

  // Функция переключения всех страниц и т.д.
  plusItems = (currentLocale) => {
    this.currentItems += 1;
  };

  async fetchPreviewData(currentLocale) {
    let apiUrl = null;

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://agency-ten-rouge.vercel.app/api/news';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/news';
    }

    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    // Загружает только 3 последние новости для главной страницы..
    if (currentLocale === 'en') {
      this.dataPreviewItems = jsonData.ru.slice(0, 3);
    }
    if (currentLocale === 'ru') {
      this.dataPreviewItems = jsonData.ru.slice(0, 3);
    }
  }

  async fetchCurrentNews(currentLocale, currentQuery) {
    let apiUrl = null;

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://agency-ten-rouge.vercel.app/api/news';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/news';
    }

    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    // Get a news item.
    if (currentLocale === 'en') {
      // Ищем в общем массиве элемент у которого совпадает slug
      this.dataCurrentItem =
        jsonData.en.filter(
          (item) => item.preview.slug === currentQuery.slug
        )[0] || null;
      // Из массива именнованного переводим в обычный для возможности циклом проходиться по нема.
      // Если не находится фильтром нужный слаг ИЛИ будет null.
    }
    if (currentLocale === 'ru') {
      this.dataCurrentItem =
        jsonData.ru.filter(
          (item) => item.preview.slug === currentQuery.slug
        )[0] || null;
    }
  }
}

export default new NewsStore();
