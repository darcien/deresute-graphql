import { Application, Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { applyGraphQL } from "https://deno.land/x/oak_graphql@0.6.3/mod.ts";

import { typeDefs } from "./schema.ts";

const app = new Application();

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

const baseURL = "https://starlight.kirara.ca/api/v1";

async function fetchAPI(path: string) {
  const res = await fetch(`${baseURL}${path}`);
  return res.json();
}

type Id = string;
type HasIdVariable = { id: Id };

const resolvers = {
  Query: {
    info: () => fetchAPI("/info"),
    happeningNow: () => fetchAPI("/happening/now"),
    happening: (_: unknown, { timestamp }: { timestamp: number }) =>
      fetchAPI(`/happening/${timestamp}`),
    chars: async () => (await fetchAPI("/list/char_t"))?.result ?? [],
    char: async (_: unknown, { id }: HasIdVariable) =>
      ((await fetchAPI(`/char_t/${id}`))?.result ?? [])[0],
    cards: async () => (await fetchAPI("/list/card_t"))?.result ?? [],
    card: async (_: unknown, { id }: HasIdVariable) =>
      ((await fetchAPI(`/card_t/${id}`))?.result ?? [])[0],
    skill: async (_: unknown, { id }: HasIdVariable) =>
      ((await fetchAPI(`/skill_t/${id}`))?.result ?? [])[0],
    leaderSkill: async (_: unknown, { id }: HasIdVariable) =>
      ((await fetchAPI(`/leader_skill_t/${id}`))?.result ?? [])[0],
  },
};

const GraphQLService = await applyGraphQL<Router>({
  Router,
  typeDefs,
  resolvers,
});

app.use(GraphQLService.routes(), GraphQLService.allowedMethods());

console.log("Server start at http://localhost:4000");
await app.listen({ port: 4000 });
