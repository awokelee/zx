# PM2 运行 Node 服务

- 安装 `pm2`

```bash
[root ~]# npm install -g pm2
```

- 启动 `node` 项目

进入 server 项目

```bash
# 安装依赖
[root weapp-mpvue]# npm install

# 启动服务
[root weapp-mpvue]# pm2 start app.js
```

- 常用的 `pm2` 命令

```bash
# 查看 pm2 运行了哪些项目
[root weapp-mpvue]# pm2 list

# 运行 app.js
[root weapp-mpvue]# pm2 start app.js

# 查看 app.js 运行日志
[root weapp-mpvue]# pm2 log app.js

# 停止 app.js
[root weapp-mpvue]# pm2 stop app.js
[PM2] Applying action stopProcessId on app [example](ids: 0)
[PM2] [example](0) ✓
┌──────────┬────┬──────┬─────┬─────────┬─────────┬────────┬─────┬────────┬──────┬──────────┐
│ App name │ id │ mode │ pid │ status  │ restart │ uptime │ cpu │ mem    │ user │ watching │
├──────────┼────┼──────┼─────┼─────────┼─────────┼────────┼─────┼────────┼──────┼──────────┤
│ app      │ 1  │ fork │ 0   │ errored │ 30      │ 0      │ 0%  │ 0 B    │ root │ disabled │
│ example  │ 0  │ fork │ 0   │ stopped │ 0       │ 0      │ 0%  │ 0 B    │ root │ disabled │
└──────────┴────┴──────┴─────┴─────────┴─────────┴────────┴─────┴────────┴──────┴──────────┘
```

注意 `pm2` 跟你的 `node` 版本有关, 如果你的 `node` 版本是后面更新的, 要结束 `pm2` 进程再启动才是最新

```bash
[root weapp-mpvue]# node -v
v8.11.4
[root weapp-mpvue]# ps -ux | grep pm2
root      3742  0.1  1.4 917960 28184 ?        Ssl  22:05   0:00 PM2 v2.10.4: God Daemon (/root/.pm2)
root      4143  0.0  0.0 112660   968 pts/1    R+   22:10   0:00 grep --color=auto pm2
[root weapp-mpvue]# kill -9 3742
```