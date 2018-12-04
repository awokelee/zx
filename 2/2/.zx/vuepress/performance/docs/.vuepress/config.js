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
    { text: 'Vue 相关', link: 'http://gaodaqian.com' },
  ]
}

function getSidebar() {
  return {
    '/performance/': [
      '',
      '00_资源的合并与压缩',
      '01_图片相关的优化',
      '02_CSS和JS的装载与执行',
      '03_懒加载和预加载',
      '04_重绘与回流',
      '05_浏览器存储',
      '06_浏览器缓存',
      '07_服务端性能优化',
    ],
    '/': [ '', 'contact', 'about']
  }
}