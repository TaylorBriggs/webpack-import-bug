module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'app.js',
    publicPath: '/javascript/',
    path: __dirname + '/public/javascript'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['env', {
                modules: false,
                targets: 'browser',
                useBuiltIns: true
              }],
              'react'
            ],
            plugins: [require('babel-plugin-syntax-dynamic-import')]
          }
        }]
      }
    ]
  },

  resolve: {
    extensions: ['.jsx', '.js'],
    modules: ['src', 'node_modules']
  },

  devServer: {
    contentBase: './public',
    watchOptions: {
      ignored: /node_modules/
    }
  }
};
