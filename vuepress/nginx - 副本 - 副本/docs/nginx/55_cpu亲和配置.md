# CPU 亲和配置

### CPU 的亲和

把进程`通常不会在处理器之间频繁迁移的进程`迁移的频率小, 减少性能损耗.

### 查看 CPU

```bash
# 查看有几个 CPU, 这里双 CPU
[root sbin]# cat /proc/cpuinfo|grep "physical id"|sort|uniq|wc -l
2
# 查看几核, 这里是 8 核, 所以总共 2 * 8 为 16 核
[root sbin]# cat /proc/cpuinfo|grep "cpu cores"|uniq
cpu cores       : 8
```

### Nginx 配置方案一

配置 `/etc/nginx/nginx.conf`.

```bash
user  nginx;
# 这里跟你的系统核心数一致最好
worker_processes  16;
# 因为是 16 核, 所以这里配置 16 个. 0000000000000010 表示第二个核心使用第二个 CPU
worker_cpu_affinity 0000000000000001 0000000000000010 0000000000000100 0000000000001000 0000000000010000 0000000000100000 0000000001000000 0000000010000000 0000000100000000 0000001000000000 0000010000000000 0000100000000000 0001000000000000 0010000000000000 0100000000000000 1000000000000000;
# worker_cpu_affinity auto;
```

查看 `nginx` 绑定到哪个核心, 这里显示的就是 `/etc/nginx/nginx.conf` 配置的.

```bash
[root sbin]# ps -eo pid,args,psr|grep [n]ginx
6130 nginx: worker process   0
6131 nginx: worker process   1
6132 nginx: worker process   2
6133 nginx: worker process   3
6134 nginx: worker process   4
6135 nginx: worker process   5
6136 nginx: worker process   6
6137 nginx: worker process   7
6139 nginx: worker process   9
6139 nginx: worker process   9
6140 nginx: worker process  10
6141 nginx: worker process  11
6142 nginx: worker process  12
6143 nginx: worker process  13
6144 nginx: worker process  14
6145 nginx: worker process  15
```

### Nginx 配置方案二

配置 `/etc/nginx/nginx.conf`.

```bash
user  nginx;
# 这里使用两个核心
worker_processes  2;
# 1010101010101010 表示 1 3 5 7 9 11 13 15 使用第一个核心
worker_cpu_affinity 1010101010101010 0101010101010101;
```

### Nginx 配置方案三 auto

最常用

```bash
user  nginx;
worker_processes  16;
# 9 版本出来的
worker_cpu_affinity auto;
```