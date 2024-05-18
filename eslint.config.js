const globals = require('globals');
const pluginJs = require('@eslint/js');

module.exports = {
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'script', // Configuración para CommonJS
  },
  rules: {
    'no-console': 'warn',
  },
  overrides: [
    {
      files: ['**/*.js'],
      languageOptions: {
        globals: globals.browser,
      },
    },
    {
      extends: pluginJs.configs.recommended,
    },
  ],
};
