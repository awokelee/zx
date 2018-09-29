# Vue

## 介绍

`Vue.js` (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式`JavaScript`框架

## 库和框架区别

- 库 Library
代表：`jQuery`，`jQuery`这个库的核心：`DOM`操作，即：封装`DOM`操作，简化`DOM`操作
- 框架 Framework
框架规定了一种编程方式，是一套完整的解决方案, 使用框架的时候，由框架控制一切，我们只需要按照规则写代码
- 区别
You call Library, Framework calls you
核心点：谁起到主导作用（控制反转）
框架中控制整个流程的是框架
使用库，由开发人员决定如何调用库中提供的方法（辅助）
好莱坞原则：Don't call us, we'll call you.
框架的侵入性很高（从头到尾）

## MVC、MVVM

- MVVM ===> M / V / VM
- M：model数据模型
- V：view视图
- VM：ViewModel
- `MVC`模式，将应用程序划分为三大部分，实现了职责分离
- `MVVM`通过数据双向绑定让数据自动地双向同步， V（修改数据） -> M， M（修改数据） -> V

## 起步

### Hello Vue

- 安装：`npm i -S vue`

```HTML
<!-- 指定vue管理内容区域，需要通过vue展示的内容都要放到找个元素中 -->
<div id="app">{{ msg }}</div>

<!-- 引入 vue.js -->
<script src="vue.js"></script>

<!-- 使用 vue -->
<script>
  var vm = new Vue({
    // el：提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标
    el: '#app',
    // Vue 实例的数据对象，用于给 View 提供数据
    data: {
      msg: 'Hello Vue'
    }
  })
</script>
```

### Vue实例

- 1：推荐在创建实例之前，就声明所有的根级响应式属性
- 2：可以通过 `vm.$data` 访问到data中的所有属性，或者 `vm.msg`
`vm.$data.msg === vm.msg`

```JS
var vm = new Vue({
  data: {
    msg: '大家好，...'
  }
})

vm.$data.msg === vm.msg // true
```

### 数据绑定

- 最常用的方式：Mustache，也就是 {{}} 语法
- 解释：{{}}从数据对象data中获取属性
- 说明：数据对象的属性值发生了改变，插值处的内容都会更新
- 说明：{{}}中允许使用JavaScript支持的所有表达式
- 注意：**Mustache 语法不能作用在 HTML 元素的属性上**

```HTML
<h1>Hello, {{ msg }}.</h1>
<p>{{ 1 + 2 }}</p>
<p>{{ isOk ? 'yes': 'no' }}</p>

<!-- ！！！错误示范！！！ -->
<h1 title="{{ err }}"></h1>
```

## 指令

- 指令 (Directives) 是带有 v- 前缀的特殊属性
- 当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

### v-text

更新元素的 `textContent`, `<h1 v-text="msg"></h1>`

### v-html

更新元素的 `innerHTML`, `<h1 v-html="msg"></h1>`

### v-bind

当表达式的值改变时，将其产生的连带影响，响应式地作用于 `DOM`

```HTML
<!-- 完整语法 -->
<a v-bind:href="url"></a>

<!-- 缩写 -->
<a :href="url"></a>
```

### v-on

- 作用：绑定事件
- 语法：`v-on:click="say" or v-on:click="say('参数', $event)"`
- 简写：`@click="say"`
- 说明：绑定的事件从`methods`中获取

```HTML
<!-- 完整语法 -->
<a v-on:click="doSomething"></a>

<!-- 缩写 -->
<a @click="doSomething"></a>
```

### 事件修饰符

- `.stop` 阻止冒泡，调用 `event.stopPropagation()`
- `.prevent` 阻止默认事件，`调用 event.preventDefault()`
- `.capture` 添加事件侦听器时使用事件捕获模式
- `.self` 只当事件在该元素本身（比如不是子元素）触发时触发回调
- `.once` 事件只触发一次

### v-model

在表单元素上创建双向数据绑定，监听用户的输入事件以更新数据

```HTML
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

### v-for

基于源数据多次渲染元素或模板块

```HTML
<!-- 1 基础用法 -->
<div v-for="item in items">
  {{ item.text }}
</div>

<!-- item 为当前项，index 为索引 -->
<p v-for="(item, index) in list">{{item}} -- {{index}}</p>

<!-- item 为值，key 为键，index 为索引 -->
<p v-for="(item, key, index) in obj">{{item}} -- {{key}}</p>
<p v-for="item in 10">{{item}}</p>
```

### key属性

- 推荐：使用 `v-for` 的时候提供 `key` 属性，以获得性能提升。
- 说明：使用 `key`，`VUE`会基于 `key` 的变化重新排列元素顺序，并且会移除 `key` 不存在的元素。

```HTML
<div v-for="item in items" :key="item.id">
  <!-- 内容 -->
</div>
```

## 样式处理 -class 和 style

- 说明：这两个都是HTML元素的属性，使用`v-bind`，只需要通过表达式计算出字符串结果即可
- 表达式的类型：字符串、数组、对象（重点）

```HTML
<!-- 1 -->
<!-- 重点 -->
<div v-bind:class="{ active: true }"></div> ===>
<div class="active"></div>

<!-- 2 -->
<div :class="['active', 'text-danger']"></div> ===>
<div class="active text-danger"></div>

<!-- 3 -->
<div v-bind:class="[{ active: true }, errorClass]"></div> ===>
<div class="active text-danger"></div>


--- style ---
<!-- 1 -->
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
<!-- 2 将多个 样式对象 应用到一个元素上-->
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

### v-if 和 v-show

- `v-if`：根据表达式的值的真假条件，销毁或重建元素
- `v-show`：根据表达式之真假值，切换元素的 `display` `CSS` 属性

### 提升性能 v-pre

跳过这个元素和它的子元素的编译过程。可以用来显示原始 `Mustache` 标签。跳过大量没有指令的节点会加快编译。

```HTML
<span v-pre>{{ this will not be compiled }}</span>
```

### 提升性能 v-once

只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```HTML
<span v-once>This will never change: {{msg}}</span>
```

## 过滤器 filter

文本数据格式化

### 全局过滤器

- 通过全局方式创建的过滤器，在任何一个`vue`实例中都可以使用

```JS
Vue.filter('filterName', function(value) {
  // value 表示要过滤的内容
})
```

- 示例

```HTML
<div>{{ dateStr | date }}</div>
<div>{{ dateStr | date('YYYY-MM-DD hh:mm:ss') }}</div>

<script>
  Vue.filter('date', function(value, format) {
    // value 要过滤的字符串内容
    // format 过滤器的参数
  })
</script>
```

### 局部过滤器

局部过滤器是在某一个`vue`实例的内容创建的，只在当前实例中起作用

```JS
{
  data: {},
  // 通过 filters 属性创建局部过滤器
  filters: {
    filterName: function(value) {}
  }
}
```
### 键值修饰符

在监听键盘事件时，`Vue` 允许为 `v-on` 在监听键盘事件时添加关键修饰符
修饰键（`.ctrl`等）、鼠标按键修饰符（`.left`等）

```JS
// 只有在 keyCode 是 13 时调用 vm.submit()
@keyup.13="submit"
// 使用全局按键别名
@keyup.enter="add"

---

// 通过全局 config.keyCodes 对象自定义键值修饰符别名
Vue.config.keyCodes.f2 = 113
// 使用自定义键值修饰符
@keyup.enter.f2="add"
```

### 监视数据变化 - watch

- 概述：`watch`是一个对象，键是需要观察的表达式，值是对应回调函数。
- 作用：当表达式的值发生变化后，会调用对应的回调函数完成响应的监视操作

```JS
new Vue({
  data: { a: 1 },

  watch: {
    a: function(val, oldVal) {
      // val 表示当前值
      // oldVal 表示旧值
      console.log('当前值为：' + val, '旧值为：' + oldVal)
    }
  }
})
```

### 计算属性

- 说明：计算属性是基于它们的依赖进行缓存的，只有在它的相关依赖发生改变时才会重新求值
- 注意：`Mustache`语法（{{}}）中不要放入太多的逻辑，否则会让模板过重、难以理解和维护
- 注意：`computed`中的属性不能与`data`中的属性同名

```JS
var vm = new Vue({
  el: '#app',
  data: {
    firstname: 'jack',
    lastname: 'rose'
  },
  computed: {
    fullname() {
      return this.firstname + '.' + this.lastname
    }
  }
})
```

### 计算属性的 getter 和 setter

- 说明 1：上面直接使用方法的形式其实就是`getter`，对应下面的`get`方法
- 说明 2：`set`方法会在 `fullName` 的值发生改变时，被调用
- 注意：**计算属性中的属性不要与`data`中的属性命名冲突，否则会报错**

```JS
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
```

## 实例生命周期

- 所有的 `Vue` 组件都是 `Vue` 实例，并且接受相同的选项对象即可 (一些根实例特有的选项除外)
- 实例生命周期也叫做：组件生命周期

### 生命周期介绍

- 简单说：**一个组件从开始到最后消亡所经历的各种状态，就是一个组件的生命周期**|
组件生命周期函数的定义：从组件被创建，到组件挂载到页面上运行，再到页面关闭组件被卸载，这三个阶段总是伴随着组件各种各样的事件，那么这些事件，统称为组件的生命周期函数！
- 生命周期的钩子函数：框架提供的函数，能够让开发人员的代码，参与到组件的生命周期中。也就是说，通过钩子函数，就可以控制组件的行为
- 注意：vue再执行过程中会自动调用`生命周期钩子函数`，我们只需要提供这些钩子函数即可
- 注意：钩子函数的名称都是固定的！！！

### beforeCreate()

- 说明：在实例初始化之后，数据观测 (`data observer`) 和 `event/watcher` 事件配置之前被调用
- 注意：此时，无法获取 `data`中的数据、`methods`中的方法

### created()

- 注意：这是一个常用的生命周期，可以调用`methods`中的方法、改变`data`中的数据
- 使用场景：发送请求获取数据

### beforeMounted()

在挂载开始之前被调用

### mounted()

此时，`vue`实例已经挂载到页面中，可以获取到`el`中的`DOM`元素，进行`DOM`操作

### beforeUpdated()

数据更新时调用，发生在虚拟 `DOM` 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

### updated()

组件 `DOM` 已经更新，所以你现在可以执行依赖于 `DOM` 的操作。

### beforeDestroy()

- 说明：实例销毁之前调用。在这一步，实例仍然完全可用。
- 使用场景：实例销毁之前，执行清理任务，比如：清除定时器等

### destroyed()

`Vue` 实例销毁后调用。调用后，`Vue` 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

## vue-resource

### GET

发送`JSONP`的方式与`get`请求相同

```JS
const url = 'http://vue.io/api/getnewslist'
this.$http.get(url)
  .then(data => {
    console.log(data)
    console.log(data.body)
  })
```

### POST

```JS
// const url = 'http://182.254.146.100:8899/api/postcomment/17'
const url = 'http://vue.io/api/postcomment/17'
this.$http.post(url, {
  content: '完美！'
}, {
  emulateJSON: true
})
  .then(data => {
    console.log(data.body);
  })
```

### JSONP

```JS
const url = 'http://v.com/Locating/showji.com2016234999234.aspx?m=13333333333&output=json&&timestamp=' + (new Date() - 0)
this.$http.jsonp(url)
  .then(data => {
    console.log(data.body);
  })
```

## axios

- 以 `Promise` 为基础的`HTTP`客户端，适用于：浏览器和 `node.js`
- 类似于 `ajax`，用来发送请求，异步获取数据

### 使用

`npm i -S axios`

```TEXT
导入 vue
1 导入 axios

2 Vue.prototype.$http = axios
  this.$http 方式来使用 axios

3 全局公共域名配置
  axios.defaults.baseURL = 'https://api.example.com'

4 HTTP请求的拦截器
  axios.interceptors.request
  axios.interceptors.response

5 注意：发送post请求的时候，参数需要额外的处理
```

```JS
import Vue from 'vue'
import axios from 'axios'
// 将 axios 添加到 Vue.prototype 中
Vue.prototype.$axios = axios

---
// 在组件中使用：
methods: {
  getData() {
    this.$axios.get('url')
      .then(res => {})
      .catch(err => {})
  }
}

---
// API使用方式：

axios.get(url[, config])
axios.post(url[, data[, config]])
axios(url[, config])
axios(config)
```

### Get

```JS
// url中带有query参数
axios.get('/user?id=89')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// url和参数分离，使用对象
axios.get('/user', {
  params: {
    id: 12345
  }
})
```

### Post

- 不同环境中处理 POST请求
- 默认情况下，`axios` 会将`JS`对象序列化为`JSON`对象。为了使用 `application/x-www-form-urlencoded` 格式发送请求，我们可以这样：

```JS
// 使用 qs 包，处理将对象序列化为字符串
var qs = require('qs')
axios.post('/foo', qs.stringify({ 'bar': 123 }))

// 或者：
axios.post('/foo', 'bar=123')
```

```JS
axios.post('/user', qs.stringify({
    firstName: 'Fred',
    lastName: 'Flintstone'
  }))
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### 全局配置

```JS
// 设置请求公共路径：
axios.defaults.baseURL = 'https://api.example.com'
```

### 拦截器

```JS
// 请求拦截器
axios.interceptors.request.use(function (config) {
    // 所有请求之前都要执行的操作

    return config;
  }, function (error) {
    // 错误处理

    return Promise.reject(error);
  });

// 响应拦截器
axios.interceptors.response.use(function (response) {
    // 所有请求完成后都要执行的操作

    return response;
  }, function (error) {
    // 错误处理

    return Promise.reject(error);
  });
```

## 自定义指令

- 作用：进行`DOM`操作
- 使用场景：对纯 `DOM` 元素进行底层操作，比如：文本框获得焦点
- `vue` 自定义指令用法实例
- 两种指令：1 全局指令 2 局部指令

### 全局指令

```JS
Vue.directive('directiveName', {
  bind() {},
  update() {}
})

Vue.directive('directiveName', function() {})

Vue.directive('red', function(el, binding) {
  el.style.color = binging.value
})
```

### 局部指令

```JS
{
  directives: {
    directiveName: {}
  }
}
```

## 组件

> 组件系统是 `Vue` 的另一个重要概念，因为它是一种抽象，允许我们使用小型、独立和通常可复用的组件构建大型应用。，几乎任意类型的应用界面都可以抽象为一个组件树

### 全局组件

- 说明：全局组件在所有的`vue`实例中都可以使用
- 注意：先初始化根实例再注册组件
- 注意：组件中的 `data` 必须是函数

```JS
// 1 注册全局组件
Vue.component('my-component', {
  template: '<p>A custom component!</p>',
  data() {
    return {
      msg: '注意：组件的data必须是一个函数！！！'
    }
  }
})

// 2 使用：以自定义元素的方式
<div id="example">
  <my-component></my-component>
</div>

// =====> 渲染结果
<div id="example">
  <p>A custom component!</p>
</div>
```

- `template`属性的值可以是：1.模板字符串, 2.模板`id`

```HTML
<!-- 2 模板id 示例 -->
<script type="text/x-template" id="tpl">
  <p>A custom component!</p>
</script>

template: '#tpl'
```

- `extend`：使用基础 `Vue` 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

```JS
// 注册组件，传入一个扩展过的构造器
Vue.component('my-component', Vue.extend({ /* ... */ }))

// 注册组件，传入一个选项对象 (自动调用 Vue.extend)
Vue.component('my-component', { /* ... */ })

var Home = Vue.extend({
  template: '',
  data() {}
})
Vue.component('home', Home)
```

### 局部组件

- 局部组件，是在某一个具体的`vue`实例中定义的，只能在这个`vue`实例中使用

```JS
var Child = {
  template: '<div>A custom component!</div>'
}

new Vue({
  // 注意：此处为 components
  components: {
    // <my-component> 将只在当前vue实例中使用
    'my-component': Child
  }
})
```

## 组件通讯

### 父组件到子组件

- 方式：通过`props`属性来传递数据
- 注意：属性的值必须在组件中通过`props`属性显示指定，否则，不会生效
- 说明：传递过来的`props`属性的用法与`data`属性的用法相同

```HTML
<hello msg="120"></hello>
<hello my-msg="'abc'"></hello>

<!-- js -->
<script>
  components: {
    hello: {
      // 显式创建props及其传递过来的属性
      props: ['msg', 'myMsg'],
      template: '<h1>这是 hello 组件，这是消息：{{msg}} --- {{myMsg}}</h1>'
    }
  }
</script>
```

### 子组件到父组件

- 方式：父组件给子组件传递一个函数，由子组件调用这个函数
- 说明：借助vue中的自定义事件（`v-on:cunstomFn="fn"`）
- `$emit()`：触发事件

```HTML
<hello @pfn="parentFn"></hello>

<script>
  new Vue({
    methods: {
      // 父组件：提供方法
      parentFn(data) {
        console.log('父组件：', data)
      }
    }
  })

  Vue.component('hello', {
    template: '<button @click="fn">按钮</button>',
    methods: {
      // 子组件：通过$emit调用
      fn() {
        this.$emit('pfn', '这是子组件传递给父组件的数据')
      }
    }
  })
</script>
```

### 非父子组件通讯

在简单的场景下，可以使用一个空的 `Vue` 实例作为事件总线, `$on()`：绑定事件

```JS
var bus = new Vue()

// 触发组件 A 中的事件
bus.$emit('id-selected', 1)

// 在组件 B 创建的钩子中监听事件
bus.$on('id-selected', function (id) {
  // ...
})
```

- 组件A ---> 组件B

```HTML
<!-- 组件A： -->
<com-a></com-a>

<!-- 组件B： -->
<com-b></com-b>

<script>
  var bus = new Vue()

  var vm = new Vue({
    el: '#app',
    components: {
      comB: {
        template: '<p>组件A告诉我：{{msg}}</p>',
        data() {
          return {
            msg: ''
          }
        },
        created() {
          // 定义事件：
          bus.$on('tellComB', (msg) => {
            this.msg = msg
          })
        }
      },

      comA: {
        template: '<button @click="emitFn">告诉B</button>',
        methods: {
          emitFn() {
            // 调用组件B中定义的事件：
            bus.$emit('tellComB', '土豆土豆我是南瓜')
          }
        }
      }
    }
  })
</script>
```

## 获取组件（或元素） - refs

- 说明：`vm.$refs` 一个对象，持有已注册过 `ref` 的所有子组件（或`HTML`元素）
- 使用：在 `HTML`元素 中，添加`ref`属性，然后在JS中通过`vm.$refs.属性`来获取
- 注意：如果获取的是一个子组件，那么通过`ref`就能获取到子组件中的`data`和`methods`

```HTML
<div ref="dv"></div>

<!-- js -->
<script>
  vm.$refs.dv
</script>
```

## 动态组件 - component

渲染一个“元组件”为动态组件。依 `is` 的值，来决定哪个组件被渲染。

```HTML
<!-- 动态组件由 vm 实例的属性值 `componentId` 控制 -->
<component :is="componentId"></component>

<script>
// 两个组件：
Vue.component('home', {
  template: '<h1>这是 Home 组件</h1>'
})

Vue.component('login', {
  template: '<h1>这是 Login 组件</h1>'
})

data: {
  componentId: 'home'
}
</script>
```

## Vue 过渡动画

- 动画组件：`transition`，包裹需要执行动画的元素
- 列表动画组件：`transition-group`

### CSS过渡

- 根据`Vue`的过渡类名自定义过渡效果，`Vue`会自动添加或移除指定的类，从而实现过渡效果

```HTML
<style>
  /* 动画开始前 和 动画结束后的状态 */
  .v-enter,
  .v-leave-to {
    transform: translateY(30px);
  }

  /* 进场和离场的动画效果 */
  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease;
  }
