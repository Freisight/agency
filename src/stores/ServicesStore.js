// Import MobX
import { makeAutoObservable } from 'mobx';

class servicesStore {
  data = {};
  dataCurrentItem = {};

  async fetchData(currentLocale) {
    let apiUrl = null;

    if (process.env.NODE_ENV === 'production') {
      // URL для производственной среды
      apiUrl = 'https://agency-ten-rouge.vercel.app/api/services';
    } else {
      // URL для других сред, например, разработки
      apiUrl = 'http://localhost:3000/api/services';
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

export default new servicesStore();
