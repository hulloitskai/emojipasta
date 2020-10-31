module.exports = {
  bumpFiles: [
    {
      filename: "package.json",
    },
    {
      filename: "app.config.json",
      updater: require.resolve("standard-version-expo"),
    },
    {
      filename: "app.config.json",
      updater: require.resolve("standard-version-expo/ios/increment"),
    },
    {
      filename: "app.config.json",
      updater: require.resolve("standard-version-expo/android/increment"),
    },
  ],
}
