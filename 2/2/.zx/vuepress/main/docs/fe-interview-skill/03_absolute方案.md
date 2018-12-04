# absolute 方案

```html
<section class="layout absolute">
  <style>
    .layout.absolute .left-center-right>div {
      position: absolute;
    }

    .layout.absolute .left {
      left: 0;
      width: 300px;
      background: red;
    }

    .layout.absolute .center {
      left: 300px;
      right: 300px;
      background: yellow;
    }

    .layout.absolute .right {
      right: 0;
      width: 300px;
      background: blue;
    }
  </style>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h1>绝对定位</h1>
    </div>
    <div class="right"></div>
  </article>
</section>
```