const ClosureCompilerPlugin = require('google-closure-compiler-js').webpack;
const path = require('path');

module.exports = {
  name: 'main',

  mode: 'production',

  entry: {
    main: path.join(__dirname, 'src', 'main.js'),
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/',
    filename: '[name].chunk.js',
  },

  optimization: {
    minimize: false,
    runtimeChunk: {
      name: 'mainfest',
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options: {
            presets: [
              ['env', {modules: false}],
            ],
          },
        },
      }
    ]
  },

  plugins: [
    new ClosureCompilerPlugin({
      languageIn: 'ECMASCRIPT6',
      languageOut: 'ECMASCRIPT5',
      compilationLevel: 'ADVANCED',
      warningLevel: 'VERBOSE',
      concurrency: 3,
    })
  ],
}