# Nginx 基础配置

```bash
server {
  listen      80;
  server_name test.com;

  location / {
    proxy_pass http://127.0.0.1:8888;
    # 如果不设置就是 http://127.0.0.1:8888 设置了的话就是 test.com
    proxy_set_header Host $host;
  }
}
```

中间代理在 `http` 协议下, 很轻松就可以修改 `header` 头, 比如常见的手机中国移动等运营商的广告.