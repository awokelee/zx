# fiddler 抓包

`fiddler` 是 `windows` 下的抓包软件, `mac` 常用的是 `Charles`.

### 设置浏览器代理

如果浏览器没有设置相应的代理，则 `fiddler` 是无法捕获到 `HTTP` 请求的.

地址: `127.0.0.1` 端口默认是 `8888`

![](./media/fiddler/fiddler-net.png)

### 设置高亮

`Rules` -> `Customize Rules`, 这里以 `.js` 文件颜色为 `orange` 为例:

```js
if(oSession.url.IndexOf(".js")>-1){
  oSession["ui-color"] = "orange";
}
```

![](./media/fiddler/fiddler-config.png)

### 抓包

如果需要抓取本机请求，只需要启动程序并确保左下角为 `Capturing` 状态即可:

![](./media/fiddler/fiddler-cap.png)

### 替换文件(常用来替换线上 js)

工作中难免遇到很大的一个项目且已经上线，当其中某一部分出现问题，

线下又无法看到修改后的效果，更不可能在不知道效果的情况下就上线然后看效果是否符合预期，

然后如果不符合预期就重复上线，这样很大弊端就是增加了各个小组的工作量，且重复工作；

而且在不知道代码具体效果的情况鲁莽上线会造成的风险也是未知的；所以办法就是使用本地代理的方法替换修改的文件；流程如下:

![](./media/fiddler/fiddler-replace.png)

- `演示结果:`

![](./media/fiddler/fiddler-replace2.png)

### 修改包返回结果(断点)

- 开始断点捕获数据, `Rules` —> `automatic Breakpoints` -> `After Response`

![](./media/fiddler/fiddler-res.png)

- 放开断点

这个时候我在软件左下角命令行中输入 `go` 命令回车执行放行，直到我要的接口:

![](./media/fiddler/fiddler-res-go.png)

- `去掉压缩`

![](./media/fiddler/fiddler-res2.png)

![](./media/fiddler/fiddler-res3.png)

- `修改内容`

![](./media/fiddler/fiddler-res4.png)

- `重新压缩`

![](./media/fiddler/fiddler-res5.png)

- `小结`

`Transformer` 记住他的编码格式，

默认下 `chunked Transfer-Encoding` 是选中的，

去掉之后下方 `HTTP Compression` 选中在 `GZIP Encoding` 上的，没有的话最好，要记住选项，

我们在这里统一勾选 `no Compression` 意思是不压缩，如果不点你的代码没办法修改是乱码的。

然后点击 `Textview` 可以修改了

修改完之后又要点回来的，重新压缩。

### 抓 HTTPS 包

打开 `Fiddler` -> `Tools` -> `Fiddler Options` -> 选中 `"Decrpt HTTPS traffic"` -> `安装证书` -> `Fiddler 就可以截获 HTTPS 请求`

![](./media/fiddler/fiddler-https1.png)

![](./media/fiddler/fiddler-https2.png)

![](./media/fiddler/fiddler-https3.png)

![](./media/fiddler/fiddler-https4.png)

### 手机抓包步骤1-设置允许远程

打开 `Fiddler` -> `Tools` -> `Fiddler Options` -> 选中 `"Allow remote computers to connect"`.  

是允许别的机器把 `HTTP/HTTPS` 请求发送到 `Fiddler` 上来.

![](./media/fiddler/fidder-remote.png)

### 手机抓包步骤2-iOS 安装证书

**安装 Fiddler的 机器，跟 iPhone 必须在同一个网络里(WIFI)， 否则 iPhone 不能把 HTTP 发送到 Fiddler 的机器上来**。

- `查看电脑 IP 地址`

![](./media/fiddler/fiddler-ios1.png)

- `iPhone 的 WIFI 设置代理`, 然后 `访问浏览器访问 IP 加端口`

![](./media/fiddler/fiddler-ios2.png)
![](./media/fiddler/fiddler-ios3.png)

- `安装证书`

![](./media/fiddler/fiddler-ios4.png)
![](./media/fiddler/fiddler-ios5.png)

![](./media/fiddler/fiddler-ios6.png)
![](./media/fiddler/fiddler-ios8.png)

![](./media/fiddler/fiddler-ios13.png)

![](./media/fiddler/fiddler-ios12.png)

### 手机抓包-iOS 开启证书

`iPhone` -> `通用` -> `关于本机` -> `证书信任设置` -> 开启 `DO_NOT_TRUST_FiddlerRoot`

- `未开启证书, 访问 HTTPS 站点异常`

![](./media/fiddler/fiddler-ios10.png)

- `开启证书`, `再访问, 正常`

![](./media/fiddler/fiddler-ios9.png)
![](./media/fiddler/fiddler-ios11.png)

### 开启证书还不行的话, 就考虑其他方式生成证书

证书问题

1.`Windows` 输入`certmgr.msc`，找到当前安装的 `fiddler证` 书，全部删掉

2.下载 `fiddlercertmaker.exe` 生成证书

3.`iOS` 的 `safari` 浏览器打开地址+口号，安装客户端证书

4.在通用——关于手机——证书，打开 `fiddler证` 书权限

5.重启 `fiddler`，正常抓取 `https` 请求

`fiddlercertmaker.exe` 下载地址：`https://pan.baidu.com/s/1hECVUL3kvlsaPNr4KOHsEw`

- 输入 `certmgr.msc`

![](./media/fiddler/fiddler-cert3.png)

- `卸载`

![](./media/fiddler/fiddler-cert.png)

- `下载好后安装`

![](./media/fiddler/fiddler-cert2.png)

参考链接:

- [fiddler 本地代理替换 js 文件](https://blog.csdn.net/weixin_37615202/article/details/76228515?utm_source=copy )

- [fiddlercertmaker](https://blog.csdn.net/xingranhou/article/details/79670802?utm_source=copy  )

- [调试之Fiddler修改返回结果Response](https://www.imooc.com/article/9681)