</style>

<!-- View -->
<button @click="isShow=!isShow">过渡</button>
<transition name="a">
  <h1 v-show="isShow">这是一些文字，我们去大草原的湖边</h1>
</transition>

<!-- JS -->
<script>
  var vm = new Vue({
    el: '#app',
    data: {
      isShow: true
    }
  })
</script>
```

### 使用第三方动画库

`Vue`提供了自定义过渡类名的功能，通过修改类名，可以借助第三方动画库快速实现动画效果

`npm i -S animate.css`

```HTML
<!-- 
  enter-active-class 修改进入时的类名
  leave-active-class 修改离开时的类名
 -->
<transition enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
  <h1 v-show="isShow">这是一些文字，我们去大草原的湖边</h1>
</transition>
```

### 动画钩子函数 Velocity

`npm i -S velocity-animate`

```HTML
<input type="button" value="toggle" @click="flag=!flag">
<transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
>
  <h3 v-show="flag" class="cls">锄禾当午</h3>
</transition>

<script>
  var vm = new Vue({
    el: '#app',
    data: {
      flag: false
    },
    methods: {
      // 入场动画之前，设置 元素的起始样式
      beforeEnter(el) {
        el.style.transition = 'all 1s ease'
        el.style.transform = 'translateY(30px)'
      },
      enter(el, done) {
        el.offsetWidth // 或者 写 el.offsetHeight
        // 为元素设置 进入完成之后的 样式
        el.style.transform = 'translateY(0px)'
        done()

        // 使用 velocity.js 动画库，用法与 $.animate() 相同
        // 此时，可以添加 :css="false" 属性，避免过渡过程中 CSS 的影响
        // Velocity(el, {transform: 'translateY(0px)'}, 1000, done)
      },
      afterEnter() { 
        // 入场动画完成之后，立即 把 元素隐藏
        this.flag = !this.flag
      }
    }
  });
