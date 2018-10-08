# nginx.conf 默认配置

::: tip
`nginx` 默认配置文件为 `/etc/nginx/nginx.conf`,

在 `nginx.conf` 中有一行配置是 `include /etc/nginx/conf.d/*.conf;`,

`conf.d` 目录下默认有个 `default.conf` 文件, 也就是这两个地方的配置都会加载.
:::

`user`: 设置 `nginx` 服务的系统使用用户

`worker_processes`: 工作进程数(与 `CPU` 核数设置一致就好)

`error_log`: `nginx` 的错误日志

`pid`: `nginx` 服务启动时候 `pid`

`events -> worker_connections`: 每个进程允许最大连接数

`events -> use`: 工作进程数

```bash
# 用户名为 `nginx`
user nginx;
# 工作进程数
worker_processes auto;
# 错误日志
error_log /var/log/nginx/error.log;
# nginx 服务启动时候 pid
pid /run/nginx.pid;
# 把其他路径的配置也 include 进来
include /usr/share/nginx/modules/*.conf;

events {
    # 每个进程最大连接数
    worker_connections 1024;
}

http {
    # 把其他路径的配置也 include 进来
    include /etc/nginx/conf.d/*.conf;
    # 日志格式化
    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';
    # 访问日志
    access_log  /var/log/nginx/access.log  main;

    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;

    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;


    server {
        # 监听 哪个服务器 哪个端口
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        # 根目录
        root         /usr/share/nginx/html/index;
        # 把其他路径的配置也 include 进来
        include /etc/nginx/default.d/*.conf;
        # 访问的所有路径
        location / {
        }
        # 404
        error_page 404 /404.html;
        location = /40x.html {
        }
        # 500
        error_page 500 502 503 504 /50x.html;
        location = /50x.html {
        }
    }
}
```