# Node.js 环境搭建

### 安装 nvm (非必须)

阿里云默认安装了 `node` 环境, 如果没有的话推荐安装 `nvm`, 利用 `nvm` 管理多个版本的 `node`.

```bash
# 下载 nvm
[root ~]# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

配置 `nvm` 环境变量.

编辑 `~/.bash_profile` 文件

```bash
[root ~]# vim ~/.bash_profile
```

在文件中新增以下内容:

```md
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

使配置生效:

```bash
# 使配置生效
[root ~]# source ~/.bash_profile

# 查看 nvm 版本
[root ~]# nvm --version
```

### 安装 nodejs

[微信小程序客户端腾讯云增强 SDK](https://github.com/tencentyun/wafer2-client-sdk) 中用到了 `ES7` 的 `async/await` 语法, 而该语法是 `nodejs 7.6` 才支持, 所以安装时注意版本.

版本过低时运行项目错误内容如下:

```bash
1|app      |     at Module._compile (module.js:570:32)
1|app      | /opt/app/weapp-mpvue/middlewares/response.js:6
1|app      | module.exports = async function (ctx, next) {
1|app      |                        ^^^^^^^^
1|app      | SyntaxError: Unexpected token function
1|app      |     at Object.exports.runInThisContext (vm.js:76:16)
1|app      |     at Module._compile (module.js:542:28)
1|app      |     at Object.Module._extensions..js (module.js:579:10)
1|app      |     at Module.load (module.js:487:32)
1|app      |     at tryModuleLoad (module.js:446:12)
1|app      |     at Function.Module._load (module.js:438:3)
1|app      |     at Module.require (module.js:497:17)
1|app      |     at require (internal/module.js:20:19)
1|app      |     at Object.<anonymous> (/opt/app/weapp-mpvue/app.js:4:18)
1|app      |     at Module._compile (module.js:570:32)
```

- 安装 `nodejs` `8.11.4`

[nodejs](https://nodejs.org/zh-cn/) 官网现在是 `8.11.4`.

```bash
# 安装 nodejs 8.11.4 版本
[root ~]# nvm install 8.11.4


# 设置 8.11.4 为默认 nodejs 环境
[root ~]# nvm alias default 8.11.4
```
