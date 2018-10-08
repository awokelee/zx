# `http_stub_status` 连接状态

- --with-http_stub_status_module

监控 `nginx` 客户端连接状态, 配置语法如下:

```bash
Syntax: stub_status;
Default: ---
Context: server, location
```

增加配置

```bash
location /mystatus {
  stub_status;
}
```

访问 `http://gaodaqian.com/mystatus` 返回如下

```bash
# 连接数
Active connections: 1
# 握手数 连接数 请求数
server accepts handled requests
 28963 28963 79149
 # 读 写 等待
Reading: 0 Writing: 1 Waiting: 0
```