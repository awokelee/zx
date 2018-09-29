module.exports = {
  getList() {
    return [{
        title: 'HTTP 协议',
        collapsable: false,
        children: [
          '00_5层网络模型',
          '01_HTTP协议历史',
          '02_HTTP三次握手',
          '03_URI-URL-URN',
          '04_HTTP报文',
          '05_简单node服务',
          '06_客户端工具',
          '07_CORS限制与解决',
          '08_CORS跨域限制以及预请求验证',
          '09_Cache-Control',
          '10_Last-Modified和Etag',
          '11_cookie和session',
          '12_HTTP长连接',
          '13_数据协商',
          '14_Redirect',
          '15_Content-Security-Policy',
        ]
      },
      {
        title: 'Nginx 代理',
        collapsable: false,
        children: [
          '16_nginx基础配置',
          '17_nginx代理缓存',
          '18_HTTPS',
          '19_HTTPS部署',
          '20_HTTP2和Nginx配置HTTP2',
        ]
      },
    ]
  }
}