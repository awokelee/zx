# iconfont 图标

::: tip iconfont
图标字体, 可以把图标当作字体来设置颜色、大小
:::

- 下载 iconfont

国内的通常在阿里巴巴`http://www.iconfont.cn/`网站选择好项目需要的图标, 然后 **下载** 到本地

下载时有三种模式让你选择: `Unicode`、`Font class`、`Symbol`, 这里用 `Symbol` 举例

- 添加到项目

下载好后有个压缩文件, 在 `src/assets/styles` 目录下新建 `iconfont` 目录, 把压缩文件解压后的下列文件复制到新建的`iconfont` 目录

```md
├── iconfont.eot
├── iconfont.svg
├── iconfont.ttf
└── iconfont.woff
```

把压缩文件中的 `iconfont.css` 移到 `vue` 项目 `src/assets/styles` 目录

修改 `iconfont.css` 中 `src` 路径

```css {4,6,10,12,23}

@font-face {font-family: "iconfont";
  /* IE9*/
  src: url('./iconfont/iconfont.eot?t=1525653874076');
  /* IE6-IE8 */
  src: url('./iconfont/iconfont.eot?t=1525653874076#iefix')
  format('embedded-opentype'),
  ......
  /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont/iconfont.ttf?t=1525653874076') format('truetype'),
  /* iOS 4.1- */
  url('./iconfont/iconfont.svg?t=1525653874076#iconfont') format('svg');
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-icon-yanjing:before { content: "\e619"; }
```

- `main.js` 中引入 `iconfont.css`

```js
import 'styles/iconfont.css'
```

- 组件中使用

这里 `icon-yanjing` 就是 `iconfont.css` 带有的

```html {1}
<i class="iconfont icon-yanjing"></i>
```