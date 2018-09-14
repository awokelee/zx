# Nginx 部署 HTTPS 服务

### 生成证书

```bash
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -keyout localhost-privkey.pem -out localhost-cert.pem
```

- 配置 HTTPS

```bash
server {
  listen 443;
  server_name a.test.com;

  ssl on;
  ssl_certificate_key certs/localhost-privkey.pem;
  ssl_certificate certs/localhost-cert.pem;

  location / {
    proxy_cache my_cache;
    proxy_pass http://localhost:8888;
    proxy_set_header Host $host;
  }
}
```

- 配置 HTTP 到 HTTPS

```bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  server_name test.com;
  return 302 https://$server_name$request_uri;
}
```