const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin');//неиспользуюмые плагины
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin"); 
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
    mode: 'development',
    entry: {
      main: "./src/react.jsx",
    },
    output: {
      filename: '[contentHash].bundle.js',
      path: path.resolve(__dirname, 'dist'),
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
        new webpack.SourceMapDevToolPlugin({}),
        new UnusedFilesWebpackPlugin(),
  
        
      ]
  });