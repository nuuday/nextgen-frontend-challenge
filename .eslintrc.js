module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["prettier"],
  parserOptions: {
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "no-console": "error",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "eslint(react/prop-types)": "off",
      },
    },
  ],
};
