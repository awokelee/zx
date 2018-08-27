# Nginx 常用命令

```bash
# 确认 `yum` 可用
yum list|grep gcc

# 查看是否开启 `iptables`
iptables -L
iptables -t nat -L
# 关闭 `iptables`
iptables -F
iptables -t nat -F

# 查看是否关闭 `selinux`
getenforce
# 关闭 `selinux`
setenforce 0

# 安装 `gcc` 等
yum -y install gcc gcc-c++ autoconf pcre pcre-devel make automake
# 安装 `wget` `httpd-tools` `vim`
yum -y install wget httpd-tools vim

# 查看 `centos` 版本
lsb_release -a

# 查看 `nginx yum`
yum list|grep nginx

# 安装 nginx
yum install nginx

# 查看 nginx 版本
nginx -v

# 查看 nginx 参数
nginx -V

# 查看 nginx 对应软件的文件
rpm -ql nginx

# 检查 nginx 配置文件是否正确
nginx -t

# 重新加载 nginx 配置文件
nginx -s reload
# 重新加载 nginx 指定配置文件
nginx -s reload -c /etc/nginx/nginx.conf
```