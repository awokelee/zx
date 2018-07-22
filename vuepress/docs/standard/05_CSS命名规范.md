# CSS 命名规范

## 书写顺序

```text
显示属性
元素属性
内容属性


位置属性(position, top, right, z-index, display, float等)
大小(width, height, padding, margin)
文字系列(font, line-height, letter-spacing, color- text-align等)
背景(background, border等)
其他(animation, transition等)
```

## 相对网页外层重要部分CSS样式命名

```text
外套 wrap ------------------用于最外层头部
header ---------------用于头部主要内容
main ------------用于主体内容（中部
左侧 main-left -------------左侧布局右侧
main-right -----------右侧布局导航条
nav -----------------网页菜单导航条内容
content --------------用于网页中部主体底部
footer -----------------用于底部
```

## DIV+CSS命名参考表

```text
①CSS样式命名说明网页公共命名
#wrapper页面外围控制整体布局宽度
#container或#content容器；
②
用于最外层
#layout布局
#head, #header页头部分
#foot, #footer页脚部分
#nav主导航#subnav二级导航
#menu菜单#submenu子菜单
#sideBar侧栏
#sidebar_a, #sidebar_b左边栏或右边栏
#main页面主体
#tag标签
#msg #message提示信息
#tips小技巧
#vote投票
#friendlink友情连接
#title标题；
③
#summary摘要
#loginbar登录条
#searchInput搜索输入框
#hot热门热点
#search搜索
#search_output搜索输出和搜索结果相似
#searchBar搜索条
#search_results搜索结果
#copyright版权信息
#branding
④
商标#logo网站LOGO标志
#siteinfo网站信息
#siteinfoLegal法律声明
#siteinfoCredits信誉
#joinus加入我们
#partner合作伙伴
#service服务
#regsiter注册arr/arrow箭头
#guild指南
#sitemap网站地图
#list列表
#homepage首页
#subpage二级页面子页面
#tool, #toolbar工具条
#drop下拉
#dorpmenu下拉菜单
⑤
#status状态
#scroll滚动
.tab标签页
.left .right .center居左、中、右
.news新闻
.download下载
.banner广告条(顶部广告条)电子贸易相关
.products产品
.products_prices产品价格
.products_description产品描述
.products_review产品评论
.editor_review编辑评论
.news_release最新产品
.publisher生产商
.screenshot缩略图
.faqs常见问题
.keyword关键词
.blog博客
.forum论坛
⑥
CSS文件命名说明
master.css,style.css主要的
module.css模块
base.css基本共用
layout.css布局，
版面themes.css主题
columns.css专栏
font.css文字、字体
forms.css表单
mend.css补丁
print.css打印
```

## CSS命名其它说明

```text
DIV+CSS命名小结：无论是使用“.”（小写句号）选择符号开头命名，还是使用“#”(井号)选择符号开头命名都无所谓，但我们最好遵循，
主要的、重要的、特殊的、最外层的盒子用“#”(井号)选择符号开头命名，其它都用“.”（小写句号）选择符号开头命名，
同时考虑命名的CSS选择器在HTML中重复使用调用。
通常我们最常用主要命名有：
wrap（外套、最外层）、
header（页眉、头部）、
nav(导航条)、menu(菜单)、
title(栏目标题、一般配合h1\h2\h3\h4标签使用)、
content (内容区)、
footer(页脚、底部)、
logo（标志、可以配合h1标签使用）、
banner（广告条，一般在顶部）、
copyRight（版权）。
其它可根据自己需要选择性使用。建议：主要的、重要的、最外层的盒子用“#”(井号)选择符号开头命名，其它都用“.”（小写句号）选择符号开头命名。
```

## CSS样式文件命名如下

```text
主要的 master.css

布局，版面 layout.css

专栏 columns.css

文字 font.css

打印样式 print.css

主题 themes.css
```

## CSS标准化设计命名

