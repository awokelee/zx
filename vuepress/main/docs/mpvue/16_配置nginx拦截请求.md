# 配置 Nginx 转发请求到 Node 服务

```bash
server {
  listen       443;
  server_name  gaodaqian.com;
  ssl on;

  ssl_certificate   /etc/nginx/ssl_key/214758036890959.pem;
  ssl_certificate_key  /etc/nginx/ssl_key/214758036890959.key;
  ssl_session_timeout 5m;
  ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
  ssl_prefer_server_ciphers on;

  index index.html index.htm;
  location / {
      root  /usr/share/nginx/html/index;
  }

  location /weapp {
    proxy_pass http://localhost:5757/weapp;
  }
}
```

上面就是 `nginx` 监听 `https` 的配置, 其中:

```bash
location /weapp {
  proxy_pass http://localhost:5757/weapp;
}
```

上面的就是把小程序路由是 `/weapp` 的 `https` 请求转到 `nodejs` 服务.