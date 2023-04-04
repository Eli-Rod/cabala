module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      'babel-preset-expo'
      // ,'module:react-native-dotenv'
    ],
    plugins: [
      [
        'react-native-reanimated/plugin', {
          relativeSourceLocation: true,
        },
      ],
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blacklist": null,
        "whitelist": null,
        "safe": false,
        "allowUndefined": true
      }]
    ],
  };
};
