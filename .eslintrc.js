module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
  extends: [
    "@nuxtjs",
    "plugin:nuxt/recommended",
    "prettier", // Prettierとの競合を防ぐため
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": "off", // console.log()の使用を許可する
    semi: ["error", "never"], // 文末にセミコロンを付けない
  },
};
