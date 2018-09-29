# `try_files` 使用

按顺序检查文件是否存在, 存在则返回对应规则

```bash
location / {
  try_files $uri $uri/ /index.php;
}
```

### 实例

```bash
location / {
  root /opt/app/code;
  # 如果不存在则走 @java_page
  try_files $uri @java_page;
}

location @java_page{
  proxy_pass http://127.0.0.1:9090;
}
```