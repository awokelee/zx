# defer/async 异步加载

提升页面性能的方法有哪些:

- 资源压缩合并, 减少 HTTP 请求

- 非核心代码异步加载 -> 异步加载的方式 -> 异步加载的区别

- 利用浏览器缓存 -> 缓存的分类 -> 缓存的原理

- 使用 CDN

- 预解析 DNS

`<meta http-equiv="x-dns-prefetch-control" content="on">`:

`a` 标签默认是开启 `DNS` 预解析的, 但是在 `https` 中, 浏览器是默认关闭的, 这里是强制打开 `a` 标签的 `DNS` 预解析.

`<link rel="dns-prefetch" href="//host_name_to_prefetch.com">`

### defer/async 异步加载

**异步加载的方式:**

- 动态脚本加载

- defer

- async

**异步加载的区别:**

- defer 是在 HTML 解析完之后才执行, 如果是多个, 按照加载的顺序依次执行

- async 是在加载完之后立即执行, 如果是多个, 执行顺序和加载顺序无关

### defer

```js
// defer1.js 文件
console.log('defer1');
```

```js
// defer2.js 文件
console.log('defer2');
```

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>性能优化</title>
    <script src="./defer1.js" charset="utf-8" defer></script>
    <script src="./defer2.js" charset="utf-8" defer></script>
  </head>
  <body>
    <div class="">
      test
      <script type="text/javascript">
        console.log('write');
        document.write('<span>write</span>');
      </script>
      <script type="text/javascript">
        for (var i = 0; i < 200000; i++) {
            if (i % 20000 === 0) {
                console.log(i);
            }
        }
      </script>
    </div>
  </body>
</html>
```

输出内容如下:

```js
write
0
20000
40000
60000
80000
100000
120000
140000
160000
180000
defer1
defer2
```

### async

```js
// async1.js 文件
...
...
// 把文件内容设置很大
```

```js
// async2.js 文件
console.log('async2');
```

```HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>性能优化</title>
    <script src="./async1.js" charset="utf-8" async></script>
    <script src="./async2.js" charset="utf-8" async></script>
  </head>
  <body>
    <div class="">
      test
      <script type="text/javascript">
        console.log('write');
        document.write('<span>write</span>');
      </script>
      <script type="text/javascript">
        for (var i = 0; i < 200000; i++) {
            if (i % 20000 === 0) {
                console.log(i);
            }
        }
      </script>
    </div>
  </body>
</html>
```

输出内容如下:

当 `async1` 内容很大, `async2` 先加载好, 有可能会先输出 `async2` 的内容.