# nginx 配置项目

- 更改配置文件

默认 `nginx` 配置文件在 `/etc/nginx` 目录, `whereis nginx` 命令可以查看 `nginx` 目录.

```bash {5}
[root ~]# whereis nginx
nginx:
/usr/sbin/nginx
/usr/lib64/nginx
/etc/nginx
/usr/share/nginx
/usr/share/man/man8/nginx.8.gz
/usr/share/man/man3/nginx.3pm.gz
```

- 找到配置文件

```bash {16}
[root ~]# cd /etc/nginx
[root ~]# ls -al
total 88
drwxr-xr-x   5 root root 4096 Aug 23 17:07 .
drwxr-xr-x. 82 root root 4096 Apr 13 10:15 ..
drwxr-xr-x   2 root root 4096 Mar  6 17:30 conf.d
drwxr-xr-x   2 root root 4096 Mar  6 17:30 default.d
-rw-r--r--   1 root root 1077 Mar  6 17:27 fastcgi.conf
-rw-r--r--   1 root root 1077 Mar  6 17:27 fastcgi.conf.default
-rw-r--r--   1 root root 1007 Mar  6 17:27 fastcgi_params
-rw-r--r--   1 root root 1007 Mar  6 17:27 fastcgi_params.default
-rw-r--r--   1 root root 2837 Mar  6 17:27 koi-utf
-rw-r--r--   1 root root 2223 Mar  6 17:27 koi-win
-rw-r--r--   1 root root 3957 Mar  6 17:27 mime.types
-rw-r--r--   1 root root 3957 Mar  6 17:27 mime.types.default
-rw-r--r--   1 root root 2498 Aug 23 17:04 nginx.conf
-rw-r--r--   1 root root 2656 Mar  6 17:27 nginx.conf.default
-rw-r--r--   1 root root  636 Mar  6 17:27 scgi_params
-rw-r--r--   1 root root  636 Mar  6 17:27 scgi_params.default
-rw-r--r--   1 root root  664 Mar  6 17:27 uwsgi_params
-rw-r--r--   1 root root  664 Mar  6 17:27 uwsgi_params.default
drwxr-xr-x   2 root root 4096 Aug 23 17:06 vhost
-rw-r--r--   1 root root 3610 Mar  6 17:27 win-utf
```

- 增加配置内容

```bash
server {
    # 监听端口
    listen 80;
    # 服务器名
    server_name blog.gaodaqian.com;
    # 项目目录
    root /usr/share/nginx/html/blog;
    # 日志
    access_log /etc/nginx/logs/access.log combined;
    # 首页
    index index.html index.jsp index.php;

    # 访问 .do 接口, 转到 http://XXX.com  
    # location ~ .*\.do$ {
    #    proxy_pass http://XXX.com;
    #}

    # 所有请求转到 index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

- 检查配置文件

执行 `nginx -t` 命令.

```bash {1}
[root ~]# nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

- 重启配置服务

修改完配置文件, 记得重启 `nginx -s reload` 服务

```bash {1}
[root ~]# nginx -s reload
nginx: [error] invalid PID number "" in "/run/nginx.pid"
```

如果出现上面报错则 `nginx -c /etc/nginx/nginx.conf` 手动指定下配置文件, 再重启服务.

```bash {1,2}
[root ~]# nginx -c /etc/nginx/nginx.conf
[root ~]# nginx -s reload
```