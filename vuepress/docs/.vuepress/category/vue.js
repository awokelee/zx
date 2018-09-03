module.exports = {
  getList(){
    return [
      {
        title: 'Vue 开发基础',
        collapsable: false,
        children: [
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
        ]
      },
      {
        title: 'Vue 项目常用',
        collapsable: false,
        children: [
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
        ]
      },
    ]
  }
}