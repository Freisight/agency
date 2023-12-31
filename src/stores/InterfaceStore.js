// Import MobX
import { makeAutoObservable } from 'mobx';

class interfaceStore {
  data = {};

  async fetchData(currentLocale) {
    let apiUrl = null;

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://freisturz.netlify.app/api/interface';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/interface';
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

export default new interfaceStore();
