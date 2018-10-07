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
    '/react/': [
      {
        title: 'React 开发基础',
        collapsable: false,
        children: [
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
          '17_axios',
          '17_本地mock数据',
          '22_antd-ui库使用',
          '22_create-react-app配置less',
          '27_ui组件和容器组件',
          '28_无状态组件',
          '41_PureComponent',
          '42_react异步组件',
          '43_react项目上线',
        ]
      },
      {
        title: 'React 虚拟 DOM 和 生命周期',
        collapsable: false,
        children: [
          '12_虚拟DOM',
          '13_虚拟dom中的diff算法',
          '14_ref的使用',
          '15_生命周期函数',
          '16_生命周期使用场景',
        ]
      },
      {
        title: 'React 的动画',
        collapsable: false,
        children: [
          '18_react动画',
          '19_react-transition-group实现动画',
        ]
      },
      {
        title: 'React 中使用 styled',
        collapsable: false,
        children: [
          '34_styled-components',
          '35_styled-components使用',
          '36_styled-components使用iconfont',
        ]
      },
      {
        title: 'Redux 的使用',
        collapsable: false,
        children: [
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
          '37_redux的combineReducers及完整案例',
          '38_immutable',
          '39_redux-immutable',
        ]
      },
      {
        title: 'React 路由',
        collapsable: false,
        children: [
          '40_react路由',
          '40_路由传参',
          '40_路由Redirect',
        ]
      }
    ],
    '/': [ '', 'contact', 'about']
  }
}