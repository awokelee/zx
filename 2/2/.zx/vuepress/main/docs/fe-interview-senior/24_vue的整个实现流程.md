# Vue 的整个实现流程

- **第一步**: 解析模版成 `render` 函数

![](./media/step1-1.png)

![](./media/step1-2.png)

- **第二步**: 响应式开始监听

![](./media/step2.png)

- **第三步**: 首次渲染, 显示页面, 且绑定依赖

![](./media/step3.png)

- **第四步**: `data` 属性变化, 触发 `rerender`

- 修改属性, 被响应式的 `set` 监听到

- `set` 中执行 `updateComponent`

- `updateComponent` 重新执行 `vm._render()`

- 生成的 `vnode` 和 `prevVnode`, 通过 `patch` 进行对比

- 渲染到 `html` 中

![](./media/step4-1.png)

![](./media/step4-2.png)