# gzip 压缩

压缩传输

![](./media/gzip.png)

### 配置语法

```md
Syntax: gzip  on|off;
Default: gzip off;
Context: http, server, location, if in location
```

### 压缩比

压缩比越高文件越小, 但是耗服务性能.

```md
Syntax: gzip_comp_level level;
Default: gzip_comp_level 1;
Context: http, server, location
```

### 压缩的协议

```md
Syntax: gzip_http_version 1.0|1.1;
Default: gzip_http_version 1.1;
Context: http, server, location
```

### 扩展 `Nginx` 压缩模块

`http_gzip_static_module` 预读 `gzip` 功能.
`http_gunzip_module` 应用支持 `gunzip` 的压缩方式.
`http_gzip_static_module` 预读 `gzip` 功能.
`http_gzip_static_module` 预读 `gzip` 功能.

### 配置文件内容

新建 `/etc/nginx/conf.d/static_server.conf` 文件内容如下:

如果没有 `/var/log/nginx/log/static_access.log`, 则需要先常见目录然后创建文件.

```bash
server {
    listen       80;
    server_name  116.62.103.228 jeson.imooc.com;

    sendfile on;
    #charset koi8-r;
    access_log  /var/log/nginx/log/static_access.log  main;

    location ~ .*\.(jpg|gif|png)$ {
        gzip on;
        gzip_http_version 1.1;
        gzip_comp_level 2;
        gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
        root  /opt/app/code/images;
    }

    location ~ .*\.(txt|xml)$ {
        gzip on;
        gzip_http_version 1.1;
        gzip_comp_level 1;
        gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
        root  /opt/app/code/doc;
    }

    location ~ ^/download {
        gzip_static on;
        tcp_nopush on;
        root /opt/app/code;
    }

    error_page   500 502 503 504 404  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

- `vim /etc/nginx/conf.d/static_server.conf` 配置自定义的静态服务配置

- `nginx -t` 检查配置文件是否正确

- `nginx -s reload -c /etc/nginx/nginx.conf` 重新加载配置文件