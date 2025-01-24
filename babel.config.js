module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-class-properties', {loose: true}],
    [
      'module-resolver',
      {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '~': './src',
        },
      },
    ],
  ],
  assumptions: {
    setPublicClassFields: false,
  },
};
