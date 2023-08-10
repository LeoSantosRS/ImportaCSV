module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'class-methods-use-this': 'off',
    camelcase: 'off',
  },
  "no-unused-vars": [
    "error",
    {
        "ignoreRestSiblings": true,
        "destructuredArrayIgnorePattern": "[A-Z]",
        "caughtErrors": "none"
    }
    ]
};
