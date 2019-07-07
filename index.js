module.exports = (context, { modules = false, targets = { ie: 11 }, debug = false, useBuiltIns = false} = {}) => ({
  presets: [
    [require.resolve('@babel/preset-env'), {
      targets,
      debug,
      modules,
      useBuiltIns,
      shippedProposals: true
    }],
    require.resolve('@babel/preset-react'),
  ],
  plugins: [
    require.resolve('babel-plugin-react-require'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      {
        useBuiltIns
      },
    ],
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-transform-runtime'),
  ],
  env: {
    production: {
      plugins: [
        require.resolve('babel-plugin-transform-react-remove-prop-types'),
        require.resolve('@babel/plugin-transform-react-constant-elements'),
        require.resolve('babel-plugin-transform-remove-console')
      ],
    },
  },
});
