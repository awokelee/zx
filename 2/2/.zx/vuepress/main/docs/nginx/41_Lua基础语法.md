# Lua 介绍

是一个简洁、轻量、可扩展的脚本语言.

### Nginx + Lua 优势

充分的结合 `Nginx` 的并发处理 `epoll` 优势和 `Lua` 的轻量实现简单的功能且高并发的场景.

### Lua 基础

- 安装

`yum install lua`

- 进入 `lua` 环境

```bash
[root ~]# lua
Lua 5.1.4  Copyright (C) 1994-2008 Lua.org, PUC-Rio
> print("hello world")
hello world
```

```bash
[root ~]# lua ./test.lua
hello world
```

### 基础语法

- 注释

`--` 行注释

`--[[ 块注释 --]]`

- 变量

`a = 'alo\n123'`

`a = "alo\n123""`

`a = '97lo\10\04923"'`

`a = [[alo
  123]]`

布尔类型只有 `nil` 和 `false` 是 `false`

数字 `0`, " 空字符串(`' \0'`) 都是 `true`

`lua` 中的变量如果没有特殊说明, 全是全局变量, 想要局部变量加 `local`

- `while` 循环

```lua
sum = 0
num = 1
while num <= 100 do
  sum = sum + num
  num = num + 1
end
print("sum =", sum)
```

`lua` 没有 `++` 或 `+=` 的操作.

- `for` 循环

```lua
sum = 0
for i = 1 100 do
  sum = sum + i
end
```

- `if-else` 判断语句

```lua
if age == 40 and sex == "Male" then
  print("大于40的男人")
elseif age > 60 and sex ~= "Female" then
  print("非女人而且大于60")
else
  local age = io.read()
  print("Your age is"..age)
end
```

`~=` 不等于

`..` 字符串拼接

`io` 库分别从 `stdin` 和 `stdout` 读写的 `read` 和 `write` 函数.