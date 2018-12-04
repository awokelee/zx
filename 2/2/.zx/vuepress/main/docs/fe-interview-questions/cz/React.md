# 移动App

[谁在用React Native](https://facebook.github.io/react-native/showcase.html)

## 背景介绍
- [网页与web app的区别概念 - 参考](http://3y.uu456.com/bp-7924d27014791711cc791799-1.html)
- Wap：早期手机浏览的网站，因为手机屏幕小，处理能力小，所以需要特殊格式的网页（简陋）
  + 定位：基本内容展示

- Web App：侧重于功能，基于HTML5、JS、CSS开发实现特定功能的应用，依赖于浏览器。

- Native App：是一种基于智能手机本地操作系统如iOS、Android、WP并使用原生编程语言，编写第三方应用程序，也叫本地app。

- Hybrid App（混合模式移动应用）是指介于Web App、native-app这两者之间的app，兼具“Native App良好用户交互体验的优势”和“Web App跨平台开发的优势”。


## 什么是移动App开发

```JS
移动App开发：开发能够运行在移动终端中的应用程序
App `[æp]` 应用程序，全称：`Application`
移动App ：移动端（手机、pad等便携移动设备）中安装的应用程序
常见的移动app：
  微信、手机淘宝、手机京东、QQ。。。
  游戏：王者荣耀、开心消消乐。。。
主流移动设置操作系统：Android、iOS（其他：塞班、WindowPhone）
```

## 移动App的三种开发方式
- Native  ： 安卓（Java）、苹果（Object C、Swift）
- Web     ： JavaScript + HTML + CSS 等相关技术
  + jQuery mobile（适配移动端的UI库）
- Hybrid  ： JavaScript + HTML + CSS 等相关技术，配合原生开发语言

### 三种开发方式对比 - web/native/hybrid
<!-- ![三种开发方式对比 1](./images/Native-Hybrid-Webapp.png) -->
<!-- ![三种开发方式对比 2](./images/三种开发类型的原理.png) -->
<!-- ![三种开发方式对比 3](./images/三种开发类型的对比.png) -->
<!-- ![三种开发方式对比 3](./images/native、web、hybridapp的对比.png) -->
- [Web App、Hybrid App与Native App的设计差异](http://www.woshipm.com/pd/123646.html)

### B/S和C/S的说明（补充）
- WebApp：所有的页面和其他的资源（js、css、img、字体）全部存储与服务器中
  + 缺点：受限于网络
  + 模式：BS（Browser Server）
- NativeApp：所有的资源几乎都是存储与本地的（应用中的资源直接从本地获取，速度更快）
  + 模式：CS（Client Server）

### WebApp
- 移动端 - [淘宝移动端](https://m.taobao.com/#index)
- PC端  - [百度脑图](http://naotu.baidu.com/)、web邮箱、webQQ等
- 优点：开发成本低、不用下载客户端（浏览器就能打开）、更新无需通知用户、不需要手动升级、跨平台
  + 可以运行在 PC、安卓、iOS、Pad、watch 等各种终端
- 缺点：用户体验稍差、无法获取系统级别的通知或提醒、设计受限制诸多

### NativeApp
- 优点：完美的用户体验、性能高且稳定、访问本地资源（通讯录，相册）、拥有系统级别的贴心通知或提醒
- 缺点：不能跨平台、开发成本高（不同平台有不同的开发语言和界面适配）、维护成本高（例如一款App已更新至V5版本，但仍有用户在使用V2， V3， V4版本，需要更多的开发人员维护之前的版本）、更新缓慢，根据不同平台，提交–审核–上线 等等不同的流程，需要经过的流程较复杂

### HybridApp
- 优点：跨平台、性能与原生差别不大、小更新无需重装
- 缺点：不适合开发游戏，受限于技术，网速，等等很多因素


## 为什么要学混合App开发
- 1 整合前端技术，接触前沿技术，接触原生开发
- 2 快速开发，一份代码多终端共用
- 3 需求量大，收入高
- 4 可以购置一批吊炸天的设备（装X必备）


## 前端混合App开发框架

### React.js 和 ReactNative
- [React.js 官网](https://facebook.github.io/react/)
- [RN 官网](http://facebook.github.io/react-native/)
- [RN 中文网](http://reactnative.cn/docs/0.48/getting-started.html)

### Vue.js 和 Weex
- [Vue 中文官网](https://cn.vuejs.org/)
- [Weex 文档](http://weex.apache.org/cn/guide/index.html)
- [Weex github地址](https://github.com/apache/incubator-weex)

### Angular.js 和 Ionic
- [Angular1官网](https://angularjs.org/)
- [Angular2官网](https://angular.io/)
- [Ionic 中文网](http://www.ionic.wang/)
- [Ionic 英文官网](http://ionicframework.com/getting-started/)

```
Ionic是一款基于angularjs的html5移动app开发框架，打包功能是基于Phonegap/Cordova的
Phonegap就是一款可以打包并且可以让js调用原生的移动app框架，可以独立开发app

phonegap与cordova 移动开发平台：
Cordova是贡献给Apache后的开源项目，是从PhoneGap中抽出的核心代码，是驱动PhoneGap的核心引擎。你可以把它们的关系想象成类似于Webkit和Google Chrome的关系。---摘自百度百科
```

### HBuilder + MUI
- [认识HTML5+](http://www.html5plus.org/#home)
  + HTML5+是一个产业联盟，它有一些互联网成员，专门在中国推广HTML5
  + HTML5不具备操作移动端设备API的功能，但是通过HTML5+提供的JS扩展就可以操作原生API
- [HTML5+ 说明](http://ask.dcloud.net.cn/article/89)
- [MUI开发](http://www.cnblogs.com/devilyouwei/p/6793609.html)

--- 

## 使用HBuilder生成安卓应用（在线）
- [HBuilder官网](http://www.dcloud.io/)

### 在线打包步骤
- 说明：HBuilder工具是在线生成安装包的，所以本地不需要配置安卓的开发环境
  + HBuilder工具，能够将本地的文件（html / css / js）提交到Hbuiler的服务器中在服务器中完成打包
- 1 文件 -> 新建 -> 移动App
- 2 在项目根目录上右键 -> 发行 -> 发行为原生安装包
- 3 HBuilder会自动帮我们打包，并且把打包好的移动App下载到当前项目下的 unpackage 目录中的 release 中，然后，直接丢到手机中安装就可以了

## 移动App开发环境配置【重点】
- 线上打包缺点：必须依赖与网络，没有网络的情况下就无法正常进行打包
- 本地打包：配置混合App项目需要的环境，实现本地打包构建

### 两种开发环境
- **注意：推荐按照官网中的步骤安装！！！**

- 安卓（android）
- 苹果（iOS）：需要macOS(操作系统)，参考RN官网环境安装步骤
- [RN - Building Projects with Native Code](https://facebook.github.io/react-native/docs/getting-started.html)
- [RN 中文网](http://reactnative.cn/docs/0.48/getting-started.html#content)

## 安卓（android）环境配置 - window系统
- 说明：以下是离线安装方式

```
在 Windows系统下配置安卓开发环境需要100步：
1 安装 `java jdk`
2 配置 `JAVA_HOME` 系统环境变量
3 安装 `node`、`git`
4 安装 `python`
5 安装 `Android SDK Manager`
6 配置 `ANDROID_HOME` 系统环境变量
```

### 安装 java jdk（Java SE Development Kit）
- 注意：jdk版本需要 1.8.x 及其以上
1. 根据操作系统位数（32或64）安装对应版本的jdk，采用`默认安装路径`即可
2. 新建**系统环境变量**`JAVA_HOME`，值为`C:\Program Files (x86)\Java\jdk1.8.0_112`，也就是安装JDK的根目录
3. 修改**系统环境变量**`Path`，在`Path`之后新增`%JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;`
4. 新建**系统环境变量**`CLASSPATH`，值为`.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`
5. 保存所有的系统环境变量，同时退出系统环境变量配置窗口，然后运行cmd命令行工具，输入`javac`，如果能出现javac的命令选项，就表示配置成功

### 安装Node.js环境
- **注意：不推荐使用npm或cnpm，推荐使用yarn！！！**
- 注意：需要安装最新的长期稳定版本（4.x 以及以上），不要用实验版本
- 验证：在终端中，输入`node -v` 出现版本号说明安装成功
- 修改npm仓库地址（淘宝镜像）：（或使用科学上网工具）

```bash
# 修改 npm 仓库地址为：淘宝镜像地址
# 作用：提高加载速度
# 推荐使用 nrm 管理npm的仓库地址
npm config set registry https://registry.npm.taobao.org --global

# 安装 cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### 安装Python环境
- 注意：**只支持 Python2.× 版本**
- 注意：勾选安装界面上的`Add Python to path`，自动添加到系统环境变量
- 验证：在终端中，输入`python --version`，检查是否成功安装了python
  + `ctrl + d`退出 pyhton 运行环境

### 安装Git

### 安装C++环境（一般不需要）
- 大多数情况下操作系统自带`C++`环境，不需要手动安装`C++`环境；
- 如果运行报错，则需要手动安装`Visual Studio`中的`C++`环境；

### 安装 Android SDK Manager 配置环境
1. 安装`installer_r24.3.4-windows.exe`，安装到C盘下的android目录

2. 打开`C:\andriod\platforms`，将`android-25`、`android-23`压缩包解压后，放到`platforms`文件夹下（react-native 必须依赖这个）

3. 解压`platform-tools`，放到`C:\andriod\`根目录下
4. **tools文件夹不解压覆盖也行；**~~解压`tools`，放到`tools`文件夹下~~

5. 解压`build-tools_r23.0.1-windows.zip`(react-native必须依赖这个)、`build-tools_r23.0.2-windows.zip`(weex必须依赖这个)和`build-tools_r23.0.3-windows.zip`，并将解压出来的文件夹，分别改名为版本号`23.0.1`、`23.0.2`和`23.0.3`；  在`C:\andriod`根目录中新建文件夹`build-tools`，并将以上三个文件夹，放到`build-tools`文件夹下

6. 在`C:\andriod`根目录中，新建`extras`文件夹，在`extras`文件夹下新建`android`文件夹；解压`m2responsitory`文件夹和`support`文件夹，放到新建的`extras\android`文件夹下

7. 配置安装环境变量：在**系统环境变量**中新建`ANDROID_HOME`，值为 android `SDK Manager.exe` 所在路径`C:\android`。在系**统环境变量**`Path`中新增`%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools;`


### 环境安装问题汇总
- 1 计算机名为英文名称，如果为中文可能会报错

```
修改方式：
计算机 -> 属性 -> 高级系统设置 -> 计算机名 -> 更改... -> 计算机名
```

---

## ReactNative快速打包

### 安装
- 安装：`npm i -g yarn react-native-cli`
- `Yarn`：Facebook提供的替代npm的工具，可以加速node模块的下载，RN项目初始化脚手架在初始化的时候，会使用yarn来下载包
- `react-native-cli`：RN的脚手架工具，用于执行创建、初始化、更新项目、运行打包服务（packager）等任务

### 打包RN项目步骤
1. 运行`react-native init AwesomeProject` 创建React-Native项目
  + 说明：`AwesomeProject` 是RN项目的名称（任意的字母数字下划线）
  + **注意：项目所在目录路径中不要带有中文！！！**
2. 运行`cd AwesomeProject` 切换到项目根目录中
3. 运行`react-native run-android` 打包编译安卓项目，并部署到模拟器或开发机中

```
说明：
1 在cmd中，运行 `adb devices` 命令，查看接入电脑的设备列表，确保手机链接到电脑中
2 打包好的apk.debug文件在：`android\app\build\outputs\apk`目录下
3 如果 `adb` 命令不可用，需要安装驱动：`adbdriver`
```

### 打包成功
- 运行命令`react-native run-android`命令后，会自动打开一个新的窗口
- 这个窗口不要关闭，它的作用：实时编译（将我们写的 ReactNative 代码，实时的打包到 安卓应用程序中）


### 真机调试注意点
- 注意1：手机需要开启：`开发者模式` 和 `USB调试`，并授权USB调试
- 注意2：出现是否允许出现在其他应用之上提示时，勾选允许

```
开启手机开发者模式：

关于手机 -> 版本号（点击多次打开 开发者模式）
```

### 打包问题汇总
- [RN入坑指南 参考文档](http://www.open-open.com/lib/view/open1477469117948.html)

- 1 **项目所在路径以及项目名称中不要带有中文**
- 2 **只有通过数据线链接手机以后，才能将应用打包的手机中，否则，会导致打包到移动设备失败**
- 3 **有些手机系统，在第一次打包RN项目到手机时会出现：是否允许出现在其他应用上 等类似的提示，点击允许即可（作用：展示 摇一摇 的悬浮框）**
  + 在手机： 设置 -> 应用 -> 打包的应用 -> 出现在其他应用上（勾选）才能看到摇一摇的黑框
- 4 **有些手机系统无法使用摇一摇的功能，此时，可以点击手机的菜单键来打开 黑框（reload）**

- 5 **注意：目前npm5版本存在安装新库时会删除其他库的问题，导致项目无法正常运行。可以使用yarn代替npm操作**
- 6 **注意：通过npm下载包的时候如果一直失败，就将 C:\Users\登录用户\AppData\Roaming目录中的 npm-cache 文件夹删除（这个文件夹是 npm 下载包的缓存文件夹）**

- 7 **could not connect to development server**  

```
通过wifi连接手机步骤：

1 在 cmd.exe 中通过 `ipconfig` 获取到本机的无线网ip地址
2 手机摇一摇，在悬浮框中点击 `Dev Settings` 进入
3 找到 `Debug server host & port for device` 输入第1步找到的 ip地址:8081，点击确定
4 手机摇一摇，重新载入
```

- 8 **Could not get BatchedBridge, make sure your bundle is packaged correctly**  

```
解决方案：在终端中，进入到项目的根目录，执行下面这段命令行：
`react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`

运行之前，需要确保`android/app/src/main/`目录下有`assets`文件夹，如果没有，手动创建之~，再运行上面的命令；
```


## Weex快速打包
- [Weex快速打包](http://weex.apache.org/cn/guide/tools/toolkit.html)
- 说明：Weex 官方提供了 weex-toolkit 的脚手架工具来辅助开发和调试

### 打包步骤
1. 运行`npm i -g weex-toolkit` 全局安装Weex
2. 运行`weex create projectName` 初始化Weex项目
3. `cd projectName` 进入到项目根目录，运行`weex platform add android`安装android模板，首次安装模板时，等待时间较长
4. 打开`android studio`中的`安卓模拟器`，或者将`启用USB调试的真机`连接到电脑上，运行`weex run android`，打包部署weex项目
5. 部署完成，查看项目效果

--------

### Yarn
- [yarn 官网](https://yarnpkg.com/zh-Hans/)
- [yarn 快速上手](https://yarnpkg.com/zh-Hans/docs/usage)
- [yarn vs npm](http://web.jobbole.com/88459/)
- 设置yarn仓库镜像：

```
yarn config set registry https://registry.npm.taobao.org --global

yarn init               初始化package.json文件
yarn add vue            作为项目依赖安装
yarn add webpack -D     做为项目开发依赖安装
yarn install / yarn     安装package.json中的所有包
yarn global add gulp    全局安装
```

## 为什么要用React
- 1 使用`组件化`开发方式，符合现代Web开发的趋势
- 2 技术成熟，社区完善，配件齐全，适用于大型Web项目
- 3 由Facebook专门的团队维护，技术支持可靠
- 4 ReactNative - Learn once, write anywhere: Build mobile apps with React
- 5 使用方式简单，性能非常高，支持服务端渲染
- 6 React非常火，从技术角度，可以满足好奇心，提高技术水平；从职业角度，有利于求职和晋升，有利于参与潜力大的项目

## React 背景介绍
- [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html)
React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设 [Instagram](https://www.instagram.com/) 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。

## 什么是React
- A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
  + 用来构建UI的 JavaScript库
- [React 官网](https://facebook.github.io/react/)
- [React 中文文档](https://discountry.github.io/react/docs/hello-world.html)
- [React 中文社区](http://react-china.org/)

### 说明
- [为什么要创建React](https://facebook.github.io/react/blog/2013/06/05/why-react.html)
- **React 不是一个 MVC 框架，仅仅是视图（V）层的库**
> React 是一个用来构建可组合用户界面（UI）的库（library）。它鼓励创建可复用的UI组件，用来呈现数据的变化。

- **React 不使用模板，使用JSX 创建组件**
> React使用JSX格式的组件  
> 1 JavaScript 在构建抽象结构时，灵活、功能强大 的编程语言
> 2 将标记与其相应的视图逻辑统一起来，使视图更容易扩展和维护  
> 3 在JavaScript中使用具有特殊理解能力的标记和内容，代替了手动字符串连接，减小了XSS漏洞可能性

- **React 通过diff算法实现高效的视图更新**
> 当组件被初始化，render()方法被调用，生成一个视图的轻量级代表（对象描述视图）。通过这个代表产生一个字符串格式标记，然后，注入到文档中。  
> 当数据变化时，render()方法被重新调用。为了高效的更新，React对比上一次调用返回的内容和本次调用返回的内容，生成一个两次变化的最小集合，并将变化更姓到DOM中  

- **HTML仅仅是个开始**
> JSX --TO--> EveryThing

- JSX --> HTML
- JSX --> 苹果或安卓中的组件（XML）
- JSX --> VR
- JSX --> 物联网

### 特点
- `Component-Based`：基于组件，简单组件构成复杂组件
- 使用`JSX`能够快速编写组件
  + 这些语法将来会被转化为对应的js方法
  + 例如：`<div></div>` ---> `React.createElement('div')`
- 每一个`JSX对象`，对应一个JS对象，可以在JSX中使用js代码
- Declarative：采用 声明式视图（类似于vue或ng），简单、高效响应用户操作
- 性能高的让人称赞

## React中的核心概念
- 1 虚拟DOM（Virtual DOM）
- 2 Diff算法（虚拟DOM的加速器，提升React性能的法宝）

## 虚拟DOM（Vitural DOM）
> React将DOM抽象为虚拟DOM，虚拟DOM其实就是用一个对象来描述DOM，通过对比前后两个对象的差异，最终只把变化的部分重新渲染，提高渲染的效率

- [如何实现一个 Virtual DOM 算法](https://github.com/livoras/blog/issues/13)
- [理解 Virtual DOM](https://www.zhihu.com/question/31809713)
- [React Fiber架构 - 研发中](https://swenyang.gitbooks.io/translation/content/react/fiber.html)

### 传统页面加载过程
- 1 请求页面
- 2 解析页面中的HTML标签，在内存中生成DOM树
- 3 渲染DOM树到页面中（慢）
- 4 当数据发生变化时，重新渲染整个DOM树（慢）

### VituralDOM的处理方式
- 1 用 JavaScript 对象结构表示 DOM 树的结构，然后用这个树构建一个真正的 DOM 树，插到文档当中
- 2 当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异
- 3 把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了

## Diff算法（React 官方文档）
- [Reconciliation diff](https://facebook.github.io/react/docs/reconciliation.html)
- [diff算法 - 中文文档](https://discountry.github.io/react/docs/reconciliation.html)

> 当你使用React的时候，在某个时间点 render() 函数创建了一棵React元素树，
> 在下一个state或者props更新的时候，render() 函数将创建一棵新的React元素树，
> React将对比这两棵树的不同之处，计算出如何高效的更新UI（只更新变化的地方）

```
了解：
有一些解决将一棵树转换为另一棵树的最小操作数算法问题的通用方案。然而，树中元素个数为n，最先进的算法 的时间复杂度为O(n3) 。
如果直接使用这个算法，在React中展示1000个元素则需要进行10亿次的比较。这操作太过昂贵，相反，React基于两点假设，实现了一个O(n)算法，提升性能：
```

- React中有两种假定：
  + 1 **两个不同类型的元素会产生不同的树**
  + 2 **开发者可以通过key属性指定不同树中没有发生改变的子元素**

```
React根据这两种假定，来对比两棵树的不同之处，
首先，React会比较两个根元素，类型不同比较方式也不同，

1 不同类型的元素
2 相同类型的DOM元素
3 相同类型的组件元素

以下是比较细节：
```

### 不同类型的元素
> 如果两棵树的根元素类型不同，React会销毁旧树，创建新树  
> 销毁树的时候，旧树中的DOM节点被破坏，组件的实例接受到：componentWillUnmount()  
> 创建新树的时候，新的DOM节点插入到DOM中，组件的实例接受到：componentWillMount() 和 componentDidMount()。  

- 注意：任何与旧树相关的状态都会消失

```js
// 旧树
<div>
  <Counter />
</div>

// 新树
<span>
  <Counter />
</span>

执行过程：destory Counter -> insert Counter
```

### 相同类型的DOM元素
- 对于类型相同的React DOM 元素，React会对比两者的属性是否相同，只更新不同的属性
- 当处理完这个DOM节点，React就会递归处理子节点。

```js
// 旧
<div className="before" title="stuff" />
// 新
<div className="after" title="stuff" />
只更新：className 属性

// 旧
<div style={{color: 'red', fontWeight: 'bold'}} />
// 新
<div style={{color: 'green', fontWeight: 'bold'}} />
只更新：color属性
```

### 相同类型的组件元素
> 当一个组件更新了，组件的实例与保持一致，所以，组件的状态在渲染过程中也得到了保持。  
> React更新组件实例的props，匹配新的元素，并且调用组件实例的 componentWillReceiveProps() 和 componentWillUpdate() 方法。  
> 接下来，render() 方法被调用，diff算法就会比较 上一次的结果和新的结果

- 概述：状态不变，props发生变化，React重新渲染产生新树和老树对比


### 递归子节点
> 默认情况下，当在一个DOM节点的子节点中递归的时候，React同时遍历两个集合中的子节点，然后生成两者的不同之处。  

- 1 当在子节点的后面添加一个节点，这时候两棵树的转化工作执行的很好。

```js
// 旧
<ul>
  <li>first</li>
  <li>second</li>
</ul>

// 新
<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>

执行过程：
React会匹配新旧两个<li>first</li>，匹配两个<li>second</li>，然后添加 <li>third</li> tree
```

- 2 但是如果你在开始位置插入一个元素，那么问题就来了：

```js
// 旧
<ul>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

// 新
<ul>
  <li>Connecticut</li>
  <li>Duke</li>
  <li>Villanova</li>
</ul>

执行过程：
React将改变每一个子节点，而非保持 <li>Duke</li> 和 <li>Villanova</li> 不变
```

### key 属性
> 为了解决以上问题，React提供了一个 key 属性。当子节点带有key属性，React会通过key来匹配原始树和后来的树。

```js
// 旧
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

// 新
<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
执行过程：
现在 React 知道带有key '2014' 的元素是新的，对于 '2015' 和 '2016' 仅仅移动位置即可
```

- 推荐：在遍历数据时，推荐在组件中使用 key 属性：`<li key={item.id}>{item.name}</li>`
- 注意：**key只需要保持与他的兄弟节点唯一即可，不需要全局唯一**
- 注意：**尽可能的减少数组index作为key，数组中插入元素的等操作时，会使得效率底下**

### 最佳实践：
- 1 保持完整的结构
- 2 使用相同类型的组件
- 3 key应该是稳定、可预测并且唯一的。不要使用 Math.random() 这样的key，会造成重新创建，影响性能


---

## Diff算法 （其他资料，可供参考）
- [不可思议的 react diff](https://zhuanlan.zhihu.com/p/20346379)
- [React diff 算法](https://github.com/zmmbreeze/blog/issues/9)

### 三种 diff 方式
- Tree diff
- Component diff
- Element diff

### Tree diff
> 对树进行分层比较，两棵树只会对同一层次的节点进行比较。这样只需要对树进行一次遍历，便能完成整个 DOM 树的比较。  
<!-- ![Tree diff](./images/tree-diff.png) -->

```
1 只会对相同颜色方框内（同级）的DOM节点进行比较，即同一父节点下的所有子节点
2 当发现节点已经不存在，则该节点及其子节点会被完全删除掉，不会用于进一步的比较
```

<!-- ![Tree diff demo](./images/tree-diff-1.png) -->

- 执行过程：create A -> create B -> create C -> delete A
- 提示：**保持稳定的DOM结构，会提升性能**

### Component diff
> 不同组件之间的对比  
<!-- ![Component diff](./images/component-diff.png) -->
- 执行过程：delete D -> create G

### Element diff
> 同一层级中元素之间的对比  

```
三种节点操作：
1 INSERT_MARKUP（插入）
2 MOVE_EXISTING（移动）
3 REMOVE_NODE（删除）

INSERT_MARKUP：新的 component 类型不在老集合里，需要对新节点执行插入操作。

MOVE_EXISTING：老的集合包含新的 component 类型，就需要做移动操作，可以复用以前的 DOM 节点。

REMOVE_NODE：老的 component 不在新集合里的，需要执行删除操作 或者 老的 component 类型在新集合里也有，但对应的 element 不同则不能直接复用和更新，需要执行删除操作
```

<!-- ![Element-diff 无key](./images/Element-diff-1.png) -->
- 执行过程：B != A，则创建并插入 B，删除 A；以此类推，创建并插入 A、D、C，删除 B、C、D

<!-- ![Element-diff 有key](./images/Element-diff-2.png) -->
- 执行过程：B、D 不做任何操作，A、C 进行移动操作

---


## React的基本使用
- 安装：`npm i -S react react-dom`
- `react`：创建组件的，包括组件的生命周期，比如：创建虚拟DOM
- `react-dom`：进行DOM操作的模块，比如：把创建的虚拟DOM，渲染到页面上
- `Hello React` 案例：

```js
// 1. 导入 react
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建 虚拟DOM
const divVD = React.createElement('div', {
  title: 'hello react'
}, 'Hello React！！！')

// 3. 渲染
ReactDOM.render(divVD, document.getElementById('app'))
```

### API说明
- createElement()：知道即可
- render()

```js
// https://facebook.github.io/react/docs/react-api.html
// 作用：根据指定的参数，创建react对象
//
// 第一个参数：指定创建虚拟DOM的类型
//  类型：string 或者 react组件
//  1 任意字符串类型的标签名称，比如：'div' / 'span'
//  2 react组件类型，比如：<Welcome></Welcome>
// 第二个参数：指定元素自身的属性
//  类型：对象或者null
// 第三个参数：当前元素的子元素
//  类型：string 或者 createElement() 的返回值
// 返回值：react对象
React.createElement(
  type,
  [props],
  [...children]
)

// https://facebook.github.io/react/docs/react-dom.html
// 作用：渲染react元素
// 第一个参数：指定要渲染的react对象
// 第二个参数：指定渲染到页面中的容器（DOM对象）
// 第三个参数：回调函数
ReactDOM.render(
  element,
  container,
  [callback]
)
```

## React组件
> React 组件可以让你把UI分割为独立、可复用的片段，并将每一片段视为相互独立的部分。

- 组件是由一个个的HTML元素组成的
- 概念上来讲, 组件就像JS中的函数。它们接受用户输入（`props`），并且**返回**一个React对象，用来描述展示在页面中的内容
<!-- - ![页面组件化](./images/页面组件化.png) ![页面抽象组件](./images/页面抽象组件.png) -->


## React创建组件的两种方式
- 1 调用 React.createElement() 创建
- 2 通过 JSX 创建

- 注意：JSX的方式，最终会被编译为 createElement() 方法
- 推荐：**使用 JSX 的方式创建组件**

### React创建组件 - createElement()
- 注意：不推荐使用这种方式创建组件，代码编写不友好，太复杂

```js
var dv = React.createElement(
  "div",
  { className: "shopping-list" },
  React.createElement(
    "h1",
    null,
    "Shopping List for ",
    props.name
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Instagram"
    ),
    React.createElement(
      "li",
      null,
      "WhatsApp"
    )
  )
)
// 渲染
ReactDOM.render(dv, document.getElementById('app'))
```

### React创建组件 - JSX（推荐使用！）
- 安装：`npm i -D babel-preset-react` （依赖与：babel-core/babel-loader）
- 1 通过 JS函数 创建（无状态组件）
- 2 通过 class 创建（有状态组件）
> 注意：JSX的语法需要通过 babel-preset-react 编译后，才能被解析执行

#### JSX单独使用
```js
var dvVD = (
  <div title="标题" className="cls container">Hello JSX!</div>
)
```

#### JavaScript函数创建
- 注意：1 函数名称必须为大写字母开头，React通过这个特点来判断是不是一个组件
- 注意：2 函数必须有返回值，如果不需要返回值，就`return null`
- 注意：3 返回的react元素，只能有一个根元素
- 注意：4 JSX中注释的写法：`{/* 中间是注释的内容 */}`
- 注意：5 组件内部的**HTML元素**中，添加自定义属性需要通过`data-*`的方式

```js
function Welcome(props) {
  return (
    {/* 注释的写法 */}
    <div className="shopping-list">
      <h1>Shopping List for {props.name}</h1>
      <ul>
        <li>Instagram</li>
        <li>WhatsApp</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<Welcome />, document.getElementById('app'))
```

#### class创建
- 注意：基于 `ES6` 中的class，需要配合 `babel` 将代码转化为浏览器识别的ES5语法
  + 注意：class 中的一些新的语法需要依赖于 stage-0 这个包进行编译， es2015 是无法处理
  + `static abc = 123` 中的 = 需要 stage-0 才能识别，es2015无法识别
- 安装：`npm i -D babel-preset-es2015 stage-0`

```js
class ShoppingList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
        </ul>
      </div>
    );
  }
}
```

## 给组件传递数据 - 父子组件传递数据
- 组件中有一个 `只读的对象` 叫做 `props`，无法给props添加属性
- 获取方式：函数参数 `props`
- 作用：将传递给组件的属性转化为 `props` 对象中的属性
- 注意：`class`是ES6中的关键字，需要用`className`来代替；
  + 类似的还有：`for`用`htmlFor`来代替

```js
function Welcome(props){
  // props ---> { username: 'zs', age: 20 }
  return (
    <div>
      <div>Welcome React</div>
      <h3>姓名：{props.username}----年龄是：{props.age}</h3>
    </div>
  )
}

// 给 Hello组件 传递 props：username 和 age
ReactDOM.reander(<Hello username="zs" age={20}></Hello>, ......)
```

## 封装组件到独立的文件中
```js
// ./components/Hello2.js

// 1. 引入React模块
import React from 'react'

// 2. 使用function构造函数创建组件
function Hello2(props){
  return (
    <div>
      <div>这是Hello2组件</div>
      <h1>这是大大的H1标签，我大，我骄傲！！！</h1>
      <h6>这是小小的h6标签，我小，我傲娇！！！</h6>
    </div>
  )
}

// 3. 导出组件
export default Hello2

// app.js
// 使用组件：
import Hello2 from './components/Hello2'
```

## props和state

### props
- 作用：用来给组件传递数据，一般用在父子组件之间
- 使用：React把传递给组件的属性转化为一个对象并交给 `props`
- 特点：`props`是只读的，无法给`props`添加属性，或修改属性的值

```js
// props 是一个包含数据的对象参数，不要试图修改 props 参数
// 返回值：react元素
function Welcome(props) {
  // 返回的 react元素中必须只有一个根元素
  return <div>hello, {props.name}</div>
}

class Welcome extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

### state
- 作用：用来给组件提供`组件内部`使用的数据
- 注意：只有通过`class`创建的组件才具有状态
- 注意：**状态是私有的，完全由组件来控制**
- 注意：不要在 `state` 中添加 `render()` 方法中不需要的数据，会影响渲染性能！
  + 可以将组件内部使用但是不渲染在视图中的内容，直接添加给 this
- 注意：不要在 `render()` 方法中调用 setState() 方法来修改`state`的值
  + 但是可以通过 `this.state.name` 方式设置state（不推荐）

```js
class Hello extends React.Component {
  constructor() {
    this.state = {
      gender: 'male'
    }
  }

  render() {
    return (
      <div>性别：{ this.state.gender }</div>
    )
  }
}
```

## JSX的语法转化过程
```js
// JSX
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
)

// JSX -> createElement
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)

// React elements: 使用对象的形式描述页面结构
// Note: 这是简化后的对象结构
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world'
  }
}
```


## 评论列表案例
- 巩固有状态组件和无状态组件的使用
- 两个组件：`<CommentList></CommentList>` 和 `<Comment></Comment>`

```js
[
  { user: '张三', content: '哈哈，沙发' },
  { user: '张三2', content: '哈哈，板凳' },
  { user: '张三3', content: '哈哈，凉席' },
  { user: '张三4', content: '哈哈，砖头' },
  { user: '张三5', content: '哈哈，楼下山炮' }
]

// 属性扩散
<Comment {...item} key={i}></Comment>
```

### style样式
```js
// 1. 直接写行内样式：
<li style={{border:'1px solid red', fontSize:'12px'}}></li>

// 2. 抽离为对象形式
var styleH3 = {color:'blue'}
var styleObj = {
  liStyle:{border:'1px solid red', fontSize:'12px'},
  h3Style:{color:'green'}
}

<li style={styleObj.liStyle}>
  <h3 style={styleObj.h3Style}>评论内容：{props.content}</h3>
</li>

// 3. 使用样式表定义样式：
import '../css/comment.css'
<p className="pUser">评论人：{props.user}</p>
```

## 相关文章
- [React数据流和组件间的沟通总结](http://www.cnblogs.com/tim100/p/6050514.html)
- [单向数据流和双向绑定各有什么优缺点？](https://segmentfault.com/q/1010000005876655/a-1020000005876751)
- [怎么更好的理解虚拟DOM?](https://www.zhihu.com/question/29504639?sort=created)
- [React中文文档](https://discountry.github.io/react/)
- [React 源码剖析系列 － 不可思议的 react diff](http://blog.csdn.net/yczz/article/details/49886061)
- [深入浅出React（四）：虚拟DOM Diff算法解析](http://www.infoq.com/cn/articles/react-dom-diff?from=timeline&isappinstalled=0)
