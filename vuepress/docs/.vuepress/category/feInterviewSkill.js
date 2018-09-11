module.exports = {
  getList(){
    return [
      {
        title: '页面布局',
        collapsable: false,
        children: [
          '01_三栏布局',
          '02_float方案',
          '03_absolute方案',
          '04_flex方案',
          '05_table方案',
          '06_grid方案',
          '07_每个方案优缺点',
          '08_高度不确定下的情况会怎样',
          '09_页面布局的变通',
        ]
      },
      {
        title: 'CSS 盒模型',
        collapsable: false,
        children: [
          '10_标准模型和IE模型',
          '11_css如何设置这两种模型',
          '12_js如何设置获取盒模型对应的宽和高',
          '13_根据盒模型解释边距重叠',
          '14_BFC边距重叠解决方案',
          '15_BFC原理',
          '16_如何创建BFC',
          '17_BFC使用场景',
        ]
      },
      {
        title: 'DOM 事件类',
        collapsable: false,
        children: [
          '18_事件级别',
          '19_事件模型',
          '20_事件流',
          '21_DOM事件捕获的具体流程',
          '22_ 获取html标签',
          '23_Event对象的常见应用',
          '24_自定义事件',
          '25_捕获演示',
          '26_自定义事件演示',
        ]
      },
      {
        title: 'HTTP 协议类',
        collapsable: false,
        children: [
          '27_HTTP协议的主要特点',
          '28_HTTP报文的组成部分',
          '29_HTTP方法',
          '30_POST和GET 的区别',
          '31_HTTP状态码',
          '32_HTTP持久连接',
          '33_管线化',
        ]
      },
      {
        title: '原型链类',
        collapsable: false,
        children: [
          '34_创建对象几种方法',
          '35_原型、构造函数、实例、原型链',
          '36_instanceof原理',
          '37_new运算符',
        ]
      },
      {
        title: '面向对象类',
        collapsable: false,
        children: [
          '38_类的声明和实例',
          '39_借助构造函数实现继承',
          '40_借助原型链实现继承',
          '41_组合方式实现继承',
          '42_组合继承的优化1',
          '43_组合继承的优化2',
        ]
      },
      {
        title: '通信类',
        collapsable: false,
        children: [
          '44_同源策略及限制',
          '45_前后端如何通信',
          '46_如何创建Ajax',
          '47_跨域通信的几种方式',
          '48_jsonp处理跨域',
          '49_hash处理跨域',
          '50_postMessage处理跨域',
          '51_websocket处理跨域',
          '52_cors处理跨域'
        ]
      },
      {
        title: '前端安全类',
        collapsable: false,
        children: [
          '53_csrf',
          '54_xss'
        ]
      },
      {
        title: '算法类',
        collapsable: false,
        children: [
          '55_排序',
          '56_冒泡排序',
          '57_选择排序',
          '59_归并排序',
          '58_插入排序',
          '60_希尔排序',
          '61_堆栈、队列、链表',
          '62_递归',
          '63_波兰式和逆波兰式',
        ]
      },
      {
        title: '渲染机制',
        collapsable: false,
        children: [
          '64_什么是doctype及作用',
          '65_浏览器渲染过程',
          '66_重排reflow',
          '67_重绘repaint',
        ]
      },
      {
        title: 'JS 运行机制',
        collapsable: false,
        children: [
          '68_js的单线程',
          '69_任务队列',
          '70_eventloop'
        ]
      },
      {
        title: '性能优化',
        collapsable: false,
        children: [
          '71_defer和async的异步加载',
          '72_浏览器缓存',
        ]
      },
      {
        title: '错误监控',
        collapsable: false,
        children: [
          '73_前端错误的分类',
          '74_错误的捕获方式',
          '75_上报错误的基本原理',
        ]
      },
      {
        title: '简历及总结',
        collapsable: false,
        children: [
          '76_简历及总结',
        ]
      },
    ]
  }
}