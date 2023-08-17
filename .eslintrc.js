module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'react-native/no-inline-styles': 0,
    'react-hooks/exhaustive-deps': 'off',
    'prettier/prettier': [
      'error',
      {
        'no-inline-styles': false,
      },
    ],
    'react/no-unstable-nested-components': [
      'off',
      {
        allowAsProps: true,
        customValidators:
          [] /* optional array of validators used for propTypes validation */,
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
