module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base', // airbnb without react
    'airbnb-typescript/base', // airbnb ts without react
    'prettier', // prettier, make sure to put it last, to override other configs
  ],
  overrides: [
    {
      env: { node: true },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: { sourceType: 'script' },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json', // ts parser
    tsconfigRootDir: __dirname, // fix Cannot read file tsconfig.json
  },
  ignorePatterns: ['.eslintrc.js'], // ignore this file
  rules: {},
};
