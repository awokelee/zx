# `http_random_index_module` 随机主页

- --with-http_random_index_module

目录中选择一个随机主页, 配置语法如下:

```bash
Syntax: random_index on|off;
Default: random_index off;
Context: location
```

```bash
location / {
  random_index on;
}
```