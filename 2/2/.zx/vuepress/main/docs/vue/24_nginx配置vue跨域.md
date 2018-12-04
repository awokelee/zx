# Nginx 处理 Vue 跨域

::: tip
`Nginx` 配置跨域和 `API` 代理
:::

下面是 `nginx` 的 `.conf` 文件

```shell

location / {
  # 项目目录
  root   html/smarketing;
  index  index.html index.htm;
}

# 配置 /core 接口的跨域操作
location /core/ {
  proxy_pass http://192.168.89.72:8023/core/;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_connect_timeout 90;
  add_header Access-Control-Allow-Origin *;
  add_header Access-Control-Allow-Methods 'GET, POST, PUT, DELETE, OPTIONS';
  add_header Access-Control-Allow-Credentials 'true';
  add_header Access-Control-Allow-Headers 'Accept, Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
  if ($request_method = 'OPTIONS') {
      add_header 'Access-Control-Allow-Origin' *;
      add_header 'Access-Control-Max-Age' 1728000;
      add_header 'Access-Control-Allow-Credentials' 'true';
      add_header 'Access-Control-Allow-Methods' 'GET, POST, DELETE, PUT, OPTIONS';
      add_header 'Access-Control-Allow-Headers' 'Accept, Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,f-Modified-Since,Cache-Control,Content-Type';
      add_header 'Content-Type' 'text/plain charset=UTF-8';
      add_header 'Content-Length' 0;
      return 204;
  }
}

# 配置转发, 这里是 访问 /member 转发到 http://192.168.89.72:8025/member/
location /member/ {
  proxy_pass http://192.168.89.72:8025/member/;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_connect_timeout 90;
}
```