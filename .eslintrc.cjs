/* ESLint (classic config; ESLint 8) for the Next.js + React + TS marketing app.
 * Next 16 removed `next lint`, so we run ESLint directly. Applies the
 * recommended TS rules plus the React Hooks rules; stylistic rules stay warnings. */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2022, sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  env: { browser: true, node: true, es2022: true },
  ignorePatterns: ['.next', 'node_modules', 'out', 'dist', '*.cjs', 'next-env.d.ts'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' },
    ],
  },
};
