# hiper 性能分析

[hiper](https://github.com/pod4g/hiper)

安装:

```bash
npm install hiper -g
```

测试

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