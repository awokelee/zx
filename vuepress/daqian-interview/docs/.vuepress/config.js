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
      'Event-Loop事件循环',
      'vue相关',
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