// const home = require('./category/home')

module.exports = {
  // base: '/vue-press/',
  title: '高大倩',
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
    { text: 'Web 导航', link: 'http://nav.gaodaqian.com' },
    { text: 'GitHub', link: 'https://github.com/gaodaqian' },
  ]
}

function getSidebar() {
  return {
    '/vue/':[
      {
        title: 'Vue 前置知识',
        collapsable: false,
        children: [
          // '00_给后端介绍前端',
          '00_node-安装',
          '00_vue-cli',
          '01_dir_项目目录',
        ]
      },
      {
        title: 'Vue 项目初始化相关',
        collapsable: false,
        children: [
          '02_babel',
          '02_favicon',
          '02_meta',
          '03_reset',
          '04_border',
          '05_fastclick',
          '06_less',
          '06_stylus',
          '06_Scoped-CSS',
          '07_iconfont',
          '07_elementui',
          '07_vux',
          '23_vue使用swiper',
        ]
      },
      {
        title: 'Vue 开发相关',
        collapsable: false,
        children: [
          '13_alias',
          '08_axios请求本地json',
          '14_phone_手机访问',
          '08_vconsole',
          '10_proxyTable',
          '24_nginx配置vue跨域',
          '20_视图不更新',
          '26_vue滚动条位置',
          '28_vue引入css报错',
          '29_编辑器stylus设置',
        ]
      },
      {
        title: 'Vue 生产相关',
        collapsable: false,
        children: [
          '08_设置chunk名称',
          '27_vue项目打包配置工程路径',
          '22_解决npm_run_build卡住问题',
          '32_发布脚本',
          '30_生产环境配置',
          '31_nginx发布配置',
          '11_nginx',
          '25_vue部署nginx404',
          '20_生产环境JSON404',
          '19_开启GZIP',
        ]
      },
      {
        title: 'Vue 优化(待更新)',
        collapsable: false,
        children: [
          
        ]
      },
      {
        title: 'Vue 其他项目常用',
        collapsable: false,
        children: [
          '08_图片',
          '08_axios',
          '08_axios-promise',
          '08_axios-await',
          '09_filter',
          '12_sourceMap',
          '15_session',
          '16_login_登录',
          '17_permission_权限',
          '18_router',
          '19_msg_父子组件通信',
          '20_bus',
          '21_vuex',
        ]
      },
    ],
    '/': [ '', 'contact', 'about']
  }
}