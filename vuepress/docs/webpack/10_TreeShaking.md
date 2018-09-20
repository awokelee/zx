# Tree Shaking

有些没用到的代码, 去除.

JS Tree Shaking、CSS Tree Shaking

使用场景: 常规优化、引入第三方库的某一个功能

### JS Tree Shaking

本地 JS Tree Shaking 配置 webpack.optimize.UglifyJsPlugin 即可:

```js
var path = require('path')
var webpack = require('webpack')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    'pageA': './pageA',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: './dist/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: {
            loader: 'style-loader',
          },
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'less-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
      allChunks: false
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
```

第三方库 lodash 的 Tree Shaking:

`npm i lodash-es -S`

`npm i babel-loader babel-cor babel-preset-env babel-plugin-lodash -D`

```js
{
  test: /\.js$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['env'],
        plugins: ['lodash']
      }
    }
  ]
}
```

### CSS Tree Shaking

借助 Purify CSS

`npm i purifycss-webpack glob-all -D`

```js
var webpack = require('webpack')
var PurifyCSS = require('purifycss-webpack')
var glob = require('glob-all')

plugins: [
    new ExtractTextWebpackPlugin({
      filename: '[name].min.css',
      allChunks: false
    }),
    new PurifyCSS({ // 要放在 ExtractTextWebpackPlugin 后面
      paths: glob.sync([
        path.join(__dirname, './*.html'),
        path.join(__dirname, './src/*.js'),
      ])
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
```