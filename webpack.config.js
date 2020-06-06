const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist2'),
    },
    module: {
        rules: [
          { test: /\.js$/,
            exclude: /node_modules/, 
            loader: "babel-loader" 
          },
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          },
        ]
      },
      
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
      },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
      ]
  };