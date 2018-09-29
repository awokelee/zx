# `server_name` 优先级

- `test1.conf`

```bash
server {
    listen       80;
    server_name  testserver1 gaodaqian.com;

    location {
      ...
    }
}
```

- `test2.conf`

```bash
server {
    listen       80;
    server_name  testserver2 gaodaqian.com;

    location {
      ...
    }
}
```

`nginx` 会根据读取配置文件的先后顺序来加载.

`test1.conf` 和 `test2.conf` 在同一目录下, 但是 `nginx` 会先读取 `test1.conf` ,所以当你访问的时候 他进的是 `testserver1`.