</script>
```

## 路由

- 路由即：浏览器中的哈希值（`# hash`）与展示视图内容（`template`）之间的对应规则
- `vue`中的路由是：`hash` 和 `component`的对应关系

```JS
在 Web app 中，通过一个页面来展示和管理整个应用的功能。
SPA往往是功能复杂的应用，为了有效管理所有视图内容，前端路由 应运而生！

简单来说，路由就是一套映射规则（一对一的对应规则），由开发人员制定规则。
当URL中的哈希值（# hash）发生改变后，路由会根据制定好的规则，展示对应的视图内容
```

### 安装、基本使用

`npm i -S vue-router`

```HTML
<div id="app">
  <!-- 5 链接导航 -->
  <router-link to="/home">首页</router-link>
  <router-link to="/login">登录</router-link>

  <!-- 6 路由出口：用来展示匹配路由视图内容 -->
  <router-view></router-view>
</div>

<!-- 1 导入 vue.js -->
<script src="./vue.js"></script>
<!-- 2 导入 路由文件 -->
<script src="./node_modules/vue-router/dist/vue-router.js"></script>
<script>
  // 3 创建两个组件
  const Home = Vue.component('home', {
    template: '<h1>这是 Home 组件</h1>'
  })
  const Login = Vue.component('login', {
    template: '<h1>这是 Login 组件</h1>'
  })

  // 4 创建路由对象
  const router = new VueRouter({
    routes: [
      { path: '/home', component: Home },
      { path: '/login', component: Login }
    ]
  })

  var vm = new Vue({
    el: '#app',
    router
  })
</script>
```

