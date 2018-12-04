# proxyTable 接口代理（dev）

::: tip proxyTable
有时候需求是: 前端调 `/poster` 对应的后台接口是 `http://192.168.89.64:8088/poster`,
而 `/activity` 对应后台接口是 `http://192.168.89.64:8089/activity`, 则可以配置 `proxyTable` 处理
:::

- 配置 `dev`  **开发环境**的代理接口地址

找到 `config/index.js` 文件, 根据需求增加对应代码, 案例如下:

```js {2,5,6,7,8,9,10,11,12}
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/project',
    proxyTable: {
      '/poster': {
        changeOrigin: true, // 是否跨域
        target: 'http://192.168.89.64:8088/poster', // 目标接口
        pathRewrite: {
          '^/poster': '' // 重写接口
        }
      },
      '/activity': {
        changeOrigin: true,
        target: 'http://192.168.89.64:8089/activity',
        pathRewrite: {
          '^/activity': ''
        }
      },
      '/core': {
        changeOrigin: true,
        target: proxyHost + 'http://192.168.89.64:8090/core',
        pathRewrite: {
          '^/core': ''
        }
      }
    }
  }
}

```