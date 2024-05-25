import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...compat.extends('eslint-config-airbnb-base'),
  eslintConfigPrettier,
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
      'lines-between-class-members': [
        'error',
        {
          enforce: [
            { blankLine: 'always', prev: '*', next: 'method' },
            { blankLine: 'always', prev: 'method', next: '*' },
            { blankLine: 'never', prev: 'field', next: 'field' },
          ],
        },
      ],

      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    },
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    ignores: ['eslint.config.js', 'dist', 'webpack*js'],
  },
];
