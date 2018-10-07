# HTTPS 服务优化

### 激活 keepalive 长连接

### 设置 ssl session 缓存

```bash
server
 {
   listen       443;
   server_name  172.16.78.179 47.98.173.183 gaodaqian.com;

   keepalive_timeout 100;

   ssl on;
   ssl_session_cache   shared:SSL:10m;
   ssl_session_timeout 10m;

   ssl_certificate /etc/nginx/ssl_key/gaodaqian_apple.crt;
   ssl_certificate_key /etc/nginx/ssl_key/gaodaqian.key;

   index index.html index.htm;
   location / {
       root  /opt/app/code;
   }
}
```