import { fetchAPI } from '../utils';

export default {
  Query: {
    chars: async () => (await fetchAPI('/list/char_t'))?.result ?? [],
    char: async (_, { id }) =>
      ((await fetchAPI(`/char_t/${id}`))?.result ?? [])[0],
    cards: async () => (await fetchAPI('/list/card_t'))?.result ?? [],
    card: async (_, { id }) =>
      ((await fetchAPI(`/card_t/${id}`))?.result ?? [])[0],
    skill: async (_, { id }) =>
      ((await fetchAPI(`/skill_t/${id}`))?.result ?? [])[0],
    leaderSkill: async (_, { id }) =>
      ((await fetchAPI(`/leader_skill_t/${id}`))?.result ?? [])[0],
  },
};
