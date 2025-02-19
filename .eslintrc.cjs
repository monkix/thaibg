module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['.eslintrc.js'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018
	},
	rules: {
      "jsx-a11y/label-has-associated-control": ["error", {
        "required": {
          "some": ["nesting", "id"]
        }
      }],
      "jsx-a11y/label-has-for": ["error", {
        "required": {
          "some": ["nesting", "id"]
        }
      }]
    },
};
