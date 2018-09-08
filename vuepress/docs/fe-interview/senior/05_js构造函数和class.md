# JS 构造函数和 class

### js 构造函数

```js
function MathHandle(x, y) {
  this.x = x;
  this.y = y;
}

MathHandle.prototype.add = function () {
  return this.x + this.y;
}

var m = new MathHandle(1, 2);
console.log(m.add())
```

### class

```js
class MathHandle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add() {
    return this.x + this.y;
  }
}

const m = new MathHandle(1, 2)
console.log(m.add())
```

### 本质

```js
typeof MathHandle // function
MathHandle === MathHandle.prototype.constructor // true
m.__proto__ === MathHandle.prototype // true
```
