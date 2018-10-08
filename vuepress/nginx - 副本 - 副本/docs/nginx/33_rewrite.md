# Nginx 的 rewrite 规则

实现 `url` 重写以及重定向

### 场景

- `URL` 访问跳转, 支持开发设计

页面跳转、兼容性支持、展示效果等.

- `SEO` 优化

- 维护

后台维护、流量转发

- 安全

### 配置语法

```bash
Syntax: rewrite regex replacement[flag];
Default: ---
Context: server, location, if
```

实例(挂维护页): `rewrite ^(.*)$/pages/maintain.html break;`

### 正则表达式

符 | 内容 |
----------|---------
`.`  | 匹配除换行符以外的任意字符
`?`  | 重复 `0` 次或 `1` 次
`+`  | 重复 `1` 次活更多次
`*`  | 所有
`^` | 匹配字符串的开始
`$` | 匹配字符串的结束
`{n}` | 重复 `n` 次
`{n,}` | 重复 `n` 次或更多次
`[c]` | 匹配单个字符 `c`
`[a-z]` | 匹配 `a-z` 小写字母的任意一个
`\` | 转义字符
`()` | 用于匹配括号之间

实例(挂维护页): `rewrite index\.php$/pages/maintain.html break;`

```bash
if($http_user_agent ~ MSIE){
  rewrite ^(.*)$ /msie/$1 break;
}
```

### flag

flag | 内容 |
----------|---------
`last`  | 停止 `rewrite` 检测
`break`  | 停止  `rewrite` 检测, 会新建一个请求
`redirect`  | 返回 `302` 临时重定向, 地址栏会显示跳转后的地址
`permanent`  | 返回 `301` 永久重定向, 地址栏会显示跳转后的地址

- `last`、`break`

```bash
server {
  listen 80 default_server;
  server_name gaodaqian.com;

  access_log  /var/log/nginx/log/host.access.log  main;

  root /opt/app/code;
  location ~ ^/break {
      rewrite ^/break /test/ break;
  }

  location ~ ^/last {
        rewrite ^/last /test/ last;
  }

  location /test/ {
      default_type application/json;
      return 200 '{"status":"success"}';
  }
}
```

`last` 的请求会返回 `200`

```bash
location ~ ^/last {
  rewrite ^/last /test/ last;
}
```

`redirect` 的请求会返回 `302`, 再返回一个 `location`

```bash
location ~ ^/last {
  rewrite ^/last /test/ redirect;
}
```

- `redirect`、`permanent`

`redirect` 还是会去请求服务器

`permanent` 永久重定向, 客户端不再请求服务端

```bash
location ~ ^/imooc {
  rewrite ^/imooc http://www.gaodaqian.com/ permanent;
  #rewrite ^/imooc http://www.gaodaqian.com/ redirect;
}
```

### 应用

```bash
location / {
  rewrite ^/course-(\d+)-(\d+)-(\d+)\.html$ /course/$1/$2/course_$3.html break;
  # 如果是 chrome 浏览器
  if ($http_user_agent ~* Chrome) {
    rewrite ^/nginx http://coding.imooc.com/class/121.html redirect;
  }
  # 文件路径不存在
  if (!-f $request_filename) {
    rewrite ^/(.*)$ http://www.baidu.com/$1 redirect;
  }
  index  index.html index.htm;
}
```

### rewrite 规则优先级

执行 `server` 块的 `rewrite` 指令, 优先级最高

执行 `location` 匹配, 优先级其次

执行选定的 `location` 中的 `rewrite`

`apache` 中写法:

```bash
RewriteCond %{HTTP_HOST} nginx.org
rewriteRule (.*)
```

`nginx` 中的写法一:

```bash
server {
  listen 80;
  server_name www.nginx.org nginx.org;
  if($http_host=nginx.org){
    rewrite (.*) http://www.nginx.org$1;
  }
  ...
}
```

`nginx` 中的写法二:

```bash
server {
  listen 80;
  server_name nginx.org;
  rewrite ^ http://www.nginx.org$request_uri?;
}

server {
  listen 80;
  server_name www.nginx.org;
  ...
}
```