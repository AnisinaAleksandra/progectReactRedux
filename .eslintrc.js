module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "plugin:storybook/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  plugins: ["react"],
  rules: {
    "react/jsx-indent": [2, 4, {
      indentLogicalExpressions: true
    }],
    quotes: ["off", "single"],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": "off",
    semi: ["error", "always"],
    "@typescript-eslint/no-misused-promises": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/naming-convention": "off",
    'max-len': ['error', {
      ignoreComments: true,
      code: 100
    }],
    'i18next/no-literal-string': ['off', {
      markupOnly: true,
      ignoreAttribute: ['data-testid', 'to']
    }]
  },
  globals: {
    __IS_DEV__: true
  }
};
