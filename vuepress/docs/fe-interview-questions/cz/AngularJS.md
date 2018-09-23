# AngularJS

## AngularJS 介绍

```js
AngularJS 诞生于2009年，由 Misko Hevery 等人创建，后为Google所收购。
是一款优秀的前端JS框架，已经被用于Google的多款产品当中。
```

### 介绍
- AngularJS是一个高级JS框架，简称：`ng`

```
AngularJS是一个用来创建动态web app的结构框架。
使用HTML作为模板语言（angular扩展了HTML，使得HTML具备了原本没有的一些额外功能，类似于模板引擎）
扩展HTML语法来清晰简洁的表达应用程序的组件（表达式）。（指令、自定义指令）
Angular的数据绑定和依赖注入让代码更简洁。
所有这些都是在浏览器中实现，这使得Angular成为任何服务器技术的理想伙伴。

AngularJS让构建前端Web应用变得更加容易，使得前端与服务器技术沟通变得更加容易！
前端：使用指令、表达式 扩展了HTML
后端：内置 ajax、jsonp 降低与服务器的沟通成本
```

### Angular的核心特性
- **双向数据绑定**、**模板**、**指令**、**MVVM**、**依赖注入**

### 核心概念 - 先了解
概念	| 描述
--------|---------------
Module | 包含app不同部分容器，比如：控制器、服务、过滤器、指令来配置 Injector
Template | 带有额外标记的HTML
View | 用户看到的内容（DOM）
Expressions	| 读取scope中的属性和函数
Directives | 自定义属性或自定义标签，用来扩展HTML
Model | 在视图中展示给用户看的数据以及用户交互
Controller | 视图背后的业务逻辑
Scope | model存储的上下文，控制器、指令和表达式都可以访问
Data Binding | 在模型和视图之间同步数据
Service | 可复用的业务逻辑，独立于视图
Filter | 格式化表达式的值
 | 
Compiler | 解析模板、指令和表达式
Dependency Injection | 创建和连接对象和函数
Injector | 依赖注入的容器

### 原则
- **不推荐手动操作DOM，而是操作数据**
- 解放双手，简化了HTML的操作（从DOM中解放出来）, 其底层还是操作DOM
- 如果要在 angular 中操作DOM，就通过 angular 的自定义指令来实现

### 优势
- 最大程度的减少了页面上的 DOM 操作，让 JavaScript 开发专注业务逻辑
- 代码结构更合理，维护成本更低
- 通过简单的指令把页面结构和数据结合
- 通过自定义指令实现组件化编程

### 适用场景
- AngularJS适用于构建 `CRUD` 应用，一般是：单页应用程序


## SPA -单页应用程序
- SPA： `Single Page Application`

```
单页Web应用（single page application，SPA），就是只有一个Web页面的应用，
是加载单个HTML页面，并在用户与应用程序交互时动态更新该页面的Web应用程序。
```

### 优势
- 1 无刷新加载页面，避免了不必要的跳转和重复渲染
- 2 更好的用户体验，让用户在web app感受native app的速度和流畅
- 3 减少了请求体积，节省流量，加快页面响应速度
- 4 可以选择性的保留状态，如音乐网站，切换页面时不会停止播放歌曲

### 传统ajax的劣势
```
1 ajax请求不会留下历史记录
2 用户无法直接通过URL直接进入指定页面
3 ajax对SEO不友好
```

### 劣势
- 不利于SEO，但是有其他解决方案（比如：页面静态化）

### 主要技术点
- 1 ajax
- 2 锚点的使用（window.location.hash #）
- 3 hashchange 事件

### 实现思路
- 监听锚点值变化的事件，根据不同的锚点值，请求相应的数据
- 1 锚点（#）原本用作页面内部进行跳转，定位并展示相应的内容
- 2 NG中，锚点被用作请求不同资源的标识，请求数据并展示内容

## AngularJS的基本使用
- AngularJS 是自动执行的，只需要我们告诉它要做什么，在哪个位置去做

### 使用步骤
- 1 引入 NG 的js文件
- 2 设置 `ng-app` 指令
- 3 给文本框添加 `ng-model` 指令
- 4 给按钮添加 `ng-click` 指令

## directive -指令
- AngularJS 有一套完整的、可扩展的、用来帮助 Web 应用开发的指令集
- 指令是DOM元素上的一些标记，让NG给DOM元素添加一些特殊的行为
- 指令包含：内置指令 和 自定义指令

