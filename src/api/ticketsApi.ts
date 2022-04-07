import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://front-test.beta.aviasales.ru/',
});

export const ticketsApi = {
  getSearchId() {
    return instance.get('search').then(res => res.data.searchId);
  },
  getTicketsPack(searchId: string) {
    return instance.get(`tickets?searchId=${searchId}`);
  },
};
