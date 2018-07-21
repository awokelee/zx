# proxyTable 代理（dev）

> 配置 `dev` 开发环境的代理接口地址

- `config/index.js` 中增加后台约定的配置, 案例如下: 

```js
module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/project',
    proxyTable: {
      '/poster': {
        changeOrigin: true,
        target: 'http://192.168.89.64:8088/poster',
        pathRewrite: {
          '^/poster': ''
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