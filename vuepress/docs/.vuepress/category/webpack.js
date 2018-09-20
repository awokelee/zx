module.exports = {
  getList(){
    return [
      {
        title: '由浅入深 Webpack',
        collapsable: false,
        children: [
          '00_webpack介绍',
          '01_JS模块化',
          '02_CSS模块化',
          '03_webpack详细介绍',
          '04_编译ES6',
          '05_编译Typescript',
          '06_提取公用代码',
          '07_代码分割和懒加载',
          '08_处理CSS',
          '09_PostCSS',
          '10_TreeShaking',
          '11_图片处理',
          '12_字体处理',
          '13_第三方JS库处理',
          '14_生成HTML',
        ]
      },
      {
        title: 'Webpack 环境配置',
        collapsable: false,
        children: [
          '15_搭建开发环境',
          '16_Proxy',
          '17_模块热更新',
          '18_SourceMap调试',
          '19_设置ESLint',
          '20_开发环境和生产环境区分',
          '21_使用middleware来搭建开发环境',
        ]
      },
      {
        title: 'Webpack 实战场景',
        collapsable: false,
        children: [
          '22_打包结果分析',
          '23_打包速度优化',
          '24_长缓存优化',
          '25_多页面应用',
          '26_vue和webpack',
        ]
      },
    ]
  }
}