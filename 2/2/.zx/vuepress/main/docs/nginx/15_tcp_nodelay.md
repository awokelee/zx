# tcp_nodelay

- 配置语法

`keepalive` 连接下, 提高网络包的传输实时性, 与 `tcp_nopush` 相反.

```md
Syntax: tcp_nodelay  on|off;
Default: tcp_nodelay off;
Context: http, server, location
```
