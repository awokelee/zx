const mpvue = require('./category/mpvue')
const nginx = require('./category/nginx')
const EffectiveJavaScript = require('./category/EffectiveJavaScript')
const notes = require('./category/notes')
const standard = require('./category/standard')
const booklet = require('./category/booklet')
const vue = require('./category/vue')
const react = require('./category/react')
const smarketing = require('./category/smarketing')
const protocol = require('./category/protocol')
const security = require('./category/security')
const interview = require('./category/interview')
const home = require('./category/home')
const vueAdvanced = require('./category/vueAdvanced')
const feInterviewSenior = require('./category/feInterviewSenior')

module.exports = {
  // base: '/vue-press/',
  title: 'Awoke',
  description: 'some notes',
  search: false,
  searchMaxSuggestions: 10,
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      {
        text: 'Vue',
        items: [
          { text: 'Vue 零基础搭建项目', link: '/vue/' },
          { text: 'Vue 项目中遇到的问题', link: '/notes/' },
          { text: 'Vue 核心技术(Vue+Vue-Router+Vuex+SSR)', link: '/vue-advanced/' },
          { text: 'Vue 最佳实践', link: '/vue-best-practice/' },
        ]
      },
      { text: 'React', link: '/react/' },
      { text: 'Nginx', link: '/nginx/' },
      { text: '小程序', link: '/mpvue/' },
      {
        text: 'FE-必知必会',
        items: [
          // { text: '初级', link: '/fe-interview-junior/' },
          { text: '前端跳槽面试必备技巧', link: '/fe-interview-skill/' },
          { text: '揭秘一线互联网企业 前端JavaScript高级面试', link: '/fe-interview-senior/' },
          // { text: '饿了么 Node.js 面试', link: 'https://elemefe.github.io/node-interview/#/sections/zh-cn/' },
        ]
      },
      // { text: 'Protocol', link: '/protocol/' },
      // { text: 'Security', link: '/security/' },
      { text: 'Nav', link: 'http://nav.gaodaqian.com' },
      {
        text: 'Projects',
        items: [
          { text: 'Books (前端书籍推荐, 小程序 mpvue + Koa + HTTPS + Nginx)', link: '/mpvue/' },
          { text: 'JianShu (简书, React + Redux)', link: 'http://jianshu.gaodaqian.com' },
          { text: 'ALC (爱理财, React)', link: 'https://bcapp.alc.com.cn/mapp/' },
          { text: 'Qunar (去哪儿, Vue + Vuex)', link: 'http://qunar.gaodaqian.com' },
          { text: 'Smarketing(智能营销系统, Vue + Vuex)', link: '/smarketing/' },
          { text: 'ALC (爱理财, AngularJS + Ionic)', link: 'https://bcapp.alc.com.cn/bcapph5v19/#/balanceManagement' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/awokelee' },
      {
        text: '.',
        items: [
          { text: 'Blogs', link: 'http://blog.gaodaqian.com' },
          { text: 'JavaScript', link: '/Effective-JavaScript/' },
          { text: '规范', link: '/standard/' },
          { text: '小册', link: '/booklet/' },
          { text: '基础', link: '/interview/' },
          { text: '其他', link: '/home/' },
        ]
      },
    ],
    sidebar: {
      '/home/': home.getList(),
      '/nginx/': nginx.getList(),
      '/mpvue/': mpvue.getList(),
      '/Effective-JavaScript/': EffectiveJavaScript.getList(),
      '/smarketing/': smarketing.getList(),
      '/react/': react.getList(),
      '/vue/': vue.getList(),
      '/notes/': notes.getList(),
      '/protocol/': protocol.getList(),
      '/security/': security.getList(),
      '/interview/': interview.getList(),
      '/standard/': standard.getList(),
      '/booklet/': booklet.getList(),
      '/vue-advanced/': vueAdvanced.getList(),
      '/vue-best-practice/': [
        '',
        '数组',
        'getPrototypeOf',
        '滚动条样式',
        {
          title: 'Vuex',
          collapsable: true,
          children: [
            './vuex/index.js',
            './vuex/state.js',
            './vuex/getters.js',
            './vuex/mutation-types.js',
            './vuex/mutations.js',
            './vuex/actions.js',
            './vuex/actions.js',
          ]
        },
      ],
      '/fe-interview-junior/': [
        {
          title: 'HTML',
          collapsable: true,
          children: [
            'html'
          ]
        },
        {
          title: 'CSS',
          collapsable: true,
          children: [
            'css'
          ]
        },
        {
          title: 'JS基础',
          collapsable: true,
          children: [
            'js',
            'Javascript-Interview',
            'Frontend-Interview'
          ]
        },
        {
          title: 'React',
          collapsable: true,
          children: [
            'React-Interview'
          ]
        },
      ],
      '/fe-interview-senior/': feInterviewSenior.getList(),
      '/fe-interview-skill/': [
        {
          title: '页面布局',
          collapsable: false,
          children: [
            '01_三栏布局',
            '02_float方案',
            '03_absolute方案',
            '04_flex方案',
            '05_table方案',
            '06_grid方案',
            '07_每个方案优缺点',
            '08_高度不确定下的情况会怎样',
            '09_页面布局的变通',
          ]
        },
        {
          title: 'CSS 盒模型',
          collapsable: false,
          children: [
            '10_标准模型和IE模型',
            '11_css如何设置这两种模型',
            '12_js如何设置获取盒模型对应的宽和高',
            '13_根据盒模型解释边距重叠',
            '14_BFC边距重叠解决方案',
            '15_BFC原理',
            '16_如何创建BFC',
            '17_BFC使用场景',
          ]
        },
        {
          title: 'DOM 事件类',
          collapsable: false,
          children: [
            '18_事件级别',
            '19_事件模型',
            '20_事件流',
            '21_DOM事件捕获的具体流程',
            '22_ 获取html标签',
            '23_Event对象的常见应用',
            '24_自定义事件',
            '25_捕获演示',
            '26_自定义事件演示',
          ]
        },
        {
          title: 'HTTP 协议类',
          collapsable: false,
          children: [
            '27_HTTP协议的主要特点',
            '28_HTTP报文的组成部分',
            '29_HTTP方法',
            '30_POST和GET 的区别',
            '31_HTTP状态码',
            '32_HTTP持久连接',
            '33_管线化',
          ]
        },
        {
          title: '原型链类',
          collapsable: false,
          children: [
            '34_创建对象几种方法',
            '35_原型、构造函数、实例、原型链',
            '36_instanceof原理',
            '37_new运算符',
          ]
        },
        {
          title: '面向对象类',
          collapsable: false,
          children: [
            '38_类的声明和实例',
            '39_借助构造函数实现继承',
            '40_借助原型链实现继承',
            '41_组合方式实现继承',
            '42_组合继承的优化1',
            '43_组合继承的优化2',
          ]
        },
        {
          title: '通信类',
          collapsable: false,
          children: [
            '44_同源策略及限制',
            '45_前后端如何通信',
            '46_如何创建Ajax',
            '47_跨域通信的几种方式',
            '48_jsonp处理跨域',
            '49_hash处理跨域',
            '50_postMessage处理跨域',
            '51_websocket处理跨域',
            '52_cors处理跨域'
          ]
        },
        {
          title: '前端安全类',
          collapsable: false,
          children: [
            '53_csrf',
            '54_xss'
          ]
        },
        {
          title: '算法类',
          collapsable: false,
          children: [
            '55_排序',
            '56_冒泡排序',
            '57_选择排序',
            '59_归并排序',
            '58_插入排序',
            '60_希尔排序',
          ]
        },
      ],
      '/': [ '', 'contact', 'about']
    }
  }
}





