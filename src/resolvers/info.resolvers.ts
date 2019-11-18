import { fetchAPI } from '../utils';

export default {
  Query: {
    info: () => fetchAPI('/info'),
    happeningNow: () => fetchAPI('/happening/now'),
    happening: (_, { timestamp }) => fetchAPI(`/happening/${timestamp}`),
  },
};
