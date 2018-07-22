# npm run build 卡死

- `npm run build` 卡住

![](./media/15321939273052/15321939513614.jpg)

- 注释掉 `build/check-versions.js` 中检测代码

![](./media/15321939273052/15321939928437.jpg)

- 执行 `npm config set registry http://registry.cnpmjs.org` 修改为淘宝源

![](./media/15321939273052/15321940324826.jpg)

- 成功

![](./media/15321939273052/15321941040255.jpg)

- 参考链接

[解决 npm run build 卡住问题](http://www.195440.com/?p=1141)