### 重定向

- 将 / 重定向到 /home: `{ path: '/', redirect: '/home' }`

### 路由导航高亮

当前匹配的导航链接，会自动添加`router-link-exact-active` `router-link-active`类

### 路由参数

- 说明：我们经常需要把某种模式匹配到的所有路由，全都映射到同一个组件，此时，可以通过路由参数来处理
- 语法：`/user/:id`
- 使用：当匹配到一个路由时，参数值会被设置到 `this.$route.params`
- 其他：可以通过 `$route.query` 获取到 `URL` 中的查询参数 等

```HTML
// 链接：
<router-link to="/user/1001">用户 Jack</router-link>
<router-link to="/user/1002">用户 Rose</router-link>

// 路由：
{ path: '/user/:id', component: User }

// User组件：
const User = {
  template: `<div>User {{ $route.params.id }}</div>`
}
```

### 嵌套路由 - 子路由

- `Vue`路由是可以嵌套的，即：路由中又包含子路由
- 规则：父组件中包含 `router-view`，在路由规则中使用 `children` 配置

```HTML
// 父组件：
const User = Vue.component('user', {
  template: `
    <div class="user">
      <h2>User Center</h2>
      <router-link to="/user/profile">个人资料</router-link>
      <router-link to="/user/posts">岗位</router-link>
      <!-- 子路由展示在此处 -->
      <router-view></router-view>
    </div>
    `
})

// 子组件：
const UserProfile = {
  template: '<h3>个人资料：张三</h3>'
}
const UserPosts = {
  template: '<h3>岗位：FE</h3>'
}

{ path: '/user', component: User,
  // 子路由配置：
  children: [
    {
      // 当 /user/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: 'profile',
      component: UserProfile
    },
    {
      // 当 /user/posts 匹配成功
      // UserPosts 会被渲染在 User 的 <router-view> 中
      path: 'posts',
      component: UserPosts
    }
  ]
}
```

