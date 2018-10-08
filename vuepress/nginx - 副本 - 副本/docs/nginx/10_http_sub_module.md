# `http_sub_module` 内容替换

- --with-http_sub_module

`HTTP` 内容替换, 指定返回给客户端内容, 有时候帮开发调试 `bug` 很快.

```bash
# string 要替换的内容, replacement 替换后的内容
Syntax: sub_filter string replacement;
Default: ---
Context: http, server, location
```

下面的案例就是把 `<a>hello` 替换为 `<a>HELLO`, 默认替换第一个

```bash
location / {
  root /opt/app/code;
  index index.html index.htm;
  sub_filter '<a>hello' '<a>HELLO'
}
```

```bash
# HTTP 头信息 Last-Modified
Syntax: sub_filter_last_modified on|off;
Default: sub_filter_last_modified off;
Context: http, server, location
```

```bash
# 替换 html 内容第一个还是所有
Syntax: sub_filter_once on|off;
Default: sub_filter_once on;
Context: http, server, location
```