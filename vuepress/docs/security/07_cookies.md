# Cookies

- 前端数据存储

- 后端通过 `http` 头设置

- 请求时通过 `http` 头传给后端

- 前端可读写

- 遵守同源策略

### Cookies 特性

- 域名

- 有效期

- 路径

- http-only

- secure

### Cookies 作用

- 存储个性化设置

- 存储未登录时用户唯一标识

- 存储已登录用户的凭证

- 存储其他业务数据

### Cookies 登录用户凭证

- 前端提交用户名和密码

- 后端验证用户名和密码

- 后端通过 http 头设置用户凭证

- 后续访问时后端先验证用户凭证

- 用户 ID

- 用户 ID + 签名

- SessionId (随机字符串)

### Cookies 和 XSS 的关系

- XSS 可能偷取 Cookies

- http-only 的 Cookie 不会被偷

### Cookies 和 CSRF 的关系

- CSRF 利用了用户 Cookies

- 攻击站点无法读写 Cookies

- 最好能阻止第三方使用 Cookies (same-site)

### Cookies 安全策略

- 加签名防篡改

- 私有变换(加密)

- http-only(防止 XSS)

- secure (https 请求才使用 cookies)

- same-site (兼容性不是很好)