### 指令是什么
- 将前缀为 `ng-` 的属性称之为指令，其作用是为DOM元素绑定数据、添加事件 等
- 指令的值是一个：表达式

```html
<!-- ng-model 指令 -->
<input type="text" ng-model="userName">
```

### 指令的类型
- 属性（A）、元素（E）、类（C）、注释（M）

### 常用指令

#### ng-app

- 作用：该指令用来启动一个AngularJS应用
- 理解：指定AngularJS应用程序管理的边界，只有在ng-app内部的指令才会起作用

```
ng-app 指令指定了应用的根元素，通常放置在页面的根元素，也可以是任意的元素
例如：body或html标签

应用程序运行时，会自动执行边界内部的其他指令。
标记的范围尽可能小，提高性能

注意：每个页面中可以出现多次 `ng-app` 指令（不推荐！）
如果是多个需要手动引导：`angular.bootstrap()`
```

#### ng-click
- 作用：用来指定DOM元素被点击时执行的事件
- 语法：`ng-click="expression"`

```html
<button ng-click="val + 1"></button>
<button ng-click="fn()"></button>
```

#### ng-model
- 作用：将表单元素与数据绑定在一起，在 input/select/textarea 等表单元素中使用

```
ng-model指令将尝试把属性绑定到当前作用域中。
如果当前作用域中没有该属性，那么AngluarJS会帮我们隐式创建并且添加到当前作用域中。
```

#### ng-init （了解）
- 作用：初始化属性的值
- 语法：`ng-init="uName='Jack'"`


## expression -表达式
- 介绍：是一些JavaScript的代码片段主要被用在插值绑定或者直接作为指令的属性值

```
从JS角度，使用运算符和数据 连接起来的有 结果 的代码就是：表达式
注意：不带分号

例如：
可以使用 console.log(); 打印出来， 或者
    console.log( expression );
可以用作 赋值运算符 的右值
    var test = expression;
```

```js
<p>{ {user.name} }</p>
<p>{{1 + 8}}</p>
<p>{{"hello" + "world"}}</p>

<div ng-click="sayHi()"></div>
```


## AngularJS的执行过程分析
- 示例代码：

```js
<body ng-app>
    <input type="text" ng-model="user.name" />
    <p>Hello {{user.name}}</p>
</body>
```

### 执行过程说明
- 1 `ng-app`告诉AngularJS让它来管理 body内部的代码
- 2 `ng-app`指令创建了一个对象，对象中包含了AngularJS的相关内容，例如：数据模型
- 3 `ng-model`指令查询数据模型中有没有 `user` 对象以及`name`属性，没有则创建
- 4 创建`user`对象以及`name`属性，并初始化`name`值为：空字符串
- 5 表达式 `{ {user.name} }` 从数据模型中查找有没有该数据，如果有就取出来，并展示
- 6 `ng-model`和`{{}}` 中的 `user.name` 指向的是数据模型中同一个数据
- 7 文本框值的变化会导致数据模型的变化，数据模型的变化也会导致表达式的变化

## module -模块
- AngularJS中模块是基础，所有其他内容都必须挂载到一个模块中

```
模块是一个容器包含了应用程序的不同组成部分
    例如：controllers, services, filters, directives, configs 等

模块是应用程序的组成单元，例如：登录模块、注册模块、商品列表模块 等，这些模块
组合在一起构成了一个完整的应用程序。
```

### 创建模块
- 语法：`var app = angular.module(moduleName, []);`
- 作用：创建一个模块，让AngluarJS对整个内容进行模块化管理
- 说明：模块也可以被创建多次，但很少这么做

```js
// 第一个参数：模块名称，字符串
// 第二个参数：数组，用来添加当前模块的依赖项
var app = angular.module("firstApp", ["otherModuleName"]); 
```

### 获取模块
- 语法：`var app = angular.module(moduleName);`
- 作用：获取指定的模块



## controller -控制器
- 需要配合`ng-controller`指令来使用

### 创建控制器
- 语法：`app.controller(ctrlName, callback);`
- 作用：创建一个控制器，控制器必须出现在某个模块下

```js
app.controller("DemoController", function($scope) {
    // $scope 相当于当前的数据模型
});
```

