import { fetchAPI } from '../utils';

export default {
  Query: {
    chars: async () => (await fetchAPI('/list/char_t'))?.result ?? [],
    char: async (_, { id }) =>
      ((await fetchAPI(`/char_t/${id}`))?.result ?? [])[0],
  },
};