```text
CSS标准化设计命名
1、类class的命名规范示例
头：header内容：content/container
尾：footer
导航：nav
侧栏：sidebar
栏目：column
页面外围控制整体布局宽度：wrapper
左右中：left right center
登录条：loginbar
标志：logo
广告：banner
页面主体：main
热点：hot
新闻：news
下载：download
子导航：subnav
菜单：menu
子菜单：submenu
搜索：search
友情链接：friendlink
页脚：footer
版权：copyright
滚动：scroll
内容：content
标签页：tab
文章列表：list
提示信息：msg
小技巧：tips
栏目标题：title
加入：joinus
指南：guild
服务：service
注册：regsiter
状态：status
投票：vote
合作伙伴：partner


3、id的命名规范示例
（1）
页面结构容器： container
页头：header
内容：content/container
页面主体：main
页尾：footer
导航：nav
侧栏：sidebar
栏目：column
页面外围控制整体布局宽度：wrapper
左右中：left right center
（2）
导航导航：nav
主导航：mainbav
子导航：subnav
顶导航：topnav
边导航：sidebar
左导航：leftsidebar
右导航：rightsidebar
菜单：menu
子菜单：submenu
标题： title
摘要： summary
（3）
功能标志：logo
广告：banner
登陆：login
登录条：loginbar
注册：regsiter
搜索：search
功能区：shop
标题：title
加入：joinus
状态：status
按钮：btn
滚动：scroll
标签页：tab
文章列表：list
提示信息：msg
当前的： current
小技巧：tips
图标： icon
注释：note
指南：guild
服务：service
热点：hot
新闻：news
下载：download
投票：vote
合作伙伴：partner
友情链接：link
版权：copyright
4、
类class的书写规范示例
（1）颜色：使用颜色的名称或者16进制代码，如.red { color： red； }.f60 { color： #f60； }.ff8600 { color： #ff8600； }（2）字体大小，直接使用"font+字体大小"作为名称，如.font12px { font-size： 12px； }.font9pt {font-size： 9pt； }
（3）对齐样式，使用对齐目标的英文名称，如.left { float：left； }.bottom { float：bottom； }
（4）标题栏样式，使用"类别+功能"的方式命名，如.barnews { }.barproduct { }
5、CSS文件命名示例主要的 master.css模块 module.css基本共用 base.css布局，版面 layout.css主题 themes.css专栏 columns.css文字 font.css表单 forms.css补丁 mend.css打印 print.css6、注意事项
（1）一律小写；
（2）尽量用英文；
（3）不加中杠和下划线；
（4）尽量不缩写，除非一看就明白的单词css统一命名注：本CSS命名规则只适合物table制作模式下
1、 css文件统一放在css文件夹下；命名css.css
2、 主样式定义：body、table、td、tr、a
3、 链接样式定义：link_white（白色）；link_black （黑色）；link_blue （蓝色） 等等；说明：如有重复的后面加阿拉伯数字；如 link_red01 有下划线的如：linkred
4、 文字样式定义：font_red （红色）；font_red_14 （红色14号字）；font_red_14b （红色14号加粗）
5、 边框样式定义：border_red_tblr （红色四个边）；border_red_blr（红色底左右三边）；border_red_lr（红色左右两个边）；border_red_b （红色底一个边）等等；
6、 表单样式定义：
ext_100 （文本字段宽为100）； 
textarea_200_red （文本区域宽为200有红色边框）；
select_100 （列表宽为100）；
button_150 （按钮宽150）；
说明：表单用宽度定义，在命名中最长写到：“text_100_red”
7、
线的样式定义：line_X （横线）；line_Y （竖线）；line_X_red （红色横线）；
line_X_red2 （两个像素的红色横线）；
说明：在line中只定义虚线，实线在border中定义
8、 其它样式定义：在这里主要定义一些个性化的样式；
常用的css命名规则头：
header内容：
content/container尾：
footer导航：
nav侧栏：
sidebar栏目：
column页面外围控制整体布局宽度：
wrapper左右中：
left right center
登录条：loginbar
标志：logo
广告：banner
页面主体：main
热点：hot
新闻：news
下载：download
子导航：subnav
菜单：menu
子菜单：submenu
搜索：search
友情链接：friendlink
页脚：footer
版权：copyright
滚动：scroll
内容：content
标签页：tab
文章列表：list
提示信息：msg
小技巧：tips
栏目标题：title
加入：joinus
指南：guild
服务：service
注册：regsiter
状态：status
投票：vote
合作伙伴：partner
(二)
注释的写法:
/* Footer */
内容区
/* End Footer */
(三)
id的命名:
(1)
页面结构容器: container
页头：header
内容：content/container
页面主体：main
页尾：footer
导航：nav
侧栏：sidebar
栏目：column
页面外围控制整体布局宽度：wrapper
左右中：left right center
(2)
导航导航：nav
主导航：mainbav
子导航：subnav
顶导航：topnav
边导航：sidebar
左导航：leftsidebar
右导航：rightsidebar
菜单：menu
子菜单：submenu
标题: title
摘要: summary
(3)
功能标志：logo
广告：banner
登陆：login
登录条：loginbar
注册：regsiter
搜索：search
功能区：shop
标题：title
加入：joinus
状态：status
按钮：btn
滚动：scroll
标签页：tab
文章列表：list
提示信息：msg
当前的: current
小技巧：tips
图标: icon
注释：note
指南：guild
服务：service
热点：hot
新闻：news
下载：download
投票：vote
合作伙伴：partner
友情链接：link
版权：copyright
(四)
class的命名:
(1)颜色:使用颜色的名称或者16进制代码,如.red { color: red; }.f60 { color: #f60; }.ff8600 { color: #ff8600; }
（2）字体大小,直接使用”font+字体大小”作为名称,如.font12px { font-size: 12px; }.font9pt {font-size: 9pt; }
(3)对齐样式,使用对齐目标的英文名称,如.left { float:left; }.bottom { float:bottom; }
(4)标题栏样式,使用”类别+功能”的方式命名,如.barnews { }.barproduct { }注意事项::
1.一律小写;
2.尽量用英文;
3.不加中杠和下划线;
4.尽量不缩写，除非一看就明白的单词.主要的 master.css模块 module.css基本共用 base.css布局，版面 layout.css主题 themes.css专栏 columns.css文字 font.css表单 forms.css补丁 mend.css打印 print.css
```

