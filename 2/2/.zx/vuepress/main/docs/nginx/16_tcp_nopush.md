# tcp_nopush

- 配置语法

`sendfile` 开启的情况下, 提高网络包的传输效率(不一个个发, 接受多个后再发)

```md
Syntax: tcp_nopush  on|off;
Default: tcp_nopush off;
Context: http, server, location
```