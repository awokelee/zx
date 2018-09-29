# ip 手机访问

::: tip
有时候需要在手机上查看正在开发的项目
:::

- 添加配置

找到 `package.json` 文件, 在 `scripts` 增加 `--host 0.0.0.0` 参数, `npm run dev` **重启项目**

```js {2}
  "scripts": {
    "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js"
  },
```

- 查看本机 `ip`

`windows` 下执行 `ipconfig` 命令

`mac` 下执行 `ifconfig` 命令

```bash {1,4}
$ ifconfig
  ...
	inet6 fe80::108e:1830:89d7:d618%en0 prefixlen 64 secured scopeid 0x8
	inet `192.168.1.9` netmask 0xffffff00 broadcast 192.168.1.255
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
```

- 手机连接跟电脑一个网络（`wifi`）

假如项目访问地址为 `localhost:8080`

通过查看 `ip` 得到本机 `ip` 为 `192.168.1.9`, 手机浏览器输入 `192.168.1.9:8080` 即可