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

# 查看 openssl 版本
openssl version
# 查看是否安装 openssl
rpm -qa|grep open

# 检查 nginx 配置文件是否正确
nginx -t

# 重新加载 nginx 配置文件
nginx -s reload
# 重新加载 nginx 指定配置文件
nginx -s reload -c /etc/nginx/nginx.conf
# 停 nginx
nginx -s stop -c /etc/nginx/nginx.conf
# 启 nginx
nginx -c /etc/nginx/nginx.conf

# 查看 https
netstat -luntp|grep 443

# 不对外开放 8002 端口的请求
iptables -I INPUT -p tcp --dport 8002 -j DROP

# 查看 nginx 进程
ps -aux|grep nginx

# 查看端口
netstat -luntp|grep 8080

# 结束进程
kill pid

# 启动 tomcat 打开日志
sh catalina.sh start;tail -f ../logs/catalina.out
```

- `ab(ApacheBench)` 压力测试工具

`ab -n 50 -c 20 http://gaodaqian.com`

总共 50 个请求数, 并发 20.

```bash
[root@iZbp13kacqfe8vs6elfunrZ ~]# ab -n 50 -c 20 http://www.gaodaqian.com/wei.png
This is ApacheBench, Version 2.3 <$Revision: 1430300 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking www.gaodaqian.com (be patient).....done


Server Software:        nginx/1.12.2
Server Hostname:        www.gaodaqian.com
Server Port:            80

Document Path:          /wei.png
Document Length:        15106 bytes

Concurrency Level:      20
Time taken for tests:   12.781 seconds
Complete requests:      50
Failed requests:        0
Write errors:           0
Non-2xx responses:      50
Total transferred:      764050 bytes
HTML transferred:       755300 bytes
Requests per second:    3.91 [#/sec] (mean)
Time per request:       5112.283 [ms] (mean)
Time per request:       255.614 [ms] (mean, across all concurrent requests)
Transfer rate:          58.38 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        1   82 274.4      2    1004
Processing:     1 2014 2507.8   1347   12776
Waiting:        1  265 548.9     13    2324
Total:          3 2095 2460.3   1349   12777

Percentage of the requests served within a certain time (ms)
  50%   1349
  66%   2043
  75%   2656
  80%   3126
  90%   6297
  95%   6298
  98%  12777
  99%  12777
 100%  12777 (longest request)
```