### vue 单文件组件 vue-loader

- `single-file components`(单文件组件)
- 后缀名：`.vue`，该文件需要被预编译后才能在浏览器中使用
- 注意：单文件组件依赖于两个包 `vue-loader` / `vue-template-compiler`
- 安装：`npm i -D vue-loader vue-template-compiler`

```HTML
<!-- App.vue 示例代码： -->
<template>
  <div>
    <h1>VUE 单文件组件示例 -- App.vue</h1>
    <p>这是 模板内容</p>
  </div>
</template>

<script>
  // 组件中的逻辑代码
  export default {}
</script>

<style>
/* 组件样式 */
h1 {
  color: red;
}
</style>
```

```JS
// webpack.config.js 配置：
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    }
  ]
}
```

#### 使用单文件组件

```JS
import Vue from 'vue'
// 导入 App 组件
import App from './App.vue'

const vm = new Vue({
  el: '#app',
  // 通过 render 方法，渲染App组件
  render: c => c(App)
})
```

#### 单文件组件使用步骤

- 安装：`npm i -D vue-loader vue-template-compiler`
- 在 `webpack.config.js` 中配置 `.vue` 文件的 `loader`
`{ test: /\.vue$/, use: 'vue-loader' }`
- 创建 `App.vue` 单文件组件，注意：`App` 可以是任意名称
- 在 `main.js` 入口文件中，导入 `vue` 和 `App.vue` 组件，通过 `render` 将组件与实例挂到一起

