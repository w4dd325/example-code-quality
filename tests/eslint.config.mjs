import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginCypress from 'eslint-plugin-cypress';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: 'readonly',
        it: 'readonly',
        cy: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    }
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      cypress: pluginCypress
    },
    rules: {
      'cypress/no-assigning-return-values': 'error',
      'cypress/no-unnecessary-waiting': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1 }],
      indent: ['error', 2],
      semi: ['error', 'always'],
      quotes: ['error', 'single'], // Enforce single quotes
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',
      'comma-dangle': [
        'error',
        {
          objects: 'never',
          arrays: 'never',
          imports: 'never',
          exports: 'never',
          functions: 'never'
        }
      ]
    }
  }
];
