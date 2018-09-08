# Zepto 和 jQuery 的原型

### zepto 的原型

- 模式实现

```js
(function (window) {
    // 空对象
    var zepto = {}
    // 构造函数
    function Z(dom, selector) {
        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }

    zepto.Z = function (dom, selector) {
        // new
        return new Z(dom, selector)
    }

    zepto.init = function (selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))
        return zepto.Z(dom, selector)
    }
    // 使用 zepto 时候的 $
    var $ = function (selector) {
        return zepto.init(selector)
    }
    window.$ = $

    $.fn = {
        css: function (key, value) {
            alert('css')
        },
        html: function (value) {
            return '这是一个模拟的 html 函数'
        }
    }
    Z.prototype = $.fn
})(window)
```

- 使用

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <p>zepto test 1</p>
    <p>zepto test 2</p>
    <p>zepto test 3</p>

    <div id="div1">
        <p>zepto test in div</p>
    </div>

    <script type="text/javascript" src="./my-zepto.js"></script>
    <script type="text/javascript">
        var $p = $('p')
        $p.css('font-size', '40px')
        alert($p.html())

        var $div1 = $('#div1')
        $div1.css('color', 'blue')
        alert($div1.html())
    </script>
</body>
</html>
```

### jquery 的原型

- 模拟实现

```js
(function (window) {

    var jQuery = function (selector) {
        // new
        return new jQuery.fn.init(selector)
    }
    // 初始化 jQuery.fn
    jQuery.fn = jQuery.prototype = {
        // constructor: jQuery,
        css: function (key, value) {
            alert('css')
        },
        html: function (value) {
            return 'html'
        }
    }
    // 定义构造函数
    var init = jQuery.fn.init = function (selector) {
        var slice = Array.prototype.slice
        var dom = slice.call(document.querySelectorAll(selector))

        var i, len = dom ? dom.length : 0
        for (i = 0; i < len; i++) {
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector || ''
    }
    // 定义原型
    init.prototype = jQuery.fn

    window.$ = jQuery

})(window)
```

- 使用

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <p>jquery test 1</p>
    <p>jquery test 2</p>
    <p>jquery test 3</p>

    <div id="div1">
        <p>jquery test in div</p>
    </div>

    <script type="text/javascript" src="./my-jquery.js"></script>
    <script type="text/javascript">
        var $p = $('p')
        $p.css('font-size', '40px')
        alert($p.html())

        var $div1 = $('#div1')
        $div1.css('color', 'blue')
        alert($div1.html())
    </script>
</body>
</html>
```

### 为什么要把原型方法放在 $.fn

```js
// 初始化 jQuery.fn
jQuery.fn = jQuery.prototype = {
    // constructor: jQuery,
    css: function (key, value) {
        alert('css')
    },
    html: function (value) {
        return 'html'
    }
}

// 定义原型
init.prototype = jQuery.fn
```

因为要扩展插件, 简单案例如下:

```js
$.fn.getNodeName = function() {
    return this[0].nodeName
}
```

- 好处

只有 `$` 会暴露在 `window` 全局变量

将插件扩展统一到 `$.fn.xxx` 这一个接口, 方便使用