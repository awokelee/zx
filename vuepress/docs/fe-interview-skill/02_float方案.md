# float 方案

```html
<section class="layout float">
  <style media="screen">
    .layout.float .left {
      float: left;
      width: 300px;
      background: red;
    }

    .layout.float .right {
      float: right;
      width: 300px;
      background: blue;
    }

    .layout.float .center {
      background: yellow;
    }
  </style>
  <article class="left-right-center">
    <div class="left"></div>
    <div class="right"></div>
    <div class="center">
      <h1>浮动</h1>
    </div>
  </article>
</section>
```