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
const feInterviewSkill = require('./category/feInterviewSkill')

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
          { text: 'Music (音乐, Vue + Vuex)', link: 'http://music.gaodaqian.com' },
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
      '/fe-interview-skill/': feInterviewSkill.getList(),
      '/': [ '', 'contact', 'about']
    }
  }
}