### 控制器的作用
- 1 初始视图中使用的数据，是存储数据的容器
- 2 通过$scope对象把数据模型或函数行为暴露给视图
- 3 监视模型的变化，做出相应的逻辑处理

### $scope的说明
- 1 $scope是控制器和视图之间的桥梁，用于在控制器和视图之间传递数据
- 2 推荐：给 $scope 添加数据应该使用对象，而不是作为其属性
- 2 在控制器中暴露 数据模型（数据和行为），在视图中通过指令或表达式来使用
    + 对比：局部变量
- 4 注意：`$scope`这个名称必须这么写！
- 5 `$scope` 是在控制器创建的时候，被注入进去的

```
1 ng 在使用的时候，页面中只要有 ng-app 就会创建一个 scope，名字是：$rootScope
2 $scope 是 HTML（视图）背后的“男人” ---->
    视图：女人，负责美（展示）
    $scope：男人，负责提供美的资源（数据）
3 所有的控制器都继承自 $rootScope 
4 继承是按照：原型式继承 来实现
5 对于HTML来说，参照原型式继承：子节点继承自父节点
```


## 数据绑定方式

### 双向数据绑定
- 一般通过 `ng-model` 指令实现

```
数据模型的值发生改变，就会导致页面值的改变；页面值的改变，也会导致数据模型中值的改变，
这种相互影响的关系就是双向数据绑定。
```

### 单向数据绑定
- 一般通过 `{{}}` 表达式来实现
- 概述：数据模型的值发生改变，导致页面的值发生改变

## MVC 与 MVVM
- 优势：代码分离（视图代码、控制器代码），职责分离，解耦
- 目的：解决应用程序展示结构、业务逻辑之间的紧耦合关系，实现模块化和复用
- 提高了代码的结构和可维护性，但是不会提高代码执行的效率

### MVC介绍
```
MVC（Model–view–controller）是一种软件架构模式，
把软件系统分为三个基本部分：模型（Model）、视图（View）和控制器（Controller）。

MVC是一种应用程序的设计思想（不是设计模式）
```

- Model 进行数据的存储和数据的处理方法（CRUD）
- View 展示数据
    + 在Angluar中，View指的是在页面中被 `ng-app` 指令包裹的HTML代码
- Controller 是应用程序中处理用户交互的部分
    + 通常控制器负责从视图读取数据，控制用户输入，并向模型发送数据，是数据和视图的桥梁

```
例如：移动端和PC端两个View，共享同一个Model
在MVC设计模式中， Model 响应用户请求并返回响应数据，
View 负责格式化数据并把它们呈现给用户，业务逻辑和表示层分离，
同一个 Model 可以被不同的 View 重用，所以大大提高了代码的可重用性。
```

### MVVM
- 是由 MVC 模式演变出来的！
- MVVM的特点：数据双向绑定

```js
M: model 模型，相当于 User（构造函数）
V: view 视图， ng-app 管理的页面
VM: ViewModel 视图模型，在Angular中就是：$scope
```

#### ViewModel
- 1 $scope实际就是MVVM模式中的VM（视图模型）
- 2 Angular中大量的使用$scope, 盖过了C（控制器）的概念，所以很多人将其称为MVVM框架
- 3 不要深究到底是什么类型（MVC/MVVM），重要的是学会使用。
- 4 `MVW` ===> "Model View Whatever" MV*
- 5 MVVM 首先出现在 微软的WPF 中

## $watch -监听数据
- 语法：`$scope.$watch(attrName, callback, flag);`
- 作用：监听$scope中数据模型的变化，无法监视其他的数据（例如，普通变量）
- 注意：调用$watch方法时，会立即被调用一次。

```js
app.controller("demoController", function($scope) {
    $scope.name = "jack";
    
    // 参数一：表示监听的$scope中的属性名称，类型为：字符串
    // 参数二：表示数据变化执行的回调函数，有两个参数分别是：当前值与变化之前的值
    // 参数三：比较方式，false：表示比较引用；true：表示比较值。默认值为false
    $scope.$watch("name", function(curValue, oldValue) {
        // 只要被监听的数据发生变化，就会指定该回调函数中的代码！

        // 略过第一次执行
        if(curValue === oldValue) return;
    });
});
```

## 启动NG的方式
- 1 通过 `ng-app` 指令启动
- 2 手动启动：`angular.bootstrap(document, ['MyModule'])`

