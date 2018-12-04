# 虚拟 DOM

- 原始方案:

```js
1. state 数据

2. JSX 模版

3. 数据 + 模版 结合, 生成真实的 DOM, 来显示

4. state 发生改变

5. 数据 + 模版 结合, 生成真实的 DOM, 替换原始的 DOM

缺陷:
第一次生成了一个完整的 DOM 片段
第二次生成了一个完整的 DOM 片段
第二次的 DOM 替换第一次的 DOM, 非常耗性能
```

- 第二种方案:

```js
1. state 数据

2. JSX 模版

3. 数据 + 模版 结合, 生成真实的 DOM, 来显示

4. state 发生改变

5. 数据 + 模版 结合, 生成真实的 DOM, 并不直接替换原始的 DOM

6. 新的 DOM (DocumentFragment) 和 原始的 DOM 做比对, 找差异

7. 找出 input 框发生了变化

8. 只用新的 DOM 中的 input 元素, 替换掉老的 DOM 中的 input 元素

缺陷:
性能的提升并不明显
```

- `虚拟 DOM` 方案:

```js {5,8,21}
1. state 数据

2. JSX 模版

3.生成虚拟 DOM (虚拟 DOM 就是一个 JS 对象, 用它来描述真实 DOM) (损耗了性能)
['div', {id: 'abc'}, ['span', {}, 'hello world']]      [元素, 属性, 内容]

4. 用虚拟 DOM 的结构生成真实的 DOM, 来显示
<div id="abc"><span>hello world</span></div>

5. state 发生改变

6.  数据 + 模版 生成新的虚拟 DOM (极大的提升了性能)
['div', {id: 'abc'}, ['span', {}, 'bye bye']]

7. 比较原始虚拟 DOM 和新的虚拟 DOM 的区别, 找到区别是 span 中的内容

8. 直接操作 DOM, 改变 span 中的内容

优点:
用 JS 生成虚拟 DOM(JS 对象)的代价很低, 用 JS 生成 DOM 开销高 (webapplication 级别 API).
减少真实 DOM 创建和对比.
```

- `JSX` 与 `虚拟 DOM`

**JSX -> createElement -> 虚拟 DOM (JS 对象) -> 真实的 DOM.**

步骤一:

`JSX` 语法如下

```js {2}
render() {
  return <div>item</div>
}
```

步骤二:

解析 `JXS`, `React` 用 `createElement(元素, 属性, 内容)` 方法创建虚拟 `DOM`

```js {2}
render() {
  return React.createElement('div', {}, 'item')
}
```

- `虚拟 DOM` 优点

1. 性能提升了
2. 它使得跨端应用得以实现. 原生应用不存在 `DOM`, 用虚拟 `DOM` 以供识别,  `React Native`