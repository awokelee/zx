# flex 方案

```html
<section class="layout flexbox">
  <style>
    .layout.flexbox {
      margin-top: 140px;
    }

    .layout.flexbox .left-center-right {
      display: flex;
    }

    .layout.flexbox .left {
      width: 300px;
      background: red;
    }

    .layout.flexbox .center {
      flex: 1;
      background: yellow;
    }

    .layout.flexbox .right {
      width: 300px;
      background: blue;
    }
  </style>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h1>flex</h1>
    </div>
    <div class="right"></div>
  </article>
</section>
```