// Import MobX
import { makeAutoObservable } from 'mobx';

class casesStore {
  data = {};
  dataPreviewItems = [];
  dataCurrentItem = {};

  async fetchData(currentLocale) {
    let apiUrl = null;

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://spontaneous-phoenix-39b801.netlify.app/api/cases';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/cases';
    }

    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    if (currentLocale === 'en') {
      this.data = jsonData.en;
    }
    if (currentLocale === 'ru') {
      this.data = jsonData.ru;
    }
  }

  // Загружает только три первых кейса.
  async fetchPreviewData(currentLocale) {
    let apiUrl = null;

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://freisturz.netlify.app/api/cases';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/cases';
    }

    const response = await fetch(apiUrl);
    const jsonData = await response.json();

    if (currentLocale === 'en') {
      this.dataPreviewItems = jsonData.en.slice(0, 3);
    }
    if (currentLocale === 'ru') {
      this.dataPreviewItems = jsonData.ru.slice(0, 3);
    }
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new casesStore();
