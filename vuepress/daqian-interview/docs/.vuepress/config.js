// const home = require('./category/home')

module.exports = {
  // base: '/vue-press/',
  title: '大倩',
  description: '快复习',
  search: false,
  sidebarDepth: 2,
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
    nav: getNavList(),
    sidebar: getSidebar()
  }
}

function getNavList() {
  return [
    { text: 'Vue 相关', link: 'http://gaodaqian.com' },
  ]
}

function getSidebar() {
  return {
    '/interview/':[
      '主观题',
      'JavaScript',
      'CSS',
      'Event-Loop事件循环',
      'hiper性能分析',
      '如何计算白屏时间',
      '三个框架性能对比',
      'vue',
      'vue相关',
      'v-model',
      'vue-router',
      'vue-auth',
      'vue-router-history',
      'router-view',
      'prerender',
      '骨架屏',
      'pwa',
      '多页应用',
      'vue-ssr',
      'axios',
      'amd-umd',
      'webpack',
      'load-more',
      'fiddler抓包',
      '原型',
      'reduce',
      '浅拷贝与深拷贝',
      'this',
      '闭包',
      'new',
      '内存泄漏',
      '垃圾回收',
      '前端测试',
      /* {
        title: 'Vue 相关',
        collapsable: false,
        children: [
          'vue相关',
        ]
      }, */
    ],
    '/': [ '', 'contact', 'about']
  }
}