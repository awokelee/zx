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
    '/webpack4/':[
      '0webpack 的概念和基础使用',
      '1搭建基本的前端开发环境',
      '2webpack 如何解析代码模块路径',
      '3配置 loader',
      '4使用 plugin',
      '5更好地使用 webpack-dev-server',
      '6开发和生产环境的构建配置差异',
      '7用 HMR 提高开发效率',
      '8优化前端资源加载 1 - 图片加载优化和代码压缩',
      '9优化前端资源加载 2 - 分离代码文件',
      '10优化前端资源加载 3 - 进一步控制 JS 大小',
      '11提升 webpack 的构建速度',
      '12探究 webpack 内部工作流程',
      '13创建自己的 loader',
      '14创建自己的 plugin',
      '15总结',
      ],
    '/': [ '', 'contact', 'about']
  }
}