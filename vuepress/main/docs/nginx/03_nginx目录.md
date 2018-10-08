# Nginx 目录介绍

- 目录列表

采用 `yum` 方式安装的可以利用 `rpm -ql nginx` 命令查看对应软件的文件.

```bash
[root yum.repos.d]# rpm -ql nginx
/etc/logrotate.d/nginx
/etc/nginx/fastcgi.conf
/etc/nginx/fastcgi.conf.default
/etc/nginx/fastcgi_params
/etc/nginx/fastcgi_params.default
/etc/nginx/koi-utf
/etc/nginx/koi-win
/etc/nginx/mime.types
/etc/nginx/mime.types.default
/etc/nginx/nginx.conf
/etc/nginx/nginx.conf.default
/etc/nginx/scgi_params
/etc/nginx/scgi_params.default
/etc/nginx/uwsgi_params
/etc/nginx/uwsgi_params.default
/etc/nginx/win-utf
/usr/bin/nginx-upgrade
/usr/lib/systemd/system/nginx.service
/usr/lib64/nginx/modules
/usr/sbin/nginx
/usr/share/doc/nginx-1.12.2
/usr/share/doc/nginx-1.12.2/CHANGES
/usr/share/doc/nginx-1.12.2/README
/usr/share/doc/nginx-1.12.2/README.dynamic
/usr/share/doc/nginx-1.12.2/UPGRADE-NOTES-1.6-to-1.10
/usr/share/licenses/nginx-1.12.2
/usr/share/licenses/nginx-1.12.2/LICENSE
/usr/share/man/man3/nginx.3pm.gz
/usr/share/man/man8/nginx-upgrade.8.gz
/usr/share/man/man8/nginx.8.gz
/usr/share/nginx/html/404.html
/usr/share/nginx/html/50x.html
/usr/share/nginx/html/index.html
/usr/share/nginx/html/nginx-logo.png
/usr/share/nginx/html/poweredby.png
/usr/share/vim/vimfiles/ftdetect/nginx.vim
/usr/share/vim/vimfiles/indent/nginx.vim
/usr/share/vim/vimfiles/syntax/nginx.vim
/var/lib/nginx
/var/lib/nginx/tmp
/var/log/nginx
```

- 安装目录介绍

下面的是以 `nginx-1.12.0` 列出的.

路径 |类型 | 作用
---------|----------|---------
`/etc/logrotate.d/nginx` | 配置文件 | `Nginx` 日志轮转, 用于 `logrotate` 服务的日志切割
`/etc/nginx`<br>`/etc/nginx/nginx.conf`<br>`/etc/nginx/conf.d`<br>`/etc/nginx/conf.d/default.conf` | 目录、配置文件 | `Nginx` 主配置文件
`/etc/nginx/fastcgi_params`<br>`/etc/nginx/uwsgi_params`<br>`/etc/nginx/scgi_params` | 配置文件 | `cgi` 配置相关, `fastcgi` 配置
`/etc/nginx/koi-utf`<br>`/etc/nginx/koi-win`<br>`/etc/nginx/win-utf` | 配置文件 | 编码转换映射转换文件
`/etc/nginx/mime.types` | 配置文件 | 设置 `http` 协议的 `Content-Type` 与扩展名对应关系
`/usr/lib/systemd/system/nginx.service`<br>`/usr/lib/systemd/system/nginx-debug.service`<br>`/etc/sysconfig/nginx`<br>`/etc/sysconfig/nginx-debug` | 配置文件 | 用于配置出系统守护进程管理器管理方式
`/usr/lib64/nginx/modules`<br>`/etc/nginx/modules` | 目录 | `Nginx` 模块目录
`/usr/sbin/nginx`<br>`/usr/sbin/nginx-debug` | 命令 | `Nginx` 服务的启动管理的终端命令
`/usr/share/doc/nginx-1.12.2`<br>`/usr/share/man/man8/nginx.8.gz` | 文件、目录 | `Nginx` 手册和帮助文件
`/var/cache/nginx` | 目录 | `Nginx` 的缓存目录
`/var/log/nginx` | 目录 | `Nginx` 的日志目录