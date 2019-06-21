const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'dist'),
    }
  // },
  // module:{
  //   rules:[
  //     {
  //       test:/\.css$/i,
  //       use:['style-loader','css-loader']
  //     },
  //   ]
  // }
};
