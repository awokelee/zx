# puppeteer: Failed to launch chrome

### 错误信息

在阿里云 `centos` 服务器使用 `puppeteer` 报错如下:

```bash
[root ~]# UnhandledPromiseRejectionWarning: Error: Failed to launch chrome!
...
```

[puppeteer 官方说明](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md)

### 解决方案

[Does CentOS system can run puppeteer with sandbox anyway?](https://github.com/GoogleChrome/puppeteer/issues/560#issuecomment-325224766)

原来 puppeteer 虽然帮你下了一个 `Chromium`，但并没有帮你把依赖都装好。

- 安装依赖

```bash
#依赖库
[root ~]# yum install pango.x86_64 libXcomposite.x86_64 libXcursor.x86_64 libXdamage.x86_64 libXext.x86_64 libXi.x86_64 libXtst.x86_64 cups-libs.x86_64 libXScrnSaver.x86_64 libXrandr.x86_64 GConf2.x86_64 alsa-lib.x86_64 atk.x86_64 gtk3.x86_64 -y
```

- 安装字体

```bash
[root ~]# yum install ipa-gothic-fonts xorg-x11-fonts-100dpi xorg-x11-fonts-75dpi xorg-x11-utils xorg-x11-fonts-cyrillic xorg-x11-fonts-Type1 xorg-x11-fonts-misc -y
```

- `sandbox` 去沙箱

添加参数 `args: ['--no-sandbox', '--disable-setuid-sandbox']`

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  ...
})();
```

设置完以上再去试试运行 `puppeteer`.