module.exports = {
  base: '/vue-press/',
  title: 'Vue 简单教程',
  description: 'Just playing around',
  search: false,
  searchMaxSuggestions: 10,
  lastUpdated: 'Last Updated', // string | boolean
  head: [
    ['link', {
      rel: 'icon',
      href: `/logo.png`
    }],
  ],
  themeConfig: {
    sidebar: {
      '/vue/': [
        '',
        '00_vue-cli',
        '01_项目目录',
        '02_meta',
        '02_favicon',
        '03_reset',
        '04_border',
        '05_fastclick',
        '06_stylus',
        '07_iconfont',
        '08_axios',
        '08_axios_promise',
        '08_axios_await',
      ],
      '/': [
        '',
        'contact',
        'about'
      ]
    }
  }
}