```text
  1. 内容优先,表现为辅
  2. css命名中英文对照
  current 当前
  hover 悬停
  selected 挑选
  disabled 禁用
  focus 得到焦点
  blur 失去焦点
  checked 勾选
  success 成功
  error 出错

  header(hd) 头部
  content(cnt) 内容
  title(tit) 标题
  item 项目（条）
  cell 单元
  image/pic(img) 图片
  text(txt) 文字
  top 顶部
  scrubber 时序菜单

  nav 导航
  mainnav 主导航
  subnav 子导航
  topnav 顶部导航
  breadcrumb 面包屑导航

  flink 友情链接
  footer 尾
  copyright 版权

  menu 菜单
  submenu 子菜单
  dropdown 下拉菜单

  searchBar 搜索条
  search 搜索条
  searchTxt 搜索框
  searchBtn 搜索按钮
  search_key 搜索词

  member 会员
  ucenter 用户中心
  loginBar 登陆条
  login 登录
  loginBtn 登录按钮
  regsiter 注册按钮
  btn-regsiter注册按钮
  name 用户名
  password 密码
  nickname 昵称
  mobilephone/mobile 手机
  telephone/tel 电话
  defaultavatar 默认头像

  hot 热点
  news 新闻
  banner/AD 广告
  download 下载

  content 内容
  title 标题
  summary 摘要
  time 时间

  share 分享
  digg 顶
  like 喜欢

  list 列表
  pList 图片列表
  tList 文字列表
  tpList 图文列表

  table 表格
  row 行
  column 列
  gutter 间隔
  viewport 视口

  tab 标签
  tags 标签
  scroll 滚动 

  sidebar 侧边栏
  column 栏目
  section 区块
  msg 提示信息
  status 状态
  vote 投票
  tips 小技巧
  guild 指南
  note 注释

  icon- 图标
  btn- 按钮

  goods 商品
  goodsList 商品列表
  goodsDetail 商品详情
  goodsInfo 商品信息

  tuan 团购
  tuanList 团购列表
  tuanDetail  团购详情
  tuanInfo 团购信息

  transition 动画
  shadow 阴影
  fade 淡入淡出
  flip 翻页效
  slide 滑动
  slideup 上滑动
  slidedown 下滑动
  turn 翻页
  horizontal 水平
  vertical 垂直
  collapsible 折叠
  corners 拐角
  flow 流
  reverse 反向
  pop 弹窗

  count 总数/计数
  plus 加号/正
  minus 减号/负
  controlgroup 控制组
```