# example-code-quality

Example of using eslint, prettier, eslint-plugin-cypress etc.

## Install ESLint

```bash
npm install eslint --save-dev
```

## Initialise ESLint

```bash
npx eslint --init
```

You should see the following in the terminal.

```bash
You can also run this command directly using 'npm init @eslint/config@latest'.
Need to install the following packages:
@eslint/create-config@1.3.1
Ok to proceed? (y) y


> example-code-quality@1.0.0 npx
> create-config

@eslint/create-config: v1.3.1

√ How would you like to use ESLint? · problems
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · javascript
√ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint, globals, @eslint/js
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
☕️Installing...
```

## Install eslint-plugin-cypress

```bash
npm install eslint-plugin-cypress --save-dev
```

## Configure ESLint for Cypress (eslint.config.mjs)

```javascript
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
      quotes: ['error', 'single'],
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
```

## Add ESLint Script to package.json

```json
"scripts": {
  "lint": "eslint ."
}
```

## Run ESLint

```bash
npm run lint
```

---

## Install Prettier

```bash
npm install --save-dev prettier
```

## Create a Configuration File (Optional)

You can customise Prettier’s settings by creating a configuration file.  
You can create a .prettierrc file in your project root with your desired configuration.  
Here’s an example configuration:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}
```

> [!NOTE] 
> **Configuration Options Explained**  
> 
> **semi: true**
This option enforces the use of semicolons at the end of statements. By including semicolons, we reduce the chances of issues arising from JavaScript's automatic semicolon insertion.
> 
> **singleQuote: true**
This option specifies the use of single quotes (') for strings instead of double quotes ("). This helps maintain consistency across the codebase and aligns with the preferences of many developers and style guides.
> 
> **tabWidth: 2**
This setting defines the number of spaces per indentation level. A tab width of 2 spaces is commonly used in JavaScript projects, promoting readability and reducing horizontal scrolling.
> 
> **trailingComma: "none"**
With this option set to "none", Prettier will not add trailing commas in objects, arrays, or function parameters. This can help avoid issues with version control systems and improve the readability of the code by keeping the formatting clean.
> 
> **printWidth: 80**
This option specifies the maximum line length that Prettier will enforce. By default, Prettier wraps lines longer than 80 characters. This helps ensure that the code remains readable in various editors and displays, especially in environments where horizontal space is limited.

## Add Script to package.json

```json
"scripts": {
  "pretty": "prettier --write ."
}
```

## Run Prettier

```bash
npm run pretty
```
