import { fetchAPI } from '../utils';

export default {
  Query: {
    info: () => fetchAPI('/info'),
  },
};
