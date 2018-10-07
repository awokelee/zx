# styled-components 及 reset.css

`styled-components` 主要是避免样式冲突

- 项目目录

```bash
├── App.js
├── index.js
└── style.js
```

- 安装 `styled-components`

`yarn add styled-components`

- `reset.css`

[reset.css 网址](https://meyerweb.com/eric/tools/css/reset/)

- `style.js`

以前样式写在 `style.css` 中, 现在利用 `styled-components` 把样式写在 `style.js`, 然后在 `style.js` 中加入 `reset.css` 内容.

```js {1,3,47}
import { injectGlobal } from 'styled-components'

injectGlobal`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
```

- index.js

```js {3}
import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```