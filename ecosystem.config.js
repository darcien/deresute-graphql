module.exports = {
  apps: [
    {
      name: "starlight",
      script: "./src/app.ts",
      interpreter: "deno",
      interpreterArgs: "run --allow-net",
    },
  ],
};
