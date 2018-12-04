# 适配 PC 与移动环境

现在很多网站都存在 `PC 站` 和 `H5 站` 两个站点，因此根据用户的浏览环境自动切换站点是很常见的需求。

Nginx 可以通过内置变量 `$http_user_agent`，获取到请求客户端的 `userAgent`，从而知道用户处于 `移动端` 还是 `PC`，

进而控制重定向到 `H5 站`还是 `PC 站`。

以笔者本地为例，`pc 端` 站点是 `mysite-base.com`，`H5端` 是 `mysite-base-H5.com`。`pc 端` Nginx 配置如下：

```bash
location / {
  # 移动、pc设备适配
  if ($http_user_agent ~* '(Android|webOS|iPhone|iPod|BlackBerry)') {
    set $mobile_request '1';
  }
  if ($mobile_request = '1') {
    rewrite ^.+ http://mysite-base-H5.com;
  }
}  
```

访问 `mysite-base.com` 这样当浏览设备切换成 `移动模式`，再次刷新页面后，站点被自动切换到 `H5站 http://mysite-base-H5.com`。

访问 `kaola.com` 当识别设备是移动端刷新自动请切换到 `m.kaola.com`。

[Nginx与前端开发](https://juejin.im/post/5bacbd395188255c8d0fd4b2), by ccfe.
