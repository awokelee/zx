# GitHub 超时

- 提交代码到 `github`, 控制台提示如下

![](./media/15322593091945/15322598599091.jpg)

`ping github.com` 超时

![](./media/15322593091945/15322595698334.jpg)

- 修改 `host`

在 `http://github.global.ssl.fastly.net.ipaddress.com/` 查到 `github` `ip` 为 `151.101.13.194`

![](./media/15322593091945/15322597078819.jpg)

修改 `host`

![](./media/15322593091945/15322597384571.jpg)

- 再试试 `ping githu.com`, 发现ok

![](./media/15322593091945/15322595177286.jpg)

- 提交代码 ok

![](./media/15322593091945/15322598271469.jpg)