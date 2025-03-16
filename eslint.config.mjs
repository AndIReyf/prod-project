import path from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...compat.extends('airbnb'),
  {
    rules: {
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-default-export': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'import/no-relative-packages': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      'react-hooks/rules-of-hooks': 'off',
      'react/prop-types': 'off',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'react/no-array-index-key': 'off',
      'react/jsx-props-no-spreading': 'warn',
      'react-hooks/exhaustive-deps': 'off',
      'react/no-unused-prop-types': 'off',
      'react/require-default-props': 'off',
      'react/function-component-definition': 'off',
      'no-undef': 'warn',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
];
