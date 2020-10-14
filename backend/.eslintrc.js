module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsdoc/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'all', argsIgnorePattern: '^_' },
    ],
    'jsdoc/no-types': 'warn',
    'jsdoc/require-description-complete-sentence': 'warn',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns-type': 'off',
    'no-console': 'error',
    'no-return-await': 'error',
    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
  },
  settings: { jsdoc: { ignoreInternal: true } },
};
