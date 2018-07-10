# Vue 项目里戳中你痛点的问题及解决办法

- 列表进入详情页的传参问题
- 本地开发环境请求服务器接口跨域的问题
- `API` 接口的统一管理
- `UI库` 的按需加载定时器问题
- `rem` 文件的导入问题
- `Vue-Awesome-Swiper` 基本能解决你所有的轮播需求
- 打包后生成很大的 `.map` 文件的问题
- `fastClick` 的 `300ms` 延迟解决方案
- 组件中写选项的顺序
- 路由懒加载（也叫延迟加载）
- 开启 `gzip` 压缩代码详情页返回列表页缓存数据和浏览位置、其他页面进入列表页刷洗数据的实践
- `css` 的 `scoped` 私有作用域和深度选择器

## 列表进入详情页的传参问题

例如商品列表页面前往商品详情页面，需要传一个商品id;

```html
<router-link :to="{path: 'detail', query: {id: 1}}">前往detail页面</router-link>
```

c页面的路径为 `http://localhost:8080/#/detail?id=1`，可以看到传了一个参数 `id=1`，并且就算刷新页面`id`也还会存在。此时在c页面可以通过`id`来获取对应的详情数据，获取`id`的方式是`this.$route.query.id`

`vue`传参方式有：`query`、`params`+动态路由传参

说下两者的区别：

- 1.`query`通过`path`切换路由，`params`通过`name`切换路由

```html
// query通过path切换路由
<router-link :to="{path: 'Detail', query: { id: 1 }}">前往Detail页面</router-link>
// params通过name切换路由
<router-link :to="{name: 'Detail', params: { id: 1 }}">前往Detail页面</router-link>
```

- 2.`query`通过`this.$route.query`来接收参数，`params`通过`this.$route.params`来接收参数

```js
// query通过this.$route.query接收参数
created () {
    const id = this.$route.query.id;
}

// params通过this.$route.params来接收参数
created () {
    const id = this.$route.params.id;
}
```

- 3.`query`传参的`url`展现方式：`/detail?id=1&user=123&identity=1&更多参数`

params＋动态路由的url方式：/detail/123

- 4.`params`动态路由传参，一定要在路由中定义参数，然后在路由跳转的时候必须要加上参数，否则就是空白页面：

```js
{
  path: '/detail/:id',
  name: 'Detail',
  component: Detail
},
```

注意，`params`传参时，如果没有在路由中定义参数，也是可以传过去的，同时也能接收到，但是一旦刷新页面，这个参数就不存在了。这对于需要依赖参数进行某些操作的行为是行不通的，因为你总不可能要求用户不能刷新页面吧。 例如：

```js
// 定义的路由中，只定义一个id参数
{
    path: 'detail/:id',
    name: 'Detail',
    components: Detail
}

// template中的路由传参，
// 传了一个id参数和一个token参数
// id是在路由中已经定义的参数，而token没有定义
<router-link :to="{name: 'Detail', params: { id: 1, token: '123456' }}">前往Detail页面</router-link>

// 在详情页接收
created () {
    // 以下都可以正常获取到
    // 但是页面刷新后，id依然可以获取，而token此时就不存在了
    const id = this.$route.params.id;
    const token = this.$route.params.token;
}
```

## 本地开发环境请求服务器接口跨域的问题

`Access-Control-Allow-Origin` ... `not allowed access`

```js
proxyTable: {
      '/api': {
        target: 'http://xxxxxx.com', // 接口的域名
        // secure: false,  // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': ''
        }
      }
    },
```

## 定时器问题

### 方法一

- 定义

```js
data() {
    return {
        timer: null  // 定时器名称
    }
},
```

- 使用

```js
this.timer = (() => {
    // 某些操作
}, 1000)
```

- 清除

```js
beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
}
```

### 方法二

该方法是通过`$once`这个事件侦听器器在定义完定时器之后的位置来清除定时器

```js
const timer = setInterval(() =>{
    // 某些定时器操作
}, 500);
// 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
this.$once('hook:beforeDestroy', () => {
    clearInterval(timer);
})
```

