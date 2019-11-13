import { fetchAPI } from '../utils';

export default {
  Query: {
    cards: async () => (await fetchAPI('/list/card_t'))?.result ?? [],
  },
};
