import { gql } from "https://deno.land/x/oak_graphql@0.6.3/mod.ts";

export const typeDefs = gql`
type CharaSummary {
  chara_id: ID!
  conventional: String!
  kanji_spaced: String!
  kana_spaced: String!
  cards: [Int!]!
  ref: String
}

type CharaDetail {
  chara_id: ID!
  name: String!
  name_kana: String!
  age: Int!
  home_town: Int!
  height: Int!
  weight: Int!
  body_size_1: Int!
  body_size_2: Int!
  body_size_3: Int!
  birth_month: Int!
  birth_day: Int!
  constellation: Int!
  blood_type: Int!
  hand: Int!
  favorite: String!
  voice: String!
  model_height_id: ID!
  model_weight_id: ID!
  model_bust_id: ID!
  model_skin_id: ID!
  spine_size: Int!
  personality: Int!
  type: String!
  base_card_id: Int!
  bus_vo_value: Int!
  bus_da_value: Int!
  bus_vi_value: Int!
  kanji_spaced: String!
  kana_spaced: String!
  conventional: String!
  valist: [String]
  icon_image_ref: String!
}

# Card
type Rarity {
  rarity: Int!
  base_max_level: Int!
  add_max_level: Int!
  max_love: Int!
  base_give_money: Int!
  base_give_exp: Int!
  add_param: Int!
  max_star_rank: Int!
}

type Skill {
  id: ID!
  skill_name: String!
  explain: String!
  skill_type: String!
  judge_type: Int!
  skill_trigger_type: Int!
  skill_trigger_value: Int!
  cutin_type: Int!
  condition: Int!
  value: Int!
  value_2: Int!
  value_3: Int!
  max_chance: Int!
  max_duration: Int!
  explain_en: String!
  skill_type_id: ID!
  effect_length: [Int!]!
  proc_chance: [Int!]!
}

type LeaderSkill {
  id: ID!
  name: String!
  explain: String!
  type: Int!
  need_cute: Int!
  need_cool: Int!
  need_passion: Int!
  target_attribute: String!
  target_param: String!
  up_type: Int!
  up_value: Int!
  special_id: ID!
  need_chara: String!
  target_attribute_2: String!
  target_param_2: String!
  up_type_2: Int!
  up_value_2: Int!
  need_skill_variation: Int!
  param_limit: Int!
  explain_en: String!
}

type CharaRef {
  ref: String!
}

type CardSummary {
  id: ID!
  chara_id: ID!
  attribute: Int!
  has_spread: Boolean!
  pose: Int!
  title: String
  name_only: String!
  hp_min: Int!
  hp_max: Int!
  vocal_min: Int!
  vocal_max: Int!
  visual_min: Int!
  visual_max: Int!
  dance_min: Int!
  dance_max: Int!
  bonus_hp: Int!
  bonus_dance: Int!
  bonus_vocal: Int!
  bonus_visual: Int!
  evolution_id: ID!
  rarity_dep: Rarity!
  conventional: String!
  chara: CharaRef!
  ref: String!
}

type CardDetail {
  id: ID!
  name: String!
  chara_id: ID!
  rarity: Rarity!
  attribute: String!
  title_flag: Int!
  evolution_id: ID!
  series_id: ID!
  pose: Int!
  place: Int!
  evolution_type: Int!
  album_id: ID!
  open_story_id: ID!
  open_dress_id: ID!
  skill_id: ID!
  leader_skill_id: ID!
  grow_type: Int!
  hp_min: Int!
  vocal_min: Int!
  dance_min: Int!
  visual_min: Int!
  hp_max: Int!
  vocal_max: Int!
  dance_max: Int!
  visual_max: Int!
  bonus_hp: Int!
  bonus_vocal: Int!
  bonus_dance: Int!
  bonus_visual: Int!
  solo_live: Int!
  star_lesson_type: Int!
  disp_order: Int!
  chara: CharaDetail!
  has_spread: Boolean!
  has_sign: Boolean!
  name_only: String!
  title: String
  skill: Skill
  lead_skill: LeaderSkill
  overall_min: Int!
  overall_max: Int!
  overall_bonus: Int!
  valist: [String]
  best_stat: Int!
  sign_image_ref: String
  spread_image_ref: String
  card_image_ref: String!
  sprite_image_ref: String!
  icon_image_ref: String!
}

type Info {
  """
  The major version of the API as an int. Assume a value of 1 if it doesn't exist.
  """
  api_major: Int
  """
  The minor revision of the API as an int. Assume a value of 1 if it doesn't exist. When new things are added (that don't break the API for existing users), the revision will be bumped.
  """
  api_revision: Int
  """
  The version game data that ssdb derives data from.
  """
  truth_version: String!
}

type Event {
  id: ID!
  name: String!
  start_date: Int!
  end_date: Int!
  result_end_date: Int!
}

type GachaRate {
  r: Int!
  sr: Int!
  ssr: Int!
}

type Gacha {
  id: ID!
  name: String!
  start_date: Int!
  end_date: Int!
  type: Int!
  subtype: Int!
  rates: GachaRate
}

type Happening {
  events: [Event!]!
  gachas: [Gacha!]!
}

type Query {
  cards: [CardSummary!]!
  card(id: ID!): CardDetail
  chars: [CharaSummary!]!
  char(id: ID!): CharaDetail
  skill(id: ID!): Skill
  leaderSkill(id: ID!): LeaderSkill

  info: Info!
  happeningNow: Happening
  happening(timestamp: Int!): Happening
}
`;
