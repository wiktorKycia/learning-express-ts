import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist/**/*', 'node_modules/**/*']),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node }
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.json'],
    ignores: ['package-lock.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended']
  },
  {
    files: ['**/*.jsonc'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended']
  }
])
