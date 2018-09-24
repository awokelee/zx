# 编译 Typescript

Typescript: JS 的超集.

### typescript-loader

安装:

有两种方式可以选择, 他们使用方式一样, `awesome-typescript-loader` 会快一点

`npm i typescript ts-loader -D`

`npm i typescript awesome-typescript-loader -D`

注意, 如果报错如下:

```bash
ERROR in ./src/app.ts
Module build failed: Error: You may be using an old version of webpack; please check you're using at least version 4  
    at successfulTypeScriptInstance (E:\code\zx\vuepress\docs\webpack\ts\node_modules\ts-loader\dist\instances.js:155:
```

则使用  `npm i ts-loader@3.5`

### tsconfig.json

typescript 的配置文件, 配置选项非常多.

常用选项: compilerOptions、include、exclude

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "allowJs": true
  },
  "include": [
    "./src/*"
  ],
  "exclude": [
    "./node_modules"
  ]
}
```

### webpack.config.js

```js
module.exports = {
  entry: {
    index: './src/app.ts'
  },
  output: {
    filename: '[name].[hash:8].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}
```

### 声明文件

类型声明

`npm i @types/lodash -S`

`npm i @types/vue -S`

### Typings

`npm i typings -g`

`typings install lodash`

配置 `tsconfig.json`

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "typeRoots": [
      "./node_modules/@type",
      "./typings/dodules"
    ]
  },
  "include": [
    "./src/*"
  ],
  "exclude": [
    "./node_modules"
  ]
}
```