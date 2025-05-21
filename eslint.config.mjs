import eslintPluginTs from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'
import eslintPluginPrettier from 'eslint-plugin-prettier'

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser,
    },
    plugins: {
      '@typescript-eslint': eslintPluginTs,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...eslintPluginTs.configs.recommended.rules,
      ...eslintPluginPrettier.configs.recommended.rules,
    },
  },
]
