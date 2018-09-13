module.exports = {
  getList(){
    return [
      {
        title: 'JS 基础知识',
        collapsable: false,
        children: [
          '00_typeof',
          '01_等于',
          '02_js内置函数',
          '03_值类型和引用类型',
          '04_json',
          '05_强制类型转换',
          '06_构造函数',
          '08_原型规则',
          '09_原型链',
          '10_instanceof',
          '11_原型链继承',
          '12_new的过程',
          '13_执行上下文',
          '14_this',
          '15_作用域',
          '16_闭包',
          '17_同步与异步',
          '18_异步和单线程',
          '19_日期和函数',
          '20_数组和对象',
        ]
      },
      {
        title: 'JS WEB API',
        collapsable: false,
        children: [
          '21_DOM',
          '22_BOM',
          '23_事件',
          '24_Ajax',
          '25_跨域',
          '26_存储',
        ]
      },
      {
        title: '开发环境',
        collapsable: false,
        children: [
          '27_git',
          '28_AMD',
          '29_CommonJS',
        ]
      },
      {
        title: '运行环境',
        collapsable: false,
        children: [
          '30_输入url',
          '31_浏览器渲染',
          '32_性能优化',
          '33_安全',
        ]
      },
    ]
  }
}