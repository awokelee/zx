# iconfont 图标

> 项目使用 iconfont

## 下载 iconfont

在 `http://www.iconfont.cn/`  下载好 `iconfont`

## 添加到项目

- 在 `src/assets/styles` 目录下新建 `iconfont` 目录, 解压后的其他文件摆在该目录

```shell
├── icomoon.eot
├── icomoon.svg
├── icomoon.ttf
├── icomoon.woff
├── iconfont.eot
├── iconfont.svg
├── iconfont.ttf
└── iconfont.woff
```

- 下载好的压缩文件解压, 将 `iconfont.css` 移到`src/assets/styles` 目录

- 修改 `iconfont.css` 中其他引入文件的路径

```css

@font-face {font-family: "iconfont";
  src: url('./iconfont/iconfont.eot?t=1525653874076'); /* IE9*/
  src: url('./iconfont/iconfont.eot?t=1525653874076#iefix') format('embedded-opentype'), /* IE6-IE8 */
  ......
  url('./iconfont/iconfont.ttf?t=1525653874076') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont/iconfont.svg?t=1525653874076#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-toufangfangan:before { content: "\e619"; }
```

## 组件中使用

```html
<i class="iconfont icon-yanjing"></i>
```