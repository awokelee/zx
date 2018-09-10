# 如何创建 BFC

- `overflow` 的值不为 `visible`, 也就是设置 `auto` `hidden` 都会.

- `float` 值不为 `none`, 也就是设置了 `float:left` `float:right` 都会.

- `display` 的值是 `inline` box 或者是 跟 `table` 相关的 `table-` 开头的都会

- `position` 的值不是 `static` 或者 `relative`.  也就是设置了 `absolute` 和 `fixed` 都会.