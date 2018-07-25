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
      { text: 'Booklet', link: '/booklet/' },
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
        '07_elementui',
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
        '06_vue项目打包配置工程路径',
        '07_动态favicon',
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
      // 小册
      '/booklet/': [
        '',
       {
          title:'npm script 前端工作流', 
          children: [
          './用npm-script打造超溜的前端工作流/00_为什么选择npm_script',
          './用npm-script打造超溜的前端工作流/01_入门篇_创建并运行npm-script命令',
          './用npm-script打造超溜的前端工作流/02_入门篇_运行多个npm-script的各种姿势',
          './用npm-script打造超溜的前端工作流/03_入门篇_给npm-script传递参数和添加注释',
          './用npm-script打造超溜的前端工作流/04_进阶篇_使用npm-script的钩子',
          './用npm-script打造超溜的前端工作流/05_进阶篇_在npm-script中使用环境变量',
          './用npm-script打造超溜的前端工作流/06_进阶篇_实现npm-script命令自动补全',
          './用npm-script打造超溜的前端工作流/07_高阶篇_实现npm-script跨平台兼容',
          './用npm-script打造超溜的前端工作流/08_高阶篇_把庞大的npm-script拆到单独文件中',
          './用npm-script打造超溜的前端工作流/09_高阶篇_用nodejs脚本替代复杂的npm-script',
          './用npm-script打造超溜的前端工作流/10_实战篇_监听文件变化并自动运行npm-script',
          './用npm-script打造超溜的前端工作流/11_实战篇_结合live-reload实现自动刷新',
          './用npm-script打造超溜的前端工作流/12_实战篇_在git-hooks中运行npm-script',
          './用npm-script打造超溜的前端工作流/13_实战篇_用npm-script实现构建流水线',
          './用npm-script打造超溜的前端工作流/14_实战篇_用npm-script实现服务自动化运维',
        ]},
        {
          title:'大厂 UI 开发实战手册', 
          children: [
          './大厂UI开发实战手册/0_大厂UI开发概述',
          './大厂UI开发实战手册/1基础页面开发',
          './大厂UI开发实战手册/2响应式页面开发',
          './大厂UI开发实战手册/3滑屏应用开发',
          './大厂UI开发实战手册/4动效开发 1：让它动起来',
          './大厂UI开发实战手册/5动效开发 2：聊一聊 3D',
          './大厂UI开发实战手册/6动效开发 3：补间动画',
          './大厂UI开发实战手册/7动效开发 4：逐帧动画',
          './大厂UI开发实战手册/8动效开发 5：SVG 动画',
          './大厂UI开发实战手册/9动效开发 6：动效之效',
          './大厂UI开发实战手册/10总结',
        ]},
        {
          title:'Git 原理详解及实用指南', 
          children: [
          './Git原理详解及实用指南/0什么是版本控制系统（VCS）',
          './Git原理详解及实用指南/1什么是分布式版本控制系统（DVCS)',
          './Git原理详解及实用指南/2上手 1：新公司用 Git 管理代码，怎么快速上手？',
          './Git原理详解及实用指南/3上手 2：团队工作的基本工作模型',
          './Git原理详解及实用指南/4进阶 1：HEAD、master 与 branch',
          './Git原理详解及实用指南/5进阶 2：push 的本质',
          './Git原理详解及实用指南/6进阶 3：merge：合并 commits',
          './Git原理详解及实用指南/7进阶 4：Feature Branching：最流行的工作流',
          './Git原理详解及实用指南/8进阶 5：关于 add',
          './Git原理详解及实用指南/9进阶 6：看看我都改了什么',
          './Git原理详解及实用指南/10高级 1：不喜欢 merge 的分叉？用 rebase 吧',
          './Git原理详解及实用指南/11高级 2：刚刚提交的代码，发现写错了怎么办？',
          './Git原理详解及实用指南/12高级 3：写错的不是最新的提交，而是倒数第二个？',
          './Git原理详解及实用指南/13高级 4：比错还错，想直接丢弃刚写的提交？',
          './Git原理详解及实用指南/14高级 5：想丢弃的也不是最新的提交？',
          './Git原理详解及实用指南/15高级 6：代码已经 push 上去了才发现写错？',
          './Git原理详解及实用指南/16高级 7：reset 的本质——不止可以撤销提交',
          './Git原理详解及实用指南/17高级 8：checkout 的本质',
          './Git原理详解及实用指南/18高级 9：紧急情况：「立即给我打个包，现在马上！」',
          './Git原理详解及实用指南/19高级 10：branch 删过了才想起来有用？',
          './Git原理详解及实用指南/20额外说点：.gitignore——排除不想被管理的文件和目录',
          './Git原理详解及实用指南/21总结',
        ]},
        {
          title:'剖析 Vue.js 内部运行机制', 
          children: [
          './剖析Vue.js内部运行机制/0_Vue.js运行机制全局概览',
          './剖析Vue.js内部运行机制/1_响应式系统的基本原理',
          './剖析Vue.js内部运行机制/2_响应式系统的依赖收集追踪原理',
          './剖析Vue.js内部运行机制/3_实现VirtualDOM下的一个VNode节点',
          './剖析Vue.js内部运行机制/4_template模板是怎样通过Compile编译的',
          './剖析Vue.js内部运行机制/5_数据状态更新时的差异diff及patch机制',
          './剖析Vue.js内部运行机制/6_批量异步更新策略及nextTick原理',
          './剖析Vue.js内部运行机制/7_Vuex状态管理的工作原理',
          './剖析Vue.js内部运行机制/8_总结_常见问题解答',
        ]},
        {
          title:'Web 前端面试指南', 
          children: [
          './Web前端面试指南与高频考题解析/0准备：简历编写和面试前准备',
          './Web前端面试指南与高频考题解析/1一面 1：ES 基础知识点与高频考题解析',
          './Web前端面试指南与高频考题解析/2一面 2：JS-Web-API 知识点与高频考题解析',
          './Web前端面试指南与高频考题解析/3一面 3：CSS-HTML 知识点与高频考题解析',
          './Web前端面试指南与高频考题解析/4一面 4：从容应对算法题目',
          './Web前端面试指南与高频考题解析/5一面 5：浏览器相关知识点与高频考题解析',
          './Web前端面试指南与高频考题解析/6一面 6：开发环境相关知识点与高频考题解析',
          './Web前端面试指南与高频考题解析/7二面 1：如何回答常见的软技能问题',
          './Web前端面试指南与高频考题解析/8二面 2：如何介绍项目及应对项目细节追问',
          './Web前端面试指南与高频考题解析/9HR 面：谈钱不伤感情',
          './Web前端面试指南与高频考题解析/10其他：面试注意事项',
          './Web前端面试指南与高频考题解析/11总结与补充说明',
        ]},
      ],
      '/': [
        '',
        'contact',
        'about'
      ]
    }
  }
}
