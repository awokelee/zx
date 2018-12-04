# hiper 性能分析

## 痛点

我们开发完一个项目或者给一个项目做完性能优化以后，如何来衡量这个项目的性能是否达标？

我们的常见方式是在Dev Tool中的performance和network中看数据，记录下几个关键的性能指标，然后刷新几次再看这些性能指标。

有时候我们发现，由于样本太少，受当前「网络」、「CPU」、「内存」的繁忙程度的影响很重，有时优化后的项目反而比优化前更慢。

如果有一个工具，一次性地请求N次网页，然后把各个性能指标取出来求平均值，我们就能非常准确地知道这个优化是「正优化」还是「负优化」。

并且，也可以做对比，拿到「具体优化了多少」的准确数据。这个工具就是为了解决这个痛点的。

同时，这个工具也是学习「浏览器加载渲染网页过程」和「性能优化」的一个利器，因此我们也可以把他作为一个强大的学习辅助工具，不至于让我们在样本过少的情况下得到错误的结论。

[hiper](https://github.com/pod4g/hiper)

## 安装

```bash
npm install hiper -g
```

## 性能指标

![](./media/performance.png)

Key | Value
----------|---------
DNS查询耗时 | domainLookupEnd - domainLookupStart
TCP连接耗时 | connectEnd - connectStart
第一个Byte到达浏览器的用时 | responseStart - requestStart
页面下载耗时 | responseEnd - responseStart
DOM Ready之后又继续下载资源的耗时 | domComplete - domInteractive
白屏时间 | domInteractive - navigationStart
DOM Ready 耗时 | domContentLoadedEventEnd - navigationStart
页面加载总耗时 | loadEventEnd - navigationStart

[https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming](https://developer.mozilla.org/zh-CN/docs/Web/API/PerformanceTiming)

## 项目测试

- `vue2`

```bash
λ hiper "http://alc.5dcf.cn/#/"


  _   _ _
 | | | (_)_ __   ___ _ __
 | |_| | | '_ \ / _ \ '__|
 |  _  | | |_) |  __/ |
 |_| |_|_| .__/ \___|_|
         |_|


🚀 It takes 2.318 s to load `http://alc.5dcf.cn/#/` 20 times


  DNS lookup time                 55.00 ms
  TCP connect time                12.00 ms
  TTFB                            7.00 ms
  Download time of the page       9.00 ms
  After DOM Ready download time   37.00 ms
  White screen time               764.00 ms
  DOM Ready time                  764.00 ms
  Load time                       801.00 ms
```

- `react16`

```bash
λ hiper "https://bcapp.alc.com.cn/mapp/"


  _   _ _
 | | | (_)_ __   ___ _ __
 | |_| | | '_ \ / _ \ '__|
 |  _  | | |_) |  __/ |
 |_| |_|_| .__/ \___|_|
         |_|


🚀 It takes 1.476 s to load `https://bcapp.alc.com.cn/mapp/` 20 times


  DNS lookup time                 12.00 ms
  TCP connect time                207.00 ms
  TTFB                            40.00 ms
  Download time of the page       2.00 ms
  After DOM Ready download time   39.00 ms
  White screen time               571.00 ms
  DOM Ready time                  573.00 ms
  Load time                       610.00 ms
```

- `ng1`

```bash
λ hiper "https://bcapp.alc.com.cn/bcapph5v19/#/balanceManagement"


  _   _ _
 | | | (_)_ __   ___ _ __
 | |_| | | '_ \ / _ \ '__|
 |  _  | | |_) |  __/ |
 |_| |_|_| .__/ \___|_|
         |_|


🚀 It takes 2.351 s to load `https://bcapp.alc.com.cn/bcapph5v19/#/balanceManagement` 20 times


  DNS lookup time                 54.00 ms
  TCP connect time                226.00 ms
  TTFB                            23.00 ms
  Download time of the page       1.00 ms
  After DOM Ready download time   184.00 ms
  White screen time               756.00 ms
  DOM Ready time                  757.00 ms
  Load time                       942.00 ms
```