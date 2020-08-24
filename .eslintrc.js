module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["react", "react-hooks", "prettier"],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: "module",
    jsx: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    window: true,
    document: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "no-console": "error",
    "array-callback-return": "error",
    "eqeqeq": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-unused-expressions": "error",
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "react/jsx-key": "error",
    "react/no-unescaped-entities": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
      ],
      plugins: ["@typescript-eslint"],
      rules: {
        "no-var": "off",
        "prefer-const": "off",
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
