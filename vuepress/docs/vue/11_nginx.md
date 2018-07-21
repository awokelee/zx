# nginx 转发（prod 环境）

> `npm run build` 打完包后将 `dist` 目录部署到服务器, 找到服务器 `nginx` 配置文件，对接口做`代理`和`跨域处理`

下面案例是对 `poster` 接口做的跨域和转发处理

```js
location /poster/ {
    proxy_pass http://192.168.89.72:8027/poster/;
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
        add_header 'Access-Control-Allow-Headers' 'Accept, Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type';
        add_header 'Content-Type' 'text/plain charset=UTF-8';
        add_header 'Content-Length' 0;
        return 204;
    }
}
```