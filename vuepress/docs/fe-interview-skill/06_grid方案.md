# grid 方案

```html
<section class="layout grid">
  <style>
    .layout.grid .left-center-right {
      display: grid;
      width: 100%;
      grid-template-rows: 100px;
      grid-template-columns: 300px auto 300px;
    }

    .layout.grid .left {
      background: red;
    }

    .layout.grid .center {
      background: yellow;
    }

    .layout.grid .right {
      background: blue;
    }
  </style>
  <article class="left-center-right">
    <div class="left"></div>
    <div class="center">
      <h1>grid</h1>
    </div>
    <div class="right"></div>
  </article>
</section>
```