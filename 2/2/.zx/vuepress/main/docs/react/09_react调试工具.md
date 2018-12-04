# react 调试工具

- react-developer-tools

- Redux DevTools

[官网配置说明](https://github.com/zalmoxisus/redux-devtools-extension#usage)

需要在 `store` 中添加 `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`

```js {6}
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
```