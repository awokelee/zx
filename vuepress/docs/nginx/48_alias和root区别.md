# alias 和 root 区别

### root

```bash
location /request_path/image/ {
  root /local_path/image/;
}
```

当用户请求: `http://www.gaodaqian.com/request_path/image/cat.png`

实际去查找的是: `/local_path/image/`**request_path/image**`/cat.png`

是根据 `root` 定义的路径 + 用户请求的 `path` 拼接的.

### alias

```bash
location /request_path/image/ {
  alias /local_path/image/;
}
```

当用户请求: `http://www.gaodaqian.com/request_path/image/cat.png`

实际去查找的是: /local_path/image`/cat.png`

没有去寻找 `request_path/image` 层级