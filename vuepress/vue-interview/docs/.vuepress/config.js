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
    { text: '面试', link: '/vue/' },
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
    '/': [ '', 'contact', 'about']
  }
}