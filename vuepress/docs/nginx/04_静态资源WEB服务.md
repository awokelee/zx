# Nginx 静态资源 WEB 服务

## 静态资源类型

非服务器动态生成的文件

浏览器端渲染: `HTML`、`CSS`、`JS` 等

图片: `JPEG`、`GIF`、`PNG` 等

视频: `FLV`、`MPEG` 等

文件: `TXT` 等任意下载文件

![](./media/web-server.png)

## CDN

![](./media/cdn.png)

## 配置语法

### 文件读取

```md
Syntax: sendfile on|off;
Default: sendfile off;
Context: http, server, location, if in location
```

`--with-file-aio` 异步文件读取

### tcp_nopush

`sendfile` 开启的情况下, 提高网络包的传输效率(不一个个发, 接受多个后再发)

```md
Syntax: tcp_nopush  on|off;
Default: tcp_nopush off;
Context: http, server, location
```

### tcp_nodelay

`keepalive` 连接下, 提高网络包的传输实时性, 与 `tcp_nopush` 相反.

```md
Syntax: tcp_nodelay  on|off;
Default: tcp_nodelay off;
Context: http, server, location
```

### 压缩

压缩传输

```md
Syntax: gzip  on|off;
Default: gzip off;
Context: http, server, location, if in location
```

![](./media/gzip.png)

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

### 扩展 Nginx 压缩模块

`http_gzip_static_module` 预读 gzip 功能.
`http_gunzip_module` 应用支持 gunzip 的压缩方式.
`http_gzip_static_module` 预读 gzip 功能.
`http_gzip_static_module` 预读 gzip 功能.

## 配置文件内容

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

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504 404  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    # proxy the PHP scripts to Apache listening on 127.0.0.1:80
    #
    #location ~ \.php$ {
    #    proxy_pass   http://127.0.0.1;
    #}

    # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
    #
    #location ~ \.php$ {
    #    root           html;
    #    fastcgi_pass   127.0.0.1:9000;
    #    fastcgi_index  index.php;
    #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
    #    include        fastcgi_params;
    #}

    # deny access to .htaccess files, if Apache's document root
    # concurs with nginx's one
    #
    #location ~ /\.ht {
    #    deny  all;
    #}
}
```

- `vim /etc/nginx/conf.d/static_server.conf` 配置自定义的静态服务配置

- `nginx -t` 检查配置文件是否正确

- `nginx -s reload -c /etc/nginx/nginx.conf` 重新加载配置文件