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
    '/security/': [
      '',
      '00_xss',
      '01_xss攻击分类',
      '02_xss防御',
      '03_CSP',
      '04_PHP中防御XSS',
      '05_CSRF',
      '06_CSRF攻击防御',
      '07_cookies',
      '08_点击劫持',
      '09_HTTP传输窃听',
      '10_HTTPS',
      '11_密码安全',
      '12_SQL注入',
      '13_上传',
      '14_社工',
      '15_OAuth思想',
      '16_其他安全问题',
      '17_总结',
    ],
    '/': [ '', 'contact', 'about']
  }
}