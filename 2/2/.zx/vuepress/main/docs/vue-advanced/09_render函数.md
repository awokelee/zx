# render 函数

### render 原理

```js
template: `
  <div :style="style">
    <slot></slot>
  </div>
`,
```

`vue` 会自动根据 `template` 会编译成一个 `render` 函数.

`render` 函数 `return` 一个 `this.$createElement()` 函数.

`render` 函数 接受一个参数 `createElement()` 函数.

`createElement(元素, {属性}, [内容])`.

`createElement` 创建出来的也就是 **虚拟 `DOM`**, 会在内存中.

当检测到需要更新才会把 **虚拟 `DOM`** 转换成真正的 `DOM` 展示到页面.

`'元素'` 可以是 **组件** 也可以是 `DOM` 节点.

`'属性'` 可以是 `props` `ref` 等.

`'内容'` 可以是 **子节点**, 也可以是 **字符串**, 如果是子节点则需要用数组表示.

```js
render (createElement) {
  return createElement('div', {
    style: this.style
    on: {
      click: () => { this.$emit('click') }
    }
  }, [
    this.$slots.header,
    this.props1
  ])
},
```

### 完整案例

```js
import Vue from 'vue'

const component = {
  props: ['props1'],
  name: 'comp',
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style
      // on: {
      //   click: () => { this.$emit('click') }
      // }
    }, [
      this.$slots.header,
      this.props1
    ])
  },
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <comp-one ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `,
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          props1: this.value
        },
        // on: {
        //   click: this.handleClick
        // },
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement('span', {
          ref: 'span',
          slot: 'header',
          attrs: {
            id: 'test-id'
          }
        }, this.value)
      ]
    )
  }
})

```