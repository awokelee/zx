// const home = require('./category/home')

module.exports = {
  // base: '/vue-press/',
  title: 'Awoke',
  description: 'some notes',
  search: false,
  sidebarDepth: 2,
  searchMaxSuggestions: 10,
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: true,
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: getNavList(),
    sidebar: getSidebar()
  }
}

function getNavList() {
  return [{
      text: '面试',
      link: '/vue/'
    },
    {
      text: '面试2',
      link: '/vue2/'
    },
  ]
}

function getSidebar() {
  return {
    '/vue/': [
      'Event-Loop事件循环',
      {
        title: '基础',
        collapsable: false,
        children: [
          '1-1_vue-cli工程中每个文件夹和文件的用处',
        ]
      },
    ],
    '/vue2/': [
      '2.0 vue-cli 工程技术集合介绍',
      {
        title: '四、vue.js 核心知识点高频试题一',
        collapsable: false,
        children: [
          '4.1 对于Vue是一套渐进式框架的理解',
          '4.2 请说出vue几种常用的指令',
          '4.3 请问 v-if 和 v-show 有什么区别',
          '4.4 vue常用的修饰符',
          '4.5 v-on可以监听多个方法吗',
          '4.6 vue中 key 值的作用',
          '4.7 vue-cli工程升级vue版本',
          '4.8 vue事件中如何使用event对象',
          '4.9 nextTick的使用',
          '4.10 Vue 组件 data 为什么必须是函数'
        ]
      },
      {
        title: '五、vue.js 核心知识点高频试题二',
        collapsable: false,
        children: [
          '5.1 vue中子组件调用父组件的方法',
          '5.2 vue中 keep-alive 组件的作用',
          '5.3 vue中编写可复用的组件',
          '5.4 vue生命周期有关的试题',
          '5.5 vue如何监听键盘事件中的按键',
          '5.6 vue更新数组时触发视图更新的方法',
        ]
      },
      {
        title: '六、vue.js 核心知识点高频试题三',
        collapsable: false,
        children: [
          '6.1 十个常用的自定义过滤器',
          '6.2 vue等单页面应用及其优缺点',
          '6.3 vue的计算属性',
          '6.4 vue提供的几种脚手架模板',
          '6.5 vue父组件向子组件中传递数据',
          '6.6 export、export default 和 import 区别 以及用法',
          '6.7 vue-cli开发环境使用全局常量',
          '6.8 vue-cli生产环境使用全局常量',
          '6.9 vue弹窗后如何禁止滚动条滚动',
          '6.10 计算属性的缓存和方法调用的区别',
          '6.11 vue-cli中自定义指令的使用'
        ]
      },
      {
        title: '七、vue-router 路由高频考题',
        collapsable: false,
        children: [
          '7.1 vue-router响应 路由参数 的变化',
          '7.2 完整的 vue-router 导航解析流程',
          '7.3 vue-router有哪几种导航钩子（ 导航守卫 ）',
          '7.4 vue-router的几种实例方法以及参数传递',
          '7.5 vue-router的动态路由匹配以及使用',
          '7.6 vue-router如何定义嵌套路由',
          '7.7 router-link组件及其属性',
          '7.8 vue-router实现路由懒加载（ 动态加载路由 ）',
          '7.9 vue-router路由的两种模式',
          '7.10  history路由模式与后台的配合',
        ]
      },
      {
        title: '八、vuex 状态管理高频试题',
        collapsable: false,
        children: [
          '8.1 什么是vuex',
          '8.2 使用vuex的核心概念',
          '8.3 vuex在vue-cli中的应用',
          '8.4 如何在组件中去使用vuex的值和方法',
          '8.5 在vuex中使用异步修改',
        ]
      },
      {
        title: '九、axios、fetch、ajax等请求高频试题',
        collapsable: false,
        children: [
          '9.1 Promise对象是什么',
          '9.2 axios、fetch与ajax有什么区别',
          '9.3 JS的同源策略和跨域问题',
          '9.4 如何解决跨域问题',
          '9.5 vue-cli中使用JSON数据模拟',
          '9.6 axios有哪些特点',
        ]
      },
      {
        title: '十、前端 UI 样式高频试题',
        collapsable: false,
        children: [
          '10.1 组件样式属性 scoped 问题及解决方法',
          '10.2 vue常用的UI组件库',
          '10.3 vue组件适配移动端【经典】',
          '10.4 移动端适配常用媒体查询源码',
          '10.5 垂直居中对齐',
          '10.6 vue-cli中如何使用背景图片',
          '10.7 使用表单禁用时移动端样式问题',
          '10.8 多种类型文本超出隐藏问题',
        ]
      },
      {
        title: '十一、vue 中常用功能实现与详解',
        collapsable: false,
        children: [
          '11.1 vue中如何实现tab切换功能',
          '11.2 利用keep-alive标签实现某个组件缓存功能',
          '11.3 vue中实现切换页面时为左滑出效果',
          '11.4 利用JS策略模式进行表单校验',
          '11.5 多种情景的数组去重',
          '11.6 vue实现调用拨打电话功能',
          '11.7 vue组件中使用定时器',
          '11.8 组件slot使用示例',
          '11.9 使用递归组件实现级联选择器',
          '11.10 使用递归组件实现树形控件',
          '11.11.1 实现一个表单自动聚焦的自定义指令',
          '11.11.2 实现一个可从外部关闭的下拉菜单',
          '11.11.3 实现一个实时时间转换指令v-time',
          '11.12 两种类型的循环单选选择、取消功能',
        ]
      },
      '12.0 vue中央事件总线的使用',
      '13.0 混合开发：vue工程与app交互',
      '14.0 vue开发命令的执行过程【拓展】',
      {
        title: '十五、vue-cli 工程打包后 .js 文件详解',
        collapsable: false,
        children: [
          '15.1 vue打包命令是什么',
          '15.2 vue打包后会生成哪些文件',
          '15.3 配置 vue 打包生成文件的路径',
          '15.4 vue如何优化首屏加载速度',
        ]
      },
      {
        title: '十六、MVVM设计模式高频试题',
        collapsable: false,
        children: [
          '16.1 MVC、MVP与MVVM模式',
          '16.2 MVC、MVP与MVVM的区别',
          '16.3 常见的实现MVVM几种方式',
          '16.4 Object.defineProperty()方法',
          '16.5 实现一个简单的双向数据绑定'
        ]
      },
      {
        title: '十七、实现一个自己的MVVM',
        collapsable: false,
        children: [
          '17.0 实现一个自己的MVVM',
          '17.1 效果示例',
          '17.2 思路分析',
          '17.3 Observer.js',
          '17.4 Watch.js',
          '17.5 Compile.js',
          '17.6 最终效果'
        ]
      },
      {
        title: '十八、vue-cli中的配置详解',
        collapsable: false,
        children: [
          '18.1 webpack的特点',
          '18.2 vue-cli中webpack的作用',
          '18.3 vue-loader的作用',
        ]
      },
      '19.0 剖析 Vue 内部运行机制',
      '20.0 剖析 vue-router 内部运行机制',
      '21.0 剖析 vuex 内部运行机制',
      '22.0 剖析 axios 内部运行机制',
      '23.0 发布一个 npm 资源包',
      '24.0 vue的服务器端渲染',
      '25.0 vue高版本的一些新特性的实践',
      '26.0 electron-vue',
      '27.0 资料分享'
    ],
    '/': ['', 'contact', 'about']
  }
}