## rem文件的导入问题

根据网页尺寸计算`html`的`font-size`大小

```js
;(function(c,d){var e=document.documentElement||document.body,a="orientationchange" in window?"orientationchange":"resize",b=function(){var f=e.clientWidth;e.style.fontSize=(f>=750)?"100px":100*(f/750)+"px"};b();c.addEventListener(a,b,false)})(window);
```

在`main.js`中，直接`import './config/rem'`导入即可。`import`的路径根据你的文件路径去填写

## 打包后生成很大的.map文件的问题

在`config/index.js`文件中，设置`productionSourceMap: false`,就可以不生成`.map`文件

## fastClick的300ms延迟解决方案

安装 `fastClick`:

```shell
cnpm install fastclick -S
```

- 在`main.js`中引入`fastClick`和初始化:

```js
import FastClick from 'fastclick'; // 引入插件
FastClick.attach(document.body); // 使用 fastclick
```

## 查看打包后各文件的体积

```js
npm run build --report // 直接运行，然后在浏览器打开http://127.0.0.1:8888/即可查看
```

记得运行的时候先把之前`npm run dev`开启的本地关掉

## 路由懒加载

- 非懒加载写法：

```js
import Index from '@/page/index/index';
export default new Router({  
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        }
    ]
})
```

- 路由懒加载写法

```js
export default new Router({
  routes: [
        {
            path: '/', 
            name: 'Index', 
            component: resolve => require(['@/view/index/index'], resolve) 
        }
  ]
})
```

## 开启gzip压缩代码

`spa`这种单页应用，首屏由于一次性加载所有资源，所有首屏加载速度很慢。解决这个问题非常有效的手段之一就是前后端开启`gizp`（其他还有缓存、路由懒加载等等）。`gizp`其实就是帮我们减少文件体积，能压缩到`30%`左右，即`100k`的文件`gizp`后大约只有`30k`。

`vue-cli`初始化的项目中，是默认有此配置的，只需要开启即可。但是需要先安装插件：

```js
cnpm i compression-webpack-plugin
```

然后在`config/index.js`中开启即可:

```js
build: {
    ………………
    productionGzip: true, // false不开启gizp，true开启
    ………………
}
```

现在打包的时候，除了会生成之前的文件，还是生成`.gz`结束的`gzip`过后的文件。具体实现就是如果客户端支持`gzip`，那么后台后返回`gzip`后的文件，如果不支持就返回正常没有`gzip`的文件。**注意：这里前端进行的打包时的`gzip`，但是还需要后台服务器的配置。配置是比较简单的，配置几行代码就可以了，一般这个操作可以叫运维小哥哥小姐姐去搞一下，没有运维的让后台去帮忙配置。

## CSS的scoped私有作用域和深度选择器

- 编译前：

```css
<style scoped>
.example {
  color: red;
}
</style>
```

- 编译后：

```css
<style>
.example[data-v-f3f3eg9] {
  color: red;
}
```

看完你肯定就会明白了，其实是在你写的组件的样式，添加了一个属性而已，这样就实现了所谓的私有作用域。但是也会有弊端，考虑到浏览器渲染各种 `CSS` 选择器的方式，当 `p { color: red }` 设置了作用域时 (即与特性选择器组合使用时) 会慢很多倍。如果你使用 `class` 或者 `id` 取而代之，比如 `.example { color: red }`，性能影响就会消除。所以，在你的样式里，进来避免直接使用标签，取而代之的你可以给标签起个`class`名。

如果你希望 `scoped` 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 `>>>` 操作符:

```css
<style scoped>
    .parent >>> .child { /* ... */ }
</style>
```

上述代码将会编译成：

```css
.parent[data-v-f3f3eg9] .child {
    /* ... */
}
```

而对于`less`或者`sass`等预编译，是不支持`>>>`操作符的，可以使用`/deep/`来替换`>>>`操作符，例如：

```css
.parent /deep/ .child { /* ... */ }
```
