# Nginx HTTPS 配置

### 语法配置

- 是否开启

```bash
Syntax: ssl on|off;
Deafult: ssl off;
Context: http, server
```

- 证书文件

```bash
Syntax: ssl_certificate file;
Deafult: ---
Context: http, server
```

- `key` 文件

```bash
Syntax: ssl_certificate_key file
Deafult: ---
Context: http, server
```

### 配置 HTTPS

新建 `/etc/nginx/conf.d/https.conf` 文件, 增加以下内容

```bash
server
 {
   listen       443;
   server_name  172.16.78.179 47.98.173.183 gaodaqian.com;
   ssl on;
   ssl_certificate /etc/nginx/ssl_key/gaodaqian.crt;
   ssl_certificate_key /etc/nginx/ssl_key/gaodaqian.key;
   #ssl_certificate_key /etc/nginx/ssl_key/gaodaqian_nopass.key;

   index index.html index.htm;
   location / {
       root  /usr/share/nginx/html/index;
   }
}
```

```bash
# 停止 nginx
[root conf.d]# nginx -s stop -c /etc/nginx/nginx.conf
# 是因为你设置了 https 需要输入密码
Enter PEM pass phrase:
# 启动
[root conf.d]# nginx -c /etc/nginx/nginx.conf
Enter PEM pass phrase:
# 查看 https
[root conf.d]# netstat -luntp|grep 443
tcp     0   0 0.0.0.0:443   0.0.0.0:*    LISTEN   13204/nginx: master
```

### 去除每次输入密码

```bash
[root ssl_key]# openssl rsa -in gaodaqian.key -out ./gaodaqian_nopass.key
writing RSA key
```

`/etc/nginx/conf.d/https.conf` 配置如下:

```bash
server
 {
   listen       443;
   server_name  172.16.78.179 47.98.173.183 gaodaqian.com;
   ssl on;
   ssl_certificate /etc/nginx/ssl_key/gaodaqian.crt;
   # no_pass 的
   ssl_certificate_key /etc/nginx/ssl_key/gaodaqian_nopass.key;

   index index.html index.htm;
   location / {
       root  /usr/share/nginx/html/index;
   }
}
```

### 浏览器访问测试