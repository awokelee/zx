module.exports = {
  base: '/vue-press/',
  title: 'Awoke',
  description: 'some notes',
  search: false,
  searchMaxSuggestions: 10,
  editLinkText: 'Edit this page on GitHub',
  lastUpdated: true, // string | boolean
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'Nginx', link: '/nginx/' },
      { text: '小程序', link: '/mpvue/' },
      // { text: 'Node', link: '/node/' },
      // { text: 'Protocol', link: '/protocol/' },
      // { text: 'Security', link: '/security/' },
      // { text: 'Code', link: '/code/' },
      { text: 'Nav', link: 'http://nav.gaodaqian.com' },
      {
        text: 'Projects',
        items: [
          { text: 'JianShu (简书, React)', link: 'http://jianshu.gaodaqian.com' },
          { text: 'ALC (爱理财, React)', link: 'https://bcapp.alc.com.cn/mapp/' },
          { text: 'Qunar (去哪儿, Vue)', link: 'http://qunar.gaodaqian.com' },
          { text: 'Smarketing(智能营销系统, Vue)', link: '/smarketing/' },
          { text: 'ALC (爱理财, AngularJS)', link: 'https://bcapp.alc.com.cn/bcapph5v19/#/balanceManagement' },
        ]
      },
      { text: 'GitHub', link: 'https://github.com/awokelee' },
      {
        text: '.',
        items: [
          { text: '遇到的问题', link: '/notes/' },
          { text: 'Blogs', link: 'http://blog.gaodaqian.com' },
          { text: 'JavaScript', link: '/Effective-JavaScript/' },
          { text: '规范', link: '/standard/' },
          { text: '小册', link: '/booklet/' },
          { text: '基础', link: '/interview/' },
          { text: '其他', link: '/home/' },
        ]
      },
    ],
    sidebar: {
      '/home/': [
        '',
        'mac-soft',
        'vscode',
        'eslint',
        'securecrt',
        // 'promise',
        // '浏览器兼容性问题',
      ],
      '/nginx/': genNginxList(),
      '/mpvue/': genMpvueList(),
      '/Effective-JavaScript/': [
        '',
        '00_use-strict',
        '01_defer-async',
        '01_数据类型',
        '01_对象的引用',
        '01_number',
        '01_转Boolean',
        '01_转Number',
        '01_转String',
        '02_typeof',
        '03_instanceof',
        '04_double-equals',
        '05_执行上下文',
        '06_作用域链',
        '07_hosting',
        '08_this',
        '09_new',
        '10_闭包',
        '11_高阶函数',
        '12_proptotype',
        '13_call-apply-bind',
        '14_继承',
      ],
      '/smarketing/': [
        '',
        '00_营销系统代码目录'
      ],
      '/react/': [
        '',
        '00_react基础',
        '01_create-react-app',
        '02_create-react-app目录介绍',
        '02_create-react-app使用别名',
        '03_react定义组件',
        '04_jsx一些细节',
        '05_todolist',
        '06_16版本的setState',
        '07_父子组件传值',
        '08_todolist优化代码',
        '09_react调试工具',
        '10_propTypes和defaultProps',
        '11_props-state-render',
        '12_虚拟DOM',
        '13_虚拟dom中的diff算法',
        '14_ref的使用',
        '15_生命周期函数',
        '16_生命周期使用场景',
        '17_axios',
        '17_本地mock数据',
        '18_react动画',
        '19_react-transition-group实现动画',
        '22_antd-ui库使用',
        '22_create-react-app配置less',
        '27_ui组件和容器组件',
        '28_无状态组件',
        '20_redux介绍',
        '21_redux工作流程',
        '23_redux的store',
        '24_redux的action和reducer',
        '25_redux使用actionTypes拆分',
        '26_redux使用actionCreators创建action',
        // '29_redux异步获取数据',
        '30_redux-thunk中间件',
        '31_redux中间件介绍',
        '32_redux-saga',
        '33_react-redux',
        '34_styled-components',
        '35_styled-components使用',
        '36_styled-components使用iconfont',
        '37_redux的combineReducers及完整案例',
        '38_immutable',
        '39_redux-immutable',
        '40_react路由',
        '40_路由传参',
        '40_路由Redirect',
        '41_PureComponent',
        '42_react异步组件',
        '43_react项目上线',
      ],
      // vue
      '/vue/': [
        '',
        '00_给后端介绍前端',
        '00_node-安装',
        '00_vue-cli',
        '01_dir_项目目录',
        '02_babel',
        '02_favicon',
        '02_meta',
        '03_reset',
        '04_border',
        '05_fastclick',
        '06_stylus',
        '07_iconfont',
        '07_elementui',
        '07_vux',
        '08_axios',
        '08_axios-promise',
        '08_axios-await',
        '09_filter',
        '10_proxyTable',
        '11_nginx',
        '12_sourceMap',
        '13_alias',
        '14_phone_手机访问',
        '15_session',
        '16_login_登录',
        '17_permission_权限',
        '18_router',
        '19_msg_父子组件通信',
        '20_bus',
        '21_vuex',
      ],
      // 遇到的问题
      '/notes/': [
        '',
        '14_生产环境配置',
        '15_发布脚本',
        '16_nginx发布配置',
        '00_yarn和npm',
        '13_视图不更新',
        '08_vue引入css报错',
        '09_vue使用swiper',
        '03_vue部署nginx404',
        '04_nginx配置vue跨域',
        '00_解决npm_run_build卡住问题',
        '06_vue项目打包配置工程路径',
        '11_H5与NATIVE交互',
        '05_vue滚动条位置',
        '01_GitHub超时',
        '02_GitHub设置代理',
        '07_动态favicon',
        '10_html打开乱码',
        '17_编辑器stylus设置',
        '18_jsonp',
      ],
      '/node/': [
        '',
        '异步编程的几种方式',
        'node配置babel使用import',
        'import与export',
      ],
      'protocol': [
        ''
      ],
      '/security/': [
        ''
      ],
      '/interview/': [
        '',
        {
          title:'Javascript 基础(未完待续)', 
          children: [
          './02_javascript/闭包',
          './02_javascript/高阶函数',
        ]},
        { title:'JavaScript 设计模式(未完待续)', 
          children: [
          './08_设计模式/单例模式',
          './08_设计模式/策略模式',
          './08_设计模式/代理模式',
          './08_设计模式/迭代器模式',
          './08_设计模式/发布订阅模式',
          './08_设计模式/组合模式',
        ]},
        /* { title:'HTML', children: ['./00_html/1',]},
        { title:'CSS', children: ['./01_css/1',]},
        { title:'JavaScript', children: ['./02_javascript/1',]},
        { title:'AngularJS', children: ['./03_angualr/1',]},
        { title:'React', children: ['./03_react/1',]},
        { title:'Vue', children: ['./03_vue/1',]},
        { title:'Git', children: ['./03_git/1',]},
        { title:'Webpack', children: ['./03_webpack/1',]},
        { title:'浏览器', children: ['./04_浏览器/1',]},
        { title:'性能优化', children: ['./05_性能优化/1',]},
        { title:'数据结构', children: ['./06_数据结构/1',]},
        { title:'算法', children: ['./07_算法/1',]},        
        { title:'网络协议', children: ['./09_网络协议/1',]},
        { title:'网络安全', children: ['./10_网络安全/1',]}, */
      ],
      '/code/': [
        '',
        '数组'
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


function genNginxList() {
  return [{
    title: 'Nginx 基础',
    collapsable: false,
    children: [
      '00_一份通用配置',
      '00_nginx常用命令',
      '00_环境调试',
      '01_nginx介绍',
      '02_nginx安装',
      '03_nginx目录',
      '04_安装编译参数',
      '05_nginx_conf',
      '06_http',
      '07_log',
      '08_http_stub_status_module',
      '09_http_random_index_module',
      '10_http_sub_module',
      '11_请求限制',
      '12_访问控制',
    ]
  }, {
    title: 'Nginx 作为静态资源 WEB 服务',
    collapsable: false,
    children: [
      '13_静态资源WEB服务',
      '14_sendfile',
      '15_tcp_nodelay',
      '16_tcp_nopush',
      '17_gzip',
      '18_cache',
      '19_跨域配置',
      '20_防盗链',
    ]
  }, {
    title: 'Nginx 作为代理服务',
    collapsable: false,
    children: [
      '21_代理',
      '22_配置缓冲区',
      '23_重定向',
      '24_header',
      '25_timeout',
      '26_真实服务器配置',
    ]
  }, {
    title: 'Nginx 作为负载均衡服务',
    collapsable: false,
    children: [
      '27_负载均衡介绍',
      '28_负载均衡配置',
      '29_轮询策略',
      '30_缓存类型',
      '31_分片请求',
      '32_动静分离',
    ]
  },{
    title: 'Nginx 的 rewrite 规则',
    collapsable: false,
    children: [
      '33_rewrite',
    ]
  }, {
    title: 'Nginx 高级模块',
    collapsable: false,
    children: [
      '34_secure_link_module',
      '35_geoip_module',
    ]
  }, {
    title: 'Nginx 中的 HTTPS',
    collapsable: false,
    children: [
      '36_https介绍',
      '37_ca证书',
      '38_https配置',
      '39_配置苹果要求的证书',
      '40_https服务优化',
    ]
  }, {
    title: 'Nginx 与 Lua 开发',
    collapsable: false,
    children: [
      '41_Lua基础语法',
      '42_nginx的lua环境',
      '43_nginx调用lua模块指令',
      '44_灰度发布',
    ]
  }, {
    title: 'Nginx 常见问题',
    collapsable: false,
    children: [
      '45_server_name优先级',
      '46_location匹配优先级',
      '47_try_files使用',
      '48_alias和root区别',
      '49_传递用户真实ip',
      '50_nginx常见错误码',
    ]
  }, {
    title: 'Nginx 性能优化',
    collapsable: false,
    children: [
     '51_性能优化考虑的点',
     '52_压测工具ab',
     '53_系统与nginx性能优化',
     '54_文件句柄设置',
     '55_cpu亲和配置',
     '56_通用配置优化',
    ]
  }, {
    title: 'Nginx 安全',
    collapsable: false,
    children: [
     '57_常见恶意行为',
     '58_暴力破解',
     '58_文件上传漏洞',
     '59_sql注入',
     '60_waf',
     '66_cc攻击',
     '67_nginx漏洞和新特性',
    ]
  }, {
    title: 'Nginx 架构设计',
    collapsable: false,
    children: [
     '68_nginx架构'
    ]
  }]
}

function genMpvueList(){
  return [
    {
      title: 'MPVue 小程序基础',
      collapsable: false,
      children: [
        '00_微信开发者工具',
        '01_小程序目录介绍',
        '03_为什么用vuejs',
        
      ]
    }
  ]
}