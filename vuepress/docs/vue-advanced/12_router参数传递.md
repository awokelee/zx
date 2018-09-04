# vue-router 参数传递

### params

```js
{
  path: '/app/:id',
  component: Todo,
}
```

```js
<router-link to="/app/123">login</router-link>
```

```js
mounted() {
  this.$route.params
}
```

### query

`/app?a=123&b=456`

```js
mounted() {
  // {a: '123';, b: '456'}
  this.$route.query
}
```

### props

会把 `/app/:id` 的 参数 `:id` 当作 `props` 传进去, 可以不通过 `this.$route.params` 去获取.

这里的 `:id` 可以通过组件的 `props:['id']` 获取. 用于解耦. **推荐!**

```js
{
  path: '/app/:id',
  props: true
  component: Todo,
}
```

其他用法:

```js
{
  path: '/app/:id',
  props: {
    id: 456
  }
  component: Todo,
}
```

`/app?a=123&b=456`

```js
{
  path: '/app/:id',
  props: (route) => ({
    // 456
    id: route.query.b
  })
  component: Todo,
}
```