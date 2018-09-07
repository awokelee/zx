# Babel 开发环境配置

### 初始化项目和安装 babel

- `npm init` 初始化项目, 生成 `package.json` 文件

- 安装 `babel`

```bash
npm i babel-core babel-preset-es2015 babel-preset-lates -D
```

- 创建 `.babelrc` 文件, 内容如下:

```js
{
  "presets": ["es2015", "latest"],
  "plugins": []
}
```

- `npm i babel-cli -g` 安装 `babel-cli`

- `babel --version` 查看版本

### 安装 webpack 及 babel-loader

- 执行 `npm i webpack babel-loader -D` 安装 `webpack` 和 `babel-loader`

- 创建 `webpack` 配置文件 `webpack.config.js`, 内容如下:

```js
module.exports = {
  entry: './src/index.js', // 入口
  output: {
    path: __dirname,
    filename: './build/bundle.js' // 打包后
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader'
    }]
  }
}
```

- 在 `package.json` 文件中新建 `npm scripts` `"start": "webpack",` 完整文件如下:

```json
{
  "name": "webpack-wfp",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-latest": "^6.24.1",
    "webpack": "^3.11.0"
  }
}
```

- 执行 `npm start` 生成转义后的文件 `/build/bundle.js` .