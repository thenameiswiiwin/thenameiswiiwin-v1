module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['kentcdodds', 'kentcdodds/react', 'kentcdodds/jsx-a11y'],
  rules: {
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/jsx-pascal-case': 'off',
    'import/order': 'off',
    'babel/camelcase': 'off',
    'jsx-a11y/label-has-for': 'off',
    'max-lines-per-function': 'off',
    'babel/quotes': 'off',
    'consistent-return': 'off',
  },
}
