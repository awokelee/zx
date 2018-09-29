# Nginx + Lua 环境配置

- `LuaJIT`

- `ngx_devel_kit` 和 `lua-nginx-module`

- 重新编译 `Nginx`

### 原来的配置

```bash
[root ~]# nginx -V
nginx version: nginx/1.12.2
built by gcc 4.8.5 20150623 (Red Hat 4.8.5-16) (GCC)
built with OpenSSL 1.0.2k-fips  26 Jan 2017
TLS SNI support enabled
configure arguments: --prefix=/usr/share/nginx --sbin-path=/usr/sbin/nginx --modules-path=/usr/lib64/nginx/modules --conf-path=/etc/nginx/nginx.conf --error-log-path=/var/log/nginx/error.log --http-log-path=/var/log/nginx/access.log --http-client-body-temp-path=/var/lib/nginx/tmp/client_body --http-proxy-temp-path=/var/lib/nginx/tmp/proxy --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi --http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi --http-scgi-temp-path=/var/lib/nginx/tmp/scgi --pid-path=/run/nginx.pid --lock-path=/run/lock/subsys/nginx --user=nginx --group=nginx --with-file-aio --with-ipv6 --with-http_auth_request_module --with-http_ssl_module --with-http_v2_module --with-http_realip_module --with-http_addition_module --with-http_xslt_module=dynamic --with-http_image_filter_module=dynamic --with-http_geoip_module=dynamic --with-http_sub_module --with-http_dav_module --with-http_flv_module --with-http_mp4_module --with-http_gunzip_module --with-http_gzip_static_module --with-http_random_index_module --with-http_secure_link_module --with-http_degradation_module --with-http_slice_module --with-http_stub_status_module --with-http_perl_module=dynamic --with-mail=dynamic --with-mail_ssl_module --with-pcre --with-pcre-jit --with-stream=dynamic --with-stream_ssl_module --with-google_perftools_module --with-debug --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -m64 -mtune=generic' --with-ld-opt='-Wl,-z,relro -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E'
```

### LuaJIT

```bash
wget http://luajit.org/download/LuaJIT-2.0.2.tar.gz

tar -zxvf LuaJIT-2.0.2.tar.gz

cd LuaJIT-2.0.2

make install PREFIX=/usr/local/LuaJIT

export LUAJIT_LIB=/usr/local/LuaJIT/lib

export LUAJIT_INC=/usr/local/LuaJIT/include/luajit-2.0
```

### ngx_devel_kit 和 lua-nginx-module

```bash
cd /opt/download

wget https://github.com/simpl/ngx_devel_kit/archive/v0.3.0.tar.gz

wget https://github.com/openresty/lua-nginx-module/archive/v0.10.9rc7.tar.gz

tar -zxvf v0.3.0.tar.gz

tar -zxvf v0.10.9rc7.tar.gz
```

### 重新编译 Nginx

```bash
cd /opt/download

wget http://nginx.org/download/nginx-1.14.0.tar.gz

tar -zxvf nginx-1.14.0.tar.gz

cd nginx-1.14.0

./configure --add-module=/opt/download/ngx_devel_kit-0.3.0 --add-module=/opt/download/lua-nginx-module-0.10.9rc7

# 如若出现：
# error: the HTTP gzip module requires the zlib library.
# yum install zlib zlib-devel 一下即可

make -j 4 && make install
```

### 加载 lua 库，加入到 ld.so.conf 文件

```bash
echo "/usr/local/LuaJIT/lib" >> /etc/ld.so.conf
# 然后执行如下命令：
ldconfig
```