module.exports = {
  getList(){
    return [
      {
        title: '模块化',
        collapsable: false,
        children: [
          '00_require-exports',
          '01_import-export',
          '01_import与export',
          '02_AMD-CMD',
          '03_babel开发环境配置',
          '04_rollup',
        ]
      },
      {
        title: '构造函数和原型',
        collapsable: false,
        children: [
          '05_js构造函数和class',
          '06_js继承',
          '08_zepto和jquery原型',
        ]
      },
      {
        title: '异步',
        collapsable: false,
        children: [
          '09_单线程和异步',
          '09_异步编程的几种方式',
          '10_event-loop',
          '11_jQuery的deferred',
          '12_promise',
          '13_async-await',
        ]
      },
      {
        title: '虚拟 DOM',
        collapsable: false,
        children: [
          '14_virtual-dom',
          '15_snabbdom',
          '16_diff算法',
        ]
      },
      {
        title: 'MVVM',
        collapsable: false,
        children: [
          '17_从jquery到框架',
          '18_mvvm',
          '19_vue的响应式',
          '20_vue解析模版',
          '21_vue的render函数',
          '22_vue的render源码',
          '23_vue的render后模版生成html',
          '24_vue的整个实现流程',
        ]
      },
      {
        title: 'React 相关',
        collapsable: false,
        children: [
          '25_jsx本质',
          '26_jsx和vdom',
          '27_setState',
        ]
      },
      {
        title: 'React 和 Vue 对比',
        collapsable: false,
        children: [
          '28_react和vue对比',
        ]
      },
      {
        title: 'Hybrid',
        collapsable: false,
        children: [
          '29_hybrid',
          '30_hybrid更新上线流程',
          '31_hybrid和h5区别',
          '32_js和客户端通讯',
        ]
      },
    ]
  }
}