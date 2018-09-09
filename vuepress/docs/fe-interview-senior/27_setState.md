# React 的 setState

- `setState` 的异步

- `Vue` 修改属性也是异步

- `setState` 的过程

### setState 为何需要异步

- 可能会一次执行多次 `setState`

- 你无法规定、限制用户如何使用 `setState`

- 没必要每次 `setState` 都重新渲染, 考虑性能

- 即便是每次重新渲染, 用户也看不到中间的效果

### setState 的过程

- 每个组件实例, 都有 `renderComponent` 方法

- 执行 `renderComponent` 会重新执行实例的 `render`

- `render` 函数返回 `newVnode`, 然后拿到 `preVnode`