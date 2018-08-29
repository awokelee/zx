# Nginx 调用 Lua 模块指令

`Nginx` 的可插拔模块化加载执行, 共 `11` 个处理阶段.

阶段 | 作用
---------|----------
 `set_by_lua`<br>`set_by_lua_file` | 设置 `nginx` 变量, 可以实现复杂的赋值逻辑
 `access_by_lua`<br>`access_by_lua_file` | 请求访问阶段处理, 用于访问控制
 `content_by_lua`<br>`content_by_lua_file` | 内容处理器, 接收请求处理并输出响应

 ### Nginx Lua API

 api | 解释
---------|----------
 `ngx.var` | `nginx` 变量
 `ngx.req.get_headers` | 获取请求头
 `ngx.req.get_uri_args` | 获取 `url` 请求参数
 `ngx.redirect` | 重定向
 `ngx.print` | 输出响应内容体
 `ngx.say` | 通过 `ngx.print`, 但是会最后输出一个换行符
 `ngx.header` | 输出响应头
 ... | ...