```js
// 等待文档加载完成后，启动 angular
angular.element(document).ready(function() {
    angular.bootstrap(document, ['MyModule']);
});
```

### 多个app
- 注意：不推荐在同一个页面中创建多个 `ng-app`
- 注意：ng只会找到第一个 `ng-app` 并且启动，如果启动其他的，需要手动启动

```html
<div ng-app="FirstApp"></div>
<div ng-app="SecondApp"></div>
```

## 在Angular中使用"jQuery"
- 语法：`angular.element`
- Angular中操作的功能称为：`jqLite`（轻量级jQuery）

### 示例
```js
// 获取 jqLite 对象
var $ = angular.element;
$(document).ready(function() { });
```

### 注意点
- 1 jqLite 中只实现了jQuery的部分功能
- 2 jqLite中选择器只能是DOM对象
- 3 **尽量使用ng中提供的功能**


## AngularJS的一般开发流程
- 1 引入 angular.js 文件
- 2 创建模块：`angular.module('模块名', [])`
- 3 在页面中指定`ng-app="模块名"`，告诉NG管理指定的页面部分
- 4 创建控制器：`模块名.controller('控制器名', function() {})` 
- 5 在页面中指定`ng-controller="控制器名"`，指定管理内容的控制器
- 6 建模（根据页面原型抽象出数据模型），最终得到视图模型（ViewModel）
- 7 将抽象好的数据，添加到 `$scope`中，即：暴露数据和行为给视图
- 8 在页面中使用 `ng-model` 或者 `{{}}` 拿到并绑定数据


## 模块的划分
- 1 按照模块划分（推荐）
- 2 按照文件类型划分

### 按照模块划分
- 根据项目中具体的功能模块进行划分
- 比如：登录模块、注册模块、编写博客 等等不同的功能模块
- 每个功能模块都有自己的 Model View Controller 对应的文件
- 开发过程中，每个人完成一个独立的模块

### 按照文件划分
- 根据文件的功能进行划分
- 将所有的文件放到3个文件夹中：M、V、C


## 控制器（controller） -创建方式

### 低版本（1.2.29之前）
- 使用全局函数创建控制器，会造成：全局污染

### 推断式

```js
angular
    .module('testApp', [])
    .controller('DemoController', function($scope) {
        
    });
```

### 安全方式创建
- 问题：项目上线的时候，会进行代码压缩，$scope会被修改
- 解决：代码会被压缩和混淆，但是 字符串 是不会被压缩的

#### 创建控制器
- 优势：根据指定的参数名直接获取到想要的参数，而非根据参数的顺序

```js
// 第一个参数：控制器的名称
// 第二个参数：数组，最后一项表示回调函数，除此之外其他的参数表示依赖的参数列表
app.controller("DemoController", ["$scope", "$log", function($scope, $log) {
    $log.log("打印日志了");
}]);
```

### 面向对象方式
- 特点：将回调函数当作构造函数来使用，直接使用`this`添加数据
- 也可以通过 `$scope.age` 添加数据
- 注意：在html中使用指令的时候，格式变为：`DemoController as demo`

```js
<div ng-app="testApp" ng-controller="DemoController as demo">
    <p>{{demo.name}}</p>
</div>

<script>
angular.module('testApp', [])
    .controller('DemoController', ['$scope', function($scope) {
        // 添加模型属性
        this.name = 'Jack';
    }]);
</script>
```


## 依赖注入（DI -Dependency injection）
- 目的: 简化传入参数的操作，防止代码压缩导致参数无法使用的问题

### 原理分析
- 1 获取到依赖项(参数)列表
- 2 查找依赖项所对应的对象
- 3 代码执行时，将其注入

```js
/**
 * [提取参数]
 * @param  {Function} fn [回调函数]
 * @return {[type]}      [参数列表数组]
 */
function extractArgs(fn) {
    var r = /^[^\(]*\(\s*([^\)]*)\)/;
    var args = r.exec( fn.toString() );
    return args[1].split(',');
}

extractArgs(function($scope, $log) {});
// 方法的返回值：["$scope", "$log"]
```

