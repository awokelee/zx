# JSONP 处理跨域

### JSONP 原理

本质是利用 `script` 标签的异步加载来实现的.

- 利用 `script` 标签请求后台, 参数中有函数名, 这里函数名叫 `jsonp`

```js
<script src="http://www.abc.com/?data=name&callback=jsonp" charset="utf-8"></script>
```

- 定义一个全局函数, 名字与上面一致 `jsonp`

```js
<script type="text/javascript">
  jsonp({
      data: {
  
      },
  });
</script>
```

- JSONP 封装

```js
 /**
  * [function 获取一个随机的5位字符串]
  * @param  {[type]} prefix [description]
  * @return {[type]}        [description]
  */
 util.getName = function (prefix) {
     return prefix + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
 };

 /**
  * [function 在页面中注入js脚本]
  * @param  {[type]} url     [description]
  * @param  {[type]} charset [description]
  * @return {[type]}         [description]
  */
 util.createScript = function (url, charset) {
     var script = document.createElement('script');
     script.setAttribute('type', 'text/javascript');
     charset && script.setAttribute('charset', charset);
     script.setAttribute('src', url);
     script.async = true;
     return script;
 };

 /**
  * [function 判断是否为函数]
  * @param  {[type]} source [description]
  * @return {[type]}        [description]
  */
 util.isFunction = function (source) {
     return '[object Function]' === Object.prototype.toString.call(source);
 };

 /**
  * [function jsonp]
  * @param  {[type]} url      [description]
  * @param  {[type]} onsucess [description]
  * @param  {[type]} onerror  [description]
  * @param  {[type]} charset  [description]
  * @return {[type]}          [description]
  */
 util.jsonp = function (url, onsuccess, onerror, charset) {
     var callbackName = util.getName('tt_player');
     window[callbackName] = function () {
         if (onsuccess && util.isFunction(onsuccess)) {
             onsuccess(arguments[0]);
         }
     };
     var script = util.createScript(url + '&callback=' + callbackName, charset);
     script.onload = script.onreadystatechange = function () {
         if (!script.readyState || /loaded|complete/.test(script.readyState)) {
             script.onload = script.onreadystatechange = null;
             // 移除该script的 DOM 对象
             if (script.parentNode) {
                 script.parentNode.removeChild(script);
             }
             // 删除函数或变量
             window[callbackName] = null;
         }
     };
     script.onerror = function () {
         if (onerror && util.isFunction(onerror)) {
             onerror();
         }
     };
     document.getElementsByTagName('head')[0].appendChild(script);
 };
```