#### 单文件组件 + 路由

- `vue` - `Vue.use`
- `Vue.use` 和 `路由`

```JS
import Vue from 'vue'
import App from './App.vue'

// ------------- vue路由配置 开始 --------------
import Home from './components/home/Home.vue'
import Login from './components/login/Login.vue'

// 1 导入 路由模块
import VueRouter from 'vue-router'
// 2 调用use方法使用插件
Vue.use(VueRouter)
// 3 创建路由对象
const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/login', component: Login }
  ]
})

// ------------- vue路由配置 结束 --------------

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  // 4 挂载到 vue 实例中
  router
})
```

## Mint-UI

基于 `Vue.js` 的移动端组件库
`npm i -S mint-ui`

```JS
// 1 导入 mint-ui模块
import MintUI from 'mint-ui'

// 2 导入 样式
import 'mint-ui/lib/style.css'

// 3 注册插件
Vue.use(MintUI)
```

## MUI

- 从 `github` 下载包，找到 `dist` 文件夹，只需要导入样式即可

```JS
// 只需要导入 MUI的样式 即可，根据MUI的例子，直接使用HTML结果即可
// 导入样式
import './lib/mui/css/mui.min.css'
```

## ElementUI

`PC` 端的 `UI` 组件库
`npm i -S element-ui`

