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
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'Nginx', link: '/nginx/' },
      { text: 'Vue 进阶', link: '/vue-advanced/' },
      { text: '小程序', link: '/mpvue/' },
      // { text: 'Node', link: '/node/' },
      // { text: 'Protocol', link: '/protocol/' },
      // { text: 'Security', link: '/security/' },
      // { text: 'Code', link: '/code/' },
      { text: 'Nav', link: 'http://nav.gaodaqian.com' },
      {
        text: 'Projects',
        items: [
          { text: 'JianShu (简书, React)', link: 'http://jianshu.gaodaqian.com' },
          { text: 'ALC (爱理财, React)', link: 'https://bcapp.alc.com.cn/mapp/' },
          { text: 'Qunar (去哪儿, Vue)', link: 'http://qunar.gaodaqian.com' },
          { text: 'Smarketing(智能营销系统, Vue)', link: '/smarketing/' },
          { text: 'ALC (爱理财, AngularJS)', link: 'https://bcapp.alc.com.cn/bcapph5v19/#/balanceManagement' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/awokelee' },
      {
        text: '.',
        items: [
          { text: '遇到的问题', link: '/notes/' },
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
      '/vue-advanced/': [
        {
          title: 'Vue 进阶基础',
          collapsable: false,
          children: [
            '00_vue实例',
            '01_vue生命周期',
            '02_数据绑定',
            '03_computed和watch',
            '04_vue的原生指令',
          ]
        },
        {
          title: 'Vue 组件相关',
          collapsable: false,
          children: [
            '05_定义组件',
            '06_组件继承',
            '07_双向绑定',
            '08_高级属性',
            '09_render函数',
          ]
        },
        {
          title: 'Vue-router 路由相关',
          collapsable: false,
          children: [
            '10_router集成',
            '11_router配置',
            '12_router参数传递',
            '13_router高级'
          ]
        },
        {
          title: 'Vuex 相关',
          collapsable: false,
          children: [
            '14_vuex集成',
            '15_state和getters',
            '16_mutation和action',
            '17_vuex模块',
            '18_vuex热更替',
            '19_vuex其他api',
          ]
        },
      ],
      '/': [ '', 'contact', 'about']
    }
  }
}