# Nginx 缓存

HTTP 协议定义的缓存机制, `Expires`; `Cache-control` 等.

### 浏览器无缓存

![](./media/no-cache.png)

### 客户端有缓存

![](./media/cache.png)

### 校验过期机制

校验是否过期: `Expires (HTTP 1.0)`、`Cache-control(max-age) HTTP 1.1`

协议中 `Etag` 头信息校验: `Etag`

`Last-Modified` 头信息校验: `Last-Modified`

![](./media/cache-rules.png)

### Nginx 配置缓存

- 配置语法 `expires`

添加 `Cache-Control`、`Expires` 头

```md
Syntax: expires [modified] time;
        expires epoch|max|off;
Default: expires off;
Context: http, server, location, if in location
```

```bash
location ~ .*\.(htm|html)$ {
  expires 24h;
  root  /opt/app/code;
}
```