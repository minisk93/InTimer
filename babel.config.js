module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          'shared/components': './src/shared/components',
          'shared/api': './src/shared/api',
          'shared/hooks': './src/shared/hooks',
          'shared/store': './src/shared/store',
          'shared/assets': './src/shared/assets',
          'shared/types': './src/shared/types',
          'shared/utils': './src/shared/utils',
          'shared/constants': './src/shared/constants',
          'processes/navigation': './src/processes/navigation',
          widgets: './src/widgets',
          pages: './src/pages'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
