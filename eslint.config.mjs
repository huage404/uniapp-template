import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginVue from 'eslint-plugin-vue'
import globals from 'globals'
import typescriptEslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

export default typescriptEslint.config(
	{ignores: ['*.d.ts', '**/coverage', '**/dist']},
	{
		extends: [
			eslint.configs.recommended,
			...typescriptEslint.configs.recommended,
			...eslintPluginVue.configs['flat/recommended'],
		],
		files: ['**/*.{ts,vue}'],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: globals.browser,
			parserOptions: {
				parser: typescriptEslint.parser,
			},
		},
		rules: {
			// your rules
			'vue/multi-word-component-names': [
				'error',
				{
					'ignores': ['index'],
				},
			],
			'vue/block-order': [
				'error',
				{
					'order': ['docs', 'script', 'template', 'style'],
				},
			],
		},
	},
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			importPlugin.flatConfigs.recommended,
			importPlugin.flatConfigs.typescript,
		],
	},
	eslintConfigPrettier,
)
