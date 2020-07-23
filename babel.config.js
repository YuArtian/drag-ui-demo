const devEnvs = ['development']

module.exports = api => {
  const development = api.env(devEnvs);

  return {
    presets: [
      [require('@babel/preset-env'), {
        targets: {
          electron: 'v9.1.1'
        },
      }],
      [require('@babel/preset-react'), {development, throwIfNamespace: false}]
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties'),
      require('@babel/plugin-proposal-optional-chaining'),
    ]
  }
}