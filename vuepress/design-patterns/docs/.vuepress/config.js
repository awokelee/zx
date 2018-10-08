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
    { text: 'Vue 相关', link: 'http://www.gaodaqian.com' },
  ]
}

function getSidebar() {
  return {
    '/design-patterns/': [
      {
        title: '面向对象',
        collapsable: false,
        children: [
          '00_类',
          '01_继承',
          '01_封装',
          '01_多态',
        ]
      },
      {
        title: '设计模式基础',
        collapsable: false,
        children: [
          '02_SOLID五大设计原则',
          '03_设计模式分类',
          '04_面试真题',
        ]
      },
      {
        title: '常用的设计模式',
        collapsable: false,
        children: [
          '05_工厂模式',
          '06_单例模式',
          '07_适配器模式',
          '08_装饰器模式',
          '09_代理模式',
          '10_外观模式',
          '11_观察者模式',
          '12_迭代器模式',
          '13_状态模式',
        ]
      },
      {
        title: '其他设计模式',
        collapsable: false,
        children: [
          '14_原型模式',
          '15_桥接模式',
          '16_组合模式',
          '17_享元模式',
          '18_策略模式',
          '19_模版方法模式',
          '20_职责链模式',
          '21_命令模式',
          '22_备忘录模式',
          '23_中介者模式',
          '24_访问者模式',
          '25_解释器模式',
        ]
      },
      {
        title: '综合应用',
        collapsable: false,
        children: [
          '26_购物车',
        ]
      },
    ],
    '/': [ '', 'contact', 'about']
  }
}