```JS
{
  "presets": [
    ["es2015", { "modules": false }], "stage-0"
  ],

  "plugins": [
    ["component", [
      {
        "libraryName": "mint-ui",
        "style": true
      },
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-default"
      }
    ]]
  ]
}
```

## vue-cli

- `cli` 脚手架工具（通过命令行的方式，快速搭建一个项目的目录结构）
- 全局安装：`npm install -g vue-cli`
- 基本使用：`vue init webpack` 项目名称

```JS
开发期间运行项目：npm run dev
项目打包： npm run build
```

## vue配合webpack实现路由按需加载

- 修改组件的引用方式

```JS
// 方式一: require.ensure()
const NewsList = r => require.ensure([], () => r(require('../components/news/newslist.vue')), 'news')
// const NewsInfo = r => require.ensure([], () => r(require('../components/news/newsinfo.vue')), 'news')

// 方式二: import()
const NewsInfo = () => import(/* webpackChunkName: "newsinfo" */ '../components/news/newsinfo.vue')
```

- 修改 webpack 配置文件的output

```JS
output: {
  path: path.join(__dirname, './dist'),
  filename: 'js/[name].[chunkhash].js',

    // ------添加 chunkFilename, 指定输出js文件的名称------
  chunkFilename: 'js/[name].[chunkhash].js',
},
```