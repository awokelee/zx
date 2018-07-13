module.exports = {
  base: '/vue-press/',
  title: 'Awoke',
  description: 'Just playing around',
  search: false,
  searchMaxSuggestions: 10,
  lastUpdated: 'Last Updated', // string | boolean
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/home/' },
      {
        text: '项目',
        items: [
          { text: 'Qunar', link: 'http://qunar.gaodaqian.com' },
        ]
      },
      { text: '导航', link: 'http://nav.gaodaqian.com' },
      { text: '博客', link: 'http://blog.gaodaqian.com' },
      { text: 'GitHub', link: 'https://github.com/awokelee' },
    ],
    sidebar: {
      '/home/': [
        'promise',
        'commit-message',
        'mac-soft',
        '浏览器兼容性问题',
        'Vue 项目里戳中你痛点的问题及解决办法',
        'vue路由设置history模式在nginx下404'
      ],
      // fallback
      '/': [
        '', 
        'contact',
        'about'    
      ] 
    }
  }
}