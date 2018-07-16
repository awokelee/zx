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
      { text: '笔记', link: '/home/' },
      { text: 'Guide', link: '/guide/' },
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
        '',     /* /foo/ */
        'promise',
        'commit-message',
        'mac-soft',
        '浏览器兼容性问题',
        'Vue 项目里戳中你痛点的问题及解决办法',
        'vue路由设置history模式在nginx下404',
      ],
      '/guide/': [
        '',
        'algorithm',
        // 'browser-ch',
        // 'dataStruct-zh',
        // 'algorithm-ch',
        // 'framework-zh',
        // 'git-zh',
        // 'JS-ch',
        // 'Network-zh',
        // 'performance-ch',
        // 'react-zh',
        // 'safety-cn',
        // 'vue-zh',
        // 'How-to-use-your-time-correctly',
      ],
      // 回退(fallback)侧边栏配置
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}