- 参考文章：[Angular依赖注入分析](http://www.cnblogs.com/etoah/p/5460441.html)

## 解决页面闪烁问题
- 方式一： 将引用angularjs文件放到head中
- 方式二： 使用 `ng-bind` 指令
- 方式三： 使用 `ng-cloak` 指令

### ng-bind 指令
- 作用：设置元素的 `textContent`，功能类似于：`{{}}`
- 注意：只能在双标签中使用（因为只有双标签才有 textContent 属性）
- 注意： `ng-bind`指令无法输出 html 内容（即：实现innerHTML的功能）

```html
<p ng-bind="name"></p>
```

### ng-cloak 指令
- 作用：用来解决表达式闪烁问题
- 原理：angular在加载完成后会移除所有带有"ng-cloak"的样式
- 使用场景：页面中存在大量表达式

```html
<style>
    .ng-cloak {
        display: none;
    }
</style>

<p class="ng-clock">{{name}}</p>
```

## 常用指令介绍
- 指令：就是一个命令，让 Angular 按照我们预先设置好的规则办事

### ngSanitize 模块
- 语法： `ng-bind-html="<div></div>"`
- 作用： 在页面中输出 html内容
- 注意： 这个模块是一个独立的模块（需要单独下载，并在页面中引用）
- 安装： `npm install angular-sanitize`

```html
<div ng-bind-html="name"></div>
<script src="angular-sanitize.js"></script>
<script>
    // 引入 ngSanitize 模块
    var app = angular.module("testApp", ["ngSanitize"]);
    app.controller("testController", ["$scope", function($scope) {
        $scope.name = "<h1>雨啊雨</h1>";
    }]);
</script>
```

### ng-repeat 指令
- 作用：遍历集合中的数据，为集合中的每条数据创建一个当前元素（即，带有指令的元素）
- 说明：功能类似于 for-in 循环

```html
<ul>
    <li ng-repeat="item in datas"></li>
</ul>

<script>
app.controller('TestController', ['$scope', function($scope) {
    $scope.datas = [
        {name: 'jack', age: 19},
        {name: 'tom', age: 21},
        {name: 'rose', age: 22}
    ];
}]);
</script>
```

- 使用 `track by $index` 解决，数据重复的问题

```html
<ul>
    <li ng-repeat="item in datas track by $index"></li>
</ul>
```

#### ng-repeat 的循环项属性
- `$odd`/`$even`，用来表示当前项的奇偶性，类型为：布尔值
- `$first`/`$last`/`$middle`，用来表示当前项的位置，类型为：布尔值
- `$index`，用来表示当前项的索引号，从0开始计算

```html
<ul>
    <!-- 隔行变色效果的实现 -->
    <li ng-repeat="item in datas" class="{{$odd?'red':'green'}}"></li>
</ul>
```

## ng-class指令
- 语法：`ng-class="expression"`，expression是model中的一个数据或表达式
- 作用：根据 expression 的值，给当前元素添加指定的类

### 对象值
- 示例：`ng-class="{red: $odd, green: $even}"`
- 解释：`ng-class`通过指定一个对象（对象字面量），键为：类名，值为：布尔值
- 作用：判断对象中属性的值，如果为true则添加与该属性名相同的类，否则不添加

### 模型中的变量
- 示例：`ng-class="type"`

```html
<div ng-class="type"></div>
<script>
    app.controller("demoController", ["$scope", function($scope) {
        $scope.type = "red";
    }]);
</script>
```

## 其他指令

### ng-hide/ng-show 显示和隐藏（知道）
- 作用：控制当前元素的展示和隐藏，类型为：布尔值
- 语法： `ng-show="布尔值"`

```html
<div ng-show="isShow"></div>
```

### ng-if
- 作用：控当前元素的显示或隐藏状态，这里的隐藏指的是：页面中不存在当前元素
- 语法：`ng-if="布尔值"`

```html
<div ng-hide="false"></div>
```

### ng-switch (了解)
- 作用：类似于js中的switch-case，但一般配合`ng-switch-when`来使用

```html
<div ng-switch="name">
    <div ng-switch-when="jack">我是jack</div>
    <div ng-switch-when="tom">我是tom</div>
    <div ng-switch-when="rose">我是rose</div>
</div>
<script>
    $scope.name = "jack";
</script>
```

### 表单元素的指令
- `ng-checked`: 复选框是否选中
- `ng-selected`: 下拉框是否选中
- `ng-disabled`: 是否禁用
- `ng-readonly`: 是否只读

- 特点：都是单向数据绑定，只能实现从数据到视图的绑定

```
ng-checked / ng-selected 可以使用 ng-model 代替, 但是要注意ng-model是双向绑定
```

### 事件指令
- 作用：Angular中用来绑定事件的

```
ng-click / ng-submit / ng-dblclick / ng-blur / ng-focus / ng-change
```

## 兼容HTML5标准的指令
- 说明：HTML5中的自定义属性规定使用 `data-` 作为属性的开头，
        angluar中的所有指令完全支持HTML5中的语法

### $location.url()
- 作用：用于获取页面中的锚点值，不包含：`#`
- 注意：`$location` 与 `$scope`一样，都需要通过注入的方式传入

```
URL是： file:///F:/Angular_File/todomvc/index.html#/completed

通过调用 $location.url() 方法获取的是：'/completed'
```

## 过滤器
- 作用：格式化数据/筛选数据的小工具
- 语法：在数据模型的后面加上 `| 过滤器名称: 参数`
- 说明：过滤器通过 `|` 指定，参数通过 `:` 指定

### 格式化数据过滤器
- 作用：对数据进行格式化，以某种指定的格式输出 

#### filter过滤器 -过滤数据
- 作用：对数据进行过滤，从多条数据中筛选出符合规则的数据
- 参数：
    + 基本类型参数：angular会根据参数对数据进行全局匹配
    + 对象类型参数：根据参数对象中的属性对数据进行匹配，只会匹配指定的属性
- 注意：配合`track by`使用的时候，`track by` 要放在最后面

```html
<!-- 取出 completed 属性为：true 的数据 -->
<p ng-repeat="item in data | filter:{completed: true} track by $index"></p>

<script>
app.controller('FilterController', ['$scope', '$filter', 
    function($scope, $filter) {
        $scope.data = [
            {name: '吃饭', completed: true },
            {name: '睡觉', completed: false },
            {name: '豆豆', completed: true }
        ];
    }]);
</script>
```

#### currency 过滤器
- 作用：将数字转化为货币的形式显示

```html
<p>{{12345678.333 | currency: "￥"}}</p>
```

#### date 过滤器
- 作用：将整数形式的日期转化为常用日期形式

```html
<p>{{1412345678901 | date: "yyyy-MM-dd hh:mm:ss"}}</p>
```

#### limitTo 过滤器
- 作用：限制显示的文字个数
- 参数：`:5` 表示展示文字长度为：5，`:2` 表示开始的索引号

```html
<p>{{'是谁在唱歌，温暖了寂寞' | limitTo:5:2}}</p>
```

#### orderBy 过滤器
- 作用：对数据进行排序
- 参数：排序的属性，如果是倒序排列，属性名前加`-`，例如：`-age`
- 说明：一般与 `ng-repeat` 指令共同使用

```html
<p ng-repeat="item in data | orderBy: 'age'"></p>
```

### 在JavaScript中使用过滤器
- 语法：
- 使用 `$filter` 方法, 参数为：过滤器名称
- `$filter`方法的返回值是一个方法：第一个参数表示要过滤的数据，后面的参数为：过滤器的参数

```javascript
var time = $filter("date")($scope.curDate, "yyyy-MM-dd hh:mm:ss");
```

## service 服务
- 公用（公共）的业务逻辑集中存放的一段代码
- 主要用于对重复业务的封装，达到复用的目的
- 一般主要封装针对于Model的CRUD

- 服务中的代码只会在使用服务的时候，执行一次，并且只会执行一次
- 服务给控制器提供了一些额外的功能
    + $log / $http 等以$开头的服务都是Angular的内置服务

```
在一个分层良好的 ng 应用中，controller 这一层应该很薄。 应用中大部分的业务逻辑
和 持久化数据 都应该放在 service 中。

数据持久化：将数据存储起来（存储数据库中）
```


### 创建服务
- 创建服务的语法，与创建控制器的语法相同
- `service`方法中的函数参数，是一个构造函数，通过`this`添加成员
- 控制器中通过服务的名字（实例对象）就可以使用服务的属性和方法

```javascript
app.service('TestService', [function() {
    // this.get = function() {};
    // this.set = function() {};
    // this.update = function() {};
    // this.delete = function() {};
}]);

// 在控制器中使用自定义服务
app.controller('DemoController', ['$scope', 'TestService', 
    function($scope, TestService) {
    console.log(TestService);
}]);
```

### 模块之间的依赖关系
```
有三个模块：
1 app.js：主模块，应用程序的入口，实现统一调用所有其他模块
2 controller.js：控制器模块，处理视图中与用户交互的功能，即：处理业务逻辑
3 service.js：服务模块，抽象数据操作，提供数据的增删改查

每个模块都会放在一个独立的js文件中，因此，每个文件都会有一个模块，
    即：angular.module("模块名", []);
建立模块之间的联系：
    在 app.js 主模块中，引入：controller 和 service这两个模块
```

## ngRoute -路由
- 语法：`app.config(['$routeProvider', function($routeProvider) {}])`
- 安装：`npm install angular-route` 单独安装
- 注意：`ngRoute` -路由模块名称，作为依赖模块

### 使用步骤
- 1 引入 angular-route.js 文件
- 2 创建模块的时候，将`ngRoute`作为依赖项引入
- 3 通过调用模块的`config`方法来配置路由，并将`$routeProvider`注入进来
- 4 通过`$routeProvider`的两个方法：`when()`和`otherwise()`进行路由配置
- 5 在视图中，通过指令`ng-view`展示路由对应的内容
- 6 1.6 版本以后，添加 `$locationProvider.hashPrefix('')` 配合 `#/users` 使用

```html
<div ng-app="routeApp">
    <a href="#/stu/li"></a>
    <p>a</p>
    <p>b</p>
    <div ng-view></div>
    <p>c</p>
    <p>d</p>
</div>

<script>
    var app = angular.module('routeApp', ['ngRoute']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/stu/li', {
            template: '<p>李四</p>'
        });
    }]);
</script>
```

### when() 方法
- 参数：
    + 第一个参数：url的hash值，例如：`/stu/li`
    + 第二个参数：是一个对象，对象中属性用来控制路由的相关功能

- `template`：指定路由的模板，显示在`ng-view`指令所有的html元素中
- `templateUrl`: 作用与 template 相同，取值：模板id 或者 路径
- `controller`: 为路由指定一个控制器，用于提供当前视图中的数据模型

```javascript
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/stu/li', {
        template: '<p>你好，我是{{name}}</p>',
        controller: 'stuController'
    });
}]);

app.controller('stuController', ['$scope', function($scope) {
    $scope.name = '小明';
}]);
```

### otherwise() 方法
- 作用：匹配不合法（when无法匹配）的锚点值，与`switch-case`中的 `default` 类似
- 参数: 是一个对象
- `redirectTo`属性：指定默认跳转的锚点值

```javascript
$routeProvider
    .otherwise({
        redirectTo: '/stu/'
    });
```

### $routeParams -路由的服务
- 作用：用于获取路由的参数，是 路由服务，在控制器中使用
- ":name?" 的 ":name"用于匹配URL路径，"?"表示可以省略
- 例如URL为 "#/stu/lisi" ，路由 "/stu/:name" 匹配：lisi

```javascript
app.config(['$routeProvider', function($routeProvider) {
    // '/stu/:name?' 用来匹配：/stu/ 或 /stu 或 /stu/xxx 的任意一种
    $routeProvider.when('/stu/:name?', {
        template: '<p>你好，我是{{name}}</p>',
        controller: 'stuController'
    });
}]);

app.controller('stuController', ['$scope', '$routeParams', function($scope, $routeParams) {
    // $routeParams 是一个对象，对象中包含了一个 name 属性。
    // name属性，是路由的 when 方法的第一个参数
    console.log($routeParams.name);
}]);
```

### $route -路由的服务
- 作用：控制当前的路由
- `$route.updateParams()`方法：更新路由参数的值
    + 参数：对象，具有路由参数属性，用于指定更新后的锚点值
- 可以使用 `$location.url('/teacher/laowang')` 来修改，路由的URL值

```javascript
app.controller('stuController', ['$scope', '$routeProvider', '$route', function($scope, $routeProvider, $route) {
    console.log($routeProvider.name);
    
    // 参数是一个对象，具有路由参数属性的对象
    $route.updateParams({name: 'lisi'});
}]);
```

### hashPrefix
- 在 angular-1.6以上的版本，默认使用 `!` 前缀

```html
<a href="#!/users"></a>

<script>
$routeProvider
    .when('/users', {
        templateUrl: 'view.html',
        controller: 'TestController'
    })

// 1.6以上，默认值为：'!'
// $locationProvider.hashPrefix('!');
</script>
```