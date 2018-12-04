# PM2 常用命令

### 安装与更新

- 安装 `pm2`

```bash
# yarn 方式
yarn global add pm2

# npm 方式:
npm install pm2 -g
```

- 更新 `pm2`

```bash
# 先安装新版本
npm install pm2@latest -g

# 然后升级
pm2 update
```

### 常用命令

```bash
# 用 fork 模式启动
pm2 start app.js --name my-api # 启动 app.js 并且设定名字叫做 my-api

# 启动
pm2 start app.js -i 0           # 根据有效 CPU 数目启动最大进程数目
pm2 start app.js -i max         # 同上, 已过期
pm2 start app.js -i 4           # 启动 4个 app.js 的应用实例
pm2 scale app +3                # Scales `app` up by 3 workers
pm2 scale app 2                 # 把 app 应用扩展到 2 个实例

# 查看

pm2 list                        # 查看 pm2 任务列表

pm2 describe 0                  # 查看 0

pm2 monit                       # 查看 CPU 和内存占用

# 日志

pm2 logs [--raw]                # 查看日志
pm2 flush                       # 清空日志
pm2 reloadLogs                  # Reload 日志

# 停止/重启/删除

pm2 stop all                    # Stop all processes
pm2 restart all                 # Restart all processes

pm2 reload all                  # Will 0s downtime reload (for NETWORKED apps)

pm2 stop 0                      # Stop specific process id
pm2 restart 0                   # Restart specific process id

pm2 delete 0                    # Will remove process from pm2 list
pm2 delete all                  # Will remove all processes from pm2 list

# 保存/加载列表/开机启动
pm2 startup                     # 创建开机自启动命令
pm2 save                        # 保存当前应用列表
pm2 resurrect                   # 重新加载保存的应用列表
pm2 start app.js --node-args="--max-old-space-size=1024"
```

### 配置文件方式

应用中新建 `.yml` 文件, 例如 `process.yml`:

```yml
apps:
  - script   : app.js
    instances: 4
    exec_mode: cluster
  - script : worker.js
    watch  : true
    env    :
      NODE_ENV: development
    env_production:
      NODE_ENV: production
```

- 启动

```bash
pm2 start process.yml
```