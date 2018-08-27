# Nginx 安装

[Nginx 官网](http://nginx.org/)

- `Nginx` 版本介绍

`Mainline version`, 开发版

`Stable version`, 稳定版

`Legacy version`, 历史版本

- `Nginx` 安装

查看 `centos` 版本:

```bash {1}
[root yum.repos.d]# lsb_release -a
LSB Version:    :core-4.1-amd64:core-4.1-noarch
Distributor ID: CentOS
Description:    CentOS Linux release 7.4.1708 (Core) 
Release:        7.4.1708
Codename:       Core
```

根据 [官方 yum 源配置](http://nginx.org/en/linux_packages.html#stable), 调整 `OS/OSRELEASE` 为 `centos/7`

```md
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

- 配置 `nginx` `yum` 源

增加 `nginx.repo` 文件, 把上面的配置写入.

```bash
vim /etc/yum.repos.d/nginx.repo
```

配置后如下:

```bash
[root yum.repos.d]# cat /etc/yum.repos.d/nginx.repo
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1
```

`yum list|grep nginx`, 查看 `nginx yum`

`yum install nginx`, 安装

`nginx -v`, 查看版本

`nginx -V`,查看参数

`nginx -s reload -c /etc/nginx/nginx.conf` 重新加载配置文件

`vim /etc/nginx/conf.d/static_server.conf` 配置自定义的静态服务配置