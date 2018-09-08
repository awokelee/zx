const mpvue = require('./category/mpvue')
const nginx = require('./category/nginx')
const EffectiveJavaScript = require('./category/EffectiveJavaScript')
const notes = require('./category/notes')
const standard = require('./category/standard')
const booklet = require('./category/booklet')
const vue = require('./category/vue')
const react = require('./category/react')
const smarketing = require('./category/smarketing')
const node = require('./category/node')
const protocol = require('./category/protocol')
const security = require('./category/security')
const interview = require('./category/interview')
const code = require('./category/code')
const home = require('./category/home')
const vueAdvanced = require('./category/vueAdvanced')

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
      { text: '面试', link: '/fe-interview/' },
      // { text: 'Node', link: '/node/' },
      // { text: 'Protocol', link: '/protocol/' },
      // { text: 'Security', link: '/security/' },
      // { text: 'Code', link: '/code/' },
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
      '/node/': node.getList(),
      '/protocol/': protocol.getList(),
      '/security/': security.getList(),
      '/interview/': interview.getList(),
      '/code/': code.getList(),
      '/standard/': standard.getList(),
      '/booklet/': booklet.getList(),
      '/vue-advanced/': vueAdvanced.getList(),
      '/vue-best-practice/': [
        '',
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
          ]
        },
      ],
      '/fe-interview/': [
        {
          title: '高级',
          collapsable: true,
          children: [
            './senior/00_require-exports',
            './senior/01_import-export',
            './senior/02_AMD-CMD',
            './senior/03_babel开发环境配置',
            './senior/04_rollup',
            './senior/05_js构造函数和class',
            './senior/06_js继承',
            './senior/08_zepto和jquery原型',
            './senior/09_单线程和异步',
            './senior/10_event-loop',
            './senior/11_jQuery的deferred',
            './senior/12_promise',
            './senior/13_async-await',
            './senior/14_virtual-dom',
            './senior/15_snabbdom',
            './senior/16_diff算法',
          ]
        },
      ],
      '/': [ '', 'contact', 'about']
    }
  }
}