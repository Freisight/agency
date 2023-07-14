// Import MobX
import { makeAutoObservable } from 'mobx';

class indexStore {
  data = {};

  async fetchData(currentLocale) {
    let apiUrl = null;

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://spontaneous-phoenix-39b801.netlify.app/api/main';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/main';
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

  constructor() {
    makeAutoObservable(this);
  }
}

export default new indexStore();
