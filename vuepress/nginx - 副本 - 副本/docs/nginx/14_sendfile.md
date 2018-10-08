# sendfile 文件读取

- 配置语法

```md
Syntax: sendfile on|off;
Default: sendfile off;
Context: http, server, location, if in location
```

`--with-file-aio` 异步文件读取