# react 项目部署上线

- 删除 `public/api` 目录

`public/api` 是做本地数据 `mock` 用, 上线后有后台接口, 删除该目录.

- 打包

执行 `yarn build` 打包, 会在项目根目录生成 `build` 文件夹. `build` 文件夹就是打包后的项目.

- 部署

给后台部署到 `nginx` 等就行了.

- `react` 版本升级

`react` 新版本废弃了 `componentWillMount`, `componentWillUpdate`, `componentWillReceiveProps`