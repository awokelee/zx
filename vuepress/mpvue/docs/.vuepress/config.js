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
    '/mpvue/':[
      {
        title: 'mpvue 开发小程序基础',
        collapsable: false,
        children: [
          '00_微信开发者工具',
          '01_小程序目录介绍',
          '03_为什么用vuejs',
          // '05_koa2入门',
          // '06_koa_router',
          '04_mpvue介绍',
          '07_本地开发环境搭建',
          '08_wafer2_client_sdk',
          '09_授权获取用户信息',
          '10_使用sass',
          '10_下拉刷新设置标题',
          // '99_遇到的问题'
        ]
      },
      {
        title: '阿里云部署小程序服务端',
        collapsable: false,
        children: [
          '11_客户端上传代码及审核',
          '11_新建数据库',
          '12_navicat远程操作数据库',
          '13_nodejs环境搭建',
          '17_pm2开启node服务',
          '14_https和ca证书',
          '16_配置nginx拦截请求',
          '15_小程序访问阿里云数据库',
        ]
      }
    ],
    '/': [ '', 'contact', 'about']
  }
}