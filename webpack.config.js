const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development',
    entry: './src/react.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist2'),
    },
    module: {
        rules: [
          {
            test: /\.jsx/,
            enforce: 'pre',
            use: ['source-map-loader'],
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          },
          {
            test: /\.js/,
            enforce: 'pre',
            use: ['source-map-loader'],
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env','@babel/preset-react']
              }
            }
          },
          {
            test: /\.sass/i,
            use: ['style-loader', 'css-loader','sass-loader'],
          },
          {
            test: /\.css/i,
            use: ['style-loader', 'css-loader','sass-loader'],
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader',
                  ],
          },
        ]
      },
      
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        port: 9000
      },
      devtool: false,
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new webpack.SourceMapDevToolPlugin({})
        
      ]
  };