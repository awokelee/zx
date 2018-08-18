# create-react-app 目录介绍

create-react-app 创建的目录结构如下, 核心的就三个文件 `index.html`, `index.js`, `App.js`.

```bash {5,9,12}
> my-app
├── node_modules # 项目包第三方依赖
├── public
|  ├── favicon.ico # 项目 icon
|  ├── index.html # 页面
|  └── manifest.json # PWA, serviceWoker, 手机快捷方式内容配置文件
├── src # 项目源代码
|  ├── App.css
|  ├── App.js # 组件
|  ├── App.test.js # 自动化测试文件
|  ├── index.css
|  ├── index.js # 程序入口文件
|  ├── logo.svg
|  └── registerServiceWorker.js # PWA, progressive web application, 没网也可以看到页面
├── package.json # 包配置文件
├── README.md # 项目说明
└── yarn.lock # 项目依赖的安装包版本锁定
```