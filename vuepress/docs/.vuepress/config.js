module.exports = {
  base: '/vue-press/',
  title: 'Awoke',
  description: 'some notes',
  search: false,
  searchMaxSuggestions: 10,
  lastUpdated: 'Last Updated', // string | boolean
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  themeConfig: {
    nav: [
      // { text: '笔记', link: '/home/' },
      { text: 'Vue', link: '/vue/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Standard', link: '/standard/' },
      // { text: 'Guide', link: '/guide/' },
      {
        text: 'Projects',
        items: [
          { text: 'Qunar (去哪儿, Vue)', link: 'http://qunar.gaodaqian.com' },
        ]
      },
      { text: 'Nav', link: 'http://nav.gaodaqian.com' },
      { text: 'Blogs', link: 'http://blog.gaodaqian.com' },
      { text: 'GitHub', link: 'https://github.com/awokelee' },
    ],
    sidebar: {
      '/home/': [
        '',     /* /foo/ */
        'promise',
        'mac-soft',
        '浏览器兼容性问题',
      ],
      // '/guide/': [
        // '',
        // 'algorithm',
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
      // ],
      // vue
      '/vue/': [
        '',
        '00_node安装',
        '00_vue-cli',
        '01_项目目录',
        '02_babel',
        '02_favicon',
        '02_meta',
        '03_reset',
        '04_border',
        '05_fastclick',
        '06_stylus',
        '07_iconfont',
        '07_vux',
        '08_axios',
        '08_axios-await',
        '08_axios-promise',
        '09_filter',
        '10_proxyTable',
        '11_nginx',
        '12_sourceMap',
        '13_alias',
        '14_手机访问',
        '15_session',
        '16_登录',
        '17_权限',
        '18_router',
        '19_父子组件通信',
        '20_bus',
        '21_vuex',
      ],
      // 遇到的问题
      '/notes/': [
        '',
        '00_解决npm_run_build卡住问题',
        '01_GitHub超时',
        '02_GitHub设置代理',
        '03_vue部署nginx404',
        '04_nginx配置vue跨域',
        '05_vue滚动条位置',
      ],
      // 规范
      '/standard/': [
        '',
        {
          title:'中文技术文档的写作规范', 
          children: [
          '00_中文技术文档的写作规范-阮一峰/00_标题',
          '00_中文技术文档的写作规范-阮一峰/01_文本',
          '00_中文技术文档的写作规范-阮一峰/02_段落',
          '00_中文技术文档的写作规范-阮一峰/03_数值',
          '00_中文技术文档的写作规范-阮一峰/04_文档体系',
          '00_中文技术文档的写作规范-阮一峰/05_marks',
          '00_中文技术文档的写作规范-阮一峰/06_参考链接',
        ]},
        '01_commit-message规范',
        '02_文件名规范',
        '03_文件夹命名参考',
        '04_HTML命名参考',
        '05_CSS命名规范',
        '06_CSS命名参考',
        '07_JS函数方法常用的动词',
        '08_图片命名参考',
        '09_图片的命名规范及脚本文件和动态文件命名规范',
        '10_代码review检查点',
      ],
      '/': [
        '',
        'contact',
        'about'
      ]
    }
  }
}
