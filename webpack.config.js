const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    // contentBase: path.join(__dirname, 'dist'),
    overlay: true,
    port: 9000,
  },
  devtool:'eval-cheap-source-map',
  watch:true,
  plugins: [new HtmlWebpackPlugin(
      {
        template:"./src/index.html"
      } 
  )],
  module:{
      rules:[
          {
              test:/\.css$/,
              use:['style-loader','css-loader']
          },
          {
            test:/\.sass$/,
            use:['style-loader','css-loader','sass-loader']
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
            test:/\.js$/,
            loader:"babel-loader",
            exclude:/node_modules/,
            options:{
                "presets": ["@babel/preset-env","@babel/preset-react"]
            },
        }
      ]
  }
};










// const path = require('path');
// const html = require('html-webpack-plugin');
// const css = require('mini-css-extract-plugin');
// module.exports = {
//     entry: "./src/index.js", 
//     output: {
//       path: __dirname + '/dist', 
//       filename: 'bundle.js', 
//       publicPath:'/dist'
//     },
//     mode:"production",
//     module:{
//       rules:[
//         { 
//           test: /\.s[ac]ss$/,
//           use: [
//             'style-loader',
//             'css-loader',
//             'sass-loader',
//           ],
//         },
//       ]
//     },
//     devServer: {
//       contentBase: path.join(__dirname, 'dist'),
//       compress: true,
//       port: 9000
//     },
//     plugins:[
//       new html({
//         template:"./src/index.html",
//         filename:'test.html',
//         minify:false
//       }),
//       new css({
//         filename: 'fuck.css',
//         chunkFilename: '[id].css',
//       })
//     ],
//     watch:true
// }















