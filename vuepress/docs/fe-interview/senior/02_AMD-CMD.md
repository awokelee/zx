# requirejs 的 AMD 和 seajs 的 CMD

### AMD 和 CMD 定义模块

```js
// a.js
// ----------- AMD or CMD ----------------
define(function(require, exports, module){
  module.exports = {
    a : function() {},
    b : 'xxx'
  };
});
```

```js
// b.js
// ------------ AMD or CMD -------------
define(function(require, exports, module){
   var m = require('./a');
   m.a();
});
```