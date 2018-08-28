# `geoip_module`

基于 `IP` 地址匹配 `MaxMind GeoIP` 二进制文件, 读取 `IP` 所在地域信息.

### 安装

`yum install nginx-module-geoip`

### 使用场景

- 区别国内外作 `HTTP` 访问规则

- 区别国内城市地域作 `HTTP` 访问规则

- 安装国家和城市数据

```bash
wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCountry/GeoIP.dat.gz
wget http://geolite.maxmind.com/download/geoip/database/GeoLiteCity.dat.gz
```

- 解压

```bash
gunzip GeoIP.dat.gz
gunzip GeoLiteCity.dat.gz
```

- 在 `nginx.conf` 最顶部引入模块:

```bash
load_module "modules/ngx_http_geoip_module.so";
load_module "modules/ngx_stream_geoip_module.so";

user aginx;
...
```

- 使用模块:

```bash
geoip_country /etc/nginx/geoip/GeoIP.dat;
geoip_city /etc/nginx/geoip/GeoLiteCity.dat;
server {
  listen       80;
  server_name  localhost;

  # 不是国内 IP 就禁止
  location / {
    if ($geoip_country_code != CN) {
        return 403;
    }
    root   /usr/share/nginx/html;
    index  index.html index.htm;
  }
  # 访问 /myip 返回 ip
  location /myip {
    default_type text/plain;
    return 200 "$remote_addr $geoip_country_name $geoip_country_code $geoip_city";
  }

  error_page   500 502 503 504 404  /50x.html;
  location = /50x.html {
      root   /usr/share/nginx/html;
  }
}
```