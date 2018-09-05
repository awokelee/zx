# koa 实现 node server

### 安装依赖

- `npm i koa -S`

- `npm i koa-router -S`

- `npm i axios -S`

- `npm i memory-fs -D`

- `npm i ejs -S`

### dev-ssr.js

```js
const Router = require('koa-router')
const axios = require('axios')
const path = require('path')
const MemoryFS = require('memory-fs')
const webpack = require('webpack')
const VueServerRender = require('vue-server-render')

const serverConfig = require('../../build/webpack.config.server')

const serverCompiler = webpack(serverConfig)
const mfs = new MemoryFS()
// 输出目录是内存
serverCompiler.outputFileSystem = mfs

let bundle
serverCompiler.watch({}, (err, stats)=>{
  if(err) throw err
  stats = stats.toJson()
  stats.hasErrors.forEach(err => console.log(err))
  stats.hasWarnings.forEach(warn => console.log(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    'vue-ssr-server-bundle.json'
  )
  bundle = JSON.parse(mfs.readFileSync(bundlePath, 'utf-8'))
})

const handleSSR = async (ctx) => {
  if (!bundle) {
    ctx.body = '你等一会，别着急......'
    return
  }

  const clientManifestResp = await axios.get(
    'http://127.0.0.1:8000/public/vue-ssr-client-manifest.json'
  )
  const clientManifest = clientManifestResp.data

  const template = fs.readFileSync(path.join(__dirname, '../server.template.ejs'),'utf-8')

  const renderer = VueServerRender
    .createBundleRenderer(bundle, {
      inject: false,
      clientManifest
    })

  await serverRender(ctx, renderer, template)
}

const router = new Router()
router.get('*', handleSSR)

module.exports = router
```