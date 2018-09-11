# 如何创建 Ajax

- `XMLHttpRequest` 对象的工作流程

- 兼容性处理

- 事件的触发条件

- 事件的触发顺序

```js
/**
 * [json 实现ajax的json]
 * @param  {[type]} options [description]
 * @return {[type]}         [description]
 */
 util.json = function (options) {
     var opt = {
         url: '',
         type: 'get',
         data: {},
         success: function () {},
         error: function () {},
     };
     util.extend(opt, options);
     if (opt.url) {
        // 创建
         var xhr = XMLHttpRequest
            ? new XMLHttpRequest()
            : new ActiveXObject('Microsoft.XMLHTTP');
         var data = opt.data,
             url = opt.url,
             type = opt.type.toUpperCase(),
             dataArr = [];
         for (var k in data) {
             dataArr.push(k + '=' + data[k]);
         }
         if (type === 'GET') {
             url = url + '?' + dataArr.join('&');
             xhr.open(type, url.replace(/\?$/g, ''), true);
             xhr.send();
         }
         if (type === 'POST') {
             xhr.open(type, url, true);
             xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
             xhr.send(dataArr.join('&'));
         }
         xhr.onload = function () {
             if (xhr.status === 200 || xhr.status === 304) {
                 var res;
                 if (opt.success && opt.success instanceof Function) {
                     res = xhr.responseText;
                     if (typeof res ==== 'string') {
                         res = JSON.parse(res);
                         opt.success.call(xhr, res);
                     }
                 }
             } else {
                 if (opt.error && opt.error instanceof Function) {
                     opt.error.call(xhr, res);
                 }
             }
         };
     }
 };
```