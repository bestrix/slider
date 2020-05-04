const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  mode:"development",
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.sass$/,
        use: ["style-loader","css-loader",'sass-loader'],
        exclude:"/node_modules/"
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },
  devtool: 'source-map',
  devServer:{
      overlay:true,
  },
};