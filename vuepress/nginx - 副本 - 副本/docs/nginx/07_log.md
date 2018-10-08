# log_format 日志相关

- `error.log`

主要记录 `nginx` 处理 `http` 请求错误的状态及 `nginx` 本身服务运行的错误状态.

`nginx.conf` 配置中有 `error_log /var/log/nginx/error.log;` 写明了错误日志存放地址.

查看错误日志: `tail -f /var/log/nginx/error.log`, 以行的形式展示

```bash {1}
[root ~]# tail -f /var/log/nginx/error.log
2018/08/28 05:20:58 [error] 11376#0:
*28803 open() "/usr/share/nginx/html/wp-login.php" failed
(2: No such file or directory),
client: 198.154.229.77, server: 116.62.103.228,
request: "GET //wp-login.php HTTP/1.1", host: "gaodaqian.com"
```

- `access_log`

记录每次 `http` 请求的访问状态.

- `log_format`

`nginx` `log` 记录了很多信息, 每个信息可以理解为 `nginx` 的变量, `log_format` 就是把变量都记录到日志里去.

配置语法:

```bash
Syntax: log_format name [escape=default|json] string ...;
Default: log_format combined "...";
Context: http
```

`nginx.conf` 中存在以下配置:

```bash
log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                  '$status $body_bytes_sent "$http_referer" '
                  '"$http_user_agent" "$http_x_forwarded_for"';

access_log  /var/log/nginx/access.log  main;
```

上面配置中 `main` 表示日志以 `main` 方式记录到 `access.log`

- `nginx` 变量

**HTTP 请求变量:** `arg_PARAMETERd`、`http_HEADER`、`send_http_HEADER`

```bash {6}
[root ~]# curl -v http://www.baidu.com >/dev/null
...
*   Trying 115.239.210.27...
* Connected to www.baidu.com (115.239.210.27) port 80 (#0)
> GET / HTTP/1.1
> User-Agent: curl/7.29.0
> Host: www.baidu.com
> Accept: */*
```

假如想要在日志中记录 `> User-Agent: curl/7.29.0` 也就是 `User-Agent` 信息, 则在 `nginx.conf` 添加配置 '$http_user_agent', 注意要都变为 **小写** 和 **下划线_**

```bash {1}
log_format  main  '$http_user_agent'
                  '$remote_addr - $remote_user [$time_local] "$request" '
                  '$status $body_bytes_sent "$http_referer" '
                  '"$http_user_agent" "$http_x_forwarded_for"';
```

**内置变量:** `Nginx` 内置的

`remote_addr`: 客户端地址

`remote_user`: 客户端请求 `nginx` 的用户名

`time_local`: 请求 `nginx` 的时间

`request`: `request` 头的请求行

`status`: `response` 返回的状态

`body_bytes_sent`: 返回的 `body` 信息大小

`http_referer`: 上一级页面是哪个, 用于用户行为分析, 防盗链

`http_user_agent`: `User-Agent`

`http_x_forwarded_for`: 记录每一级用户通过 `http` 请求里面携带的 `http` 信息.

**自定义变量:** 自己定义