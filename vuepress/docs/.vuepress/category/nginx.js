module.exports = {
  getList() {
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
}