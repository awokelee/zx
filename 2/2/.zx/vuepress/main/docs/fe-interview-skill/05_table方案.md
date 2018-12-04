# table 方案

```html
<section class="layout table">
  <style>
    .layout.table .left-center-right {
      width: 100%;
      display: table;
      height: 100px;
    }

    .layout.table .left-center-right>div {
      display: table-cell;
    }

    .layout.table .left {
      width: 300px;
      background: red;
    }

    .layout.table .center {
      background: yellow;
    }

    .layout.table .right {
      width: 300px;
      background: blue;
    }
  </style>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h1>table</h1>
    </div>
    <div class="right"></div>
  </article>
</section>
```