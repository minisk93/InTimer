module.exports = {
  root: true,
  extends: ['@react-native', 'plugin:import/typescript'],
  plugins: ['import'],
  rules: {
    'react/prop-types': 'warn',
    'prettier/prettier': 'warn',
    quotes: 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    'comma-dangle': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/order': [
      'warn',
      {
        pathGroups: [
          {
            pattern: 'shared/components',
            group: 'internal'
          },
          {
            pattern: 'shared/api',
            group: 'internal'
          },
          {
            pattern: 'shared/hooks',
            group: 'internal'
          },
          {
            pattern: 'shared/store',
            group: 'internal'
          },
          {
            pattern: 'shared/types',
            group: 'internal'
          },
          {
            pattern: 'shared/constants',
            group: 'internal'
          },
          {
            pattern: 'shared/utils',
            group: 'internal'
          },
          {
            pattern: 'processes/*',
            group: 'internal'
          },
          {
            pattern: 'widgets',
            group: 'internal'
          },
          {
            pattern: 'pages',
            group: 'internal'
          },
          {
            pattern: 'shared/assets',
            group: 'index'
          }
        ],
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index']
        ],
        'newlines-between': 'always'
      }
    ]
  },
  settings: {
    'import/resolver': {
      typescript: true
    }
  }
};
