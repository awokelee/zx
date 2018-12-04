# ES6

## let const

- 块级作用域
- 不可重复声明
- const 声明时就要赋值

## 解构赋值

- 数组解构赋值
- 对象解构赋值
- 字符串解构赋值
- 布尔值解构赋值
- 函数参数解构赋值
- 数值解构赋值

```JS
{
    let a, b, rest
    [a, b] = [1, 2]
    // 1 2
    console.log(a, b)
}

{
    let a, b, rest
    [a, b, ...rest] = [1, 2, 3, 4, 5, 6]
    // 1 2 [ 3, 4, 5, 6 ]
    console.log(a, b, rest)
}

{
    let a, b
    ({ a, b } = { a: 1, b: 2 })
    // 1 2
    console.log(a, b)
}

{
    let a, b, c, rest
    [a, b, c] = [1, 2]
    // 1 2 undefined
    console.log(a, b, c)
}

{
    let a = 1
    let b = 2;
    [a, b] = [b, a]
    // 2 1
    console.log(a, b)
}

{
    function f() {
        return [1, 2]
    }
    let a, b
    [a, b] = f()
    // 1 2
    console.log(1, 2)
}

{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c
    [a, , , b] = f()
    // 1 4
    console.log(a, b)
}

{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c
    [a, , ...b] = f()
    // 1 [3,4,5]
    console.log(a, b)
}

{
    let o = { p: 42, q: true }
    let { p, q } = o
    // 42 true
    console.log(p, q)
}

{
    let { a = 10, b = 5 } = { a: 3 }
    // 3 5
    console.log(a, b)
}

{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }
    let { title: esTitle, test: [{ title: cnTitle }] } = metaData
    // abc test
    console.log(esTitle, cnTitle)
}
```

## 正则扩展

- 构造函数的变化
- 正则方法的扩展
- u修饰符
- y修饰符
- s修饰符

```JS
{
    let regex = new RegExp('xyz', 'i')
    let regex2 = new RegExp(/xyz/i)
    // true true
    console.log(regex.test('xyz123'), regex2.test('xyz123'))

    // 第二个修饰符会覆盖第一个参数的修饰符
    let regex3 = new RegExp(/xyz/ig, 'i')
    // flags获取修饰符， 打印 i
    console.log(regex3.flags)
}

{   
    let s = 'bbb_bb_b'
    let a1 = /b+/g
    let a2 = /b+/y
    // [ 'bbb', index: 0, input: 'bbb_bb_b' ] [ 'bbb', index: 0, input: 'bbb_bb_b' ]
    console.log(a1.exec(s), a2.exec(s))
    // [ 'bb', index: 4, input: 'bbb_bb_b' ] null
    console.log(a1.exec(s), a2.exec(s))
    // g y修饰符不同，都是全局匹配
    // g：从上一次匹配位置开始寻找，不限定下一个字符，这题匹配到的是 bb 满足
    // y：限定匹配结果从下一个字符开始，这题第二次匹配到的是 _ 不满足所以null 

    // sticky 判断是不是开启 y 模式
    // false true
    console.log(a1.sticky, a2.sticky)
}

{   
    // true
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A'))
    // false
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A'))

    // false
    console.log(/\u{61}/.test('a'))
    // true
    console.log(/\u{61}/u.test('a'))
    // �
    console.log(`\u{20BB7}`)
    
    let s = `\u{20BB7}`
    // false
    console.log('u',/^.$/.test(s))
    // true
    console.log('u-2',/^.$/u.test(s))
}
```

## 数值扩展

- Number.isFinite
- Number.isNaN
- Number.isInteger
- Number.MAX_SAFE_INTEGER
- Number.MIN_SAFE_INTEGER
- Number.isSafeInteger
- Math.trunc
- Math.sign
- Math.cbrt

```JS
{
    // 二进制
    console.log(0b111110111)
    // 八进制
    console.log(0o767)
}

{
    // true
    console.log(Number.isFinite(15))
    // false
    console.log(Number.isFinite(NaN))
    // false
    console.log(Number.isFinite('ture' / 0))
    // true
    console.log(Number.isNaN(NaN))
    // false
    console.log(Number.isNaN(0))
}

{
    // true
    console.log(Number.isInteger(25))
    // true，25.0 等于 25
    console.log(Number.isInteger(25.0))
    // false
    console.log(Number.isInteger(25.1))
    // false
    console.log(Number.isInteger('25'))
}

{
    // 9007199254740991  2^53
    console.log(Number.MAX_SAFE_INTEGER)
    // -9007199254740991
    console.log(Number.MIN_SAFE_INTEGER)
    // true, 是否在安全区间
    console.log(Number.isSafeInteger(10))
    // false
    console.log(Number.isSafeInteger(9007199254740992))
    // 9007199254740992 2^53
    console.log(Math.pow(2, 53))

    // 4 取整
    console.log(Math.trunc(4.1))
    // 4
    console.log(Math.trunc(4.9))

}

{
    // -1
    console.log(Math.sign(-5))
    // 0
    console.log(Math.sign(0))
    // 1
    console.log(Math.sign(5))
    // 1
    console.log(Math.sign('50'))
    // NaN
    console.log(Math.sign('foo'))
}

{
    // -1
    console.log(Math.cbrt(-1))
    // 2
    console.log(Math.cbrt(8))
}
```

## 数组扩展

- Array.from
- Array.of
- Array.fill
- Array.values
- Array.entries
- Array.copyWithin
- Array.find
- Array.findIndex
- Array.includes

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <p>es6</p>
    <p>es7</p>
    <p>es8</p>

    <script>
        let p = document.querySelectorAll('p')
        let arr = Array.from(p)

        // es6 es7 es8
        arr.forEach(function (item) {
            console.log(item.textContent)
        })

        // [2,6,10]
        console.log(Array.from([1, 3, 5], function (item) {
            return item * 2
        }))
    </script>
</body>

</html>
```

```JS
{
    let arr = Array.of(3, 4, 7, 9, 11)
    // [3,4,7,9,11]
    console.log(arr)

    let arr2 = Array.of()
    // []
    console.log(arr2)
}

{
    // [ 7, 7, 7 ]，替换为7
    console.log([1, 'a', undefined].fill(7))
    // [ 'a', 7, 7 ], 从位置1开始到3 替换为7
    console.log(['a', 'b', 'c'].fill(7, 1, 3))
}

{
    // 0 1 2
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log(index)
    }

    // 有兼容问题
    // 1 c ks
    /* for (let value of ['1', 'c', 'ks'].values()) {
        console.log(value)
    } */

    // 键值
    // 0 1
    // 1 c
    // 2 ks
    for (let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log('444', index, value)
    }

}

{
    // [ 4, 2, 3, 4, 5 ]
    // 从0位置开始替换，读取第三个数，截至位置是四（不包含四位置，取四之前）
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4))
}

{
    // 4, find只找第一个元素
    console.log([1, 2, 3, 4, 5, 6].find(function (item) {
        return item > 3
    }))

    // 3， 位置是3
    console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) {
        return item > 3
    }))
}

{
    // true
    console.log([1,2,NaN].includes(1))
    // true
    console.log([1,2,NaN].includes(NaN))
}
```

## 函数扩展


```JS
{
    // 函数参数默认值
    function test(x = 1, y) {
        console.log(x, y)
    }
    // 1 undefined
    // test()
}

{
    let x = 'test'

    // 作用于的问题，取的括号的x
    function test2(x, y = x) {
        console.log(x, y)
    }

    // kill kill
    test2('kill')

    // undefined undefined
    test2()

    // -------------------
    function test3(y = x) {
        console.log(x, y)
    }
    // test test, 取的是外面定义的
    test3()
}

{
    // rest 参数就是一系列参数转成数组，类似arguments
    function test3(...arg) {
        for (let v of arg) {
            console.log(v)
        }
    }
    // 3 4 5
    test3(3, 4, 5)
}

{
    // 扩展运算符
    // 1 2 4
    console.log(...[1, 2, 4])
    // a 1 2 4
    console.log('a', ...[1, 2, 4])
}

{
    let arrow = v => v * 2
    // 6
    console.log(arrow(3))
    /* 等价于 let arrow = function (v) { return v * 2 } */

    let arrow2 = () => 5
    // 5
    console.log(arrow2())
}

{
    // 伪调用，提高性能
    function tail(x) {
        console.log(x)
    }

    function fx(x) {
        return tail(x)
    }
    // 123
    fx(123)
}
```

## 对象扩展

- Object.is
- Object.assign

```JS
{
    let o = 1
    let k = 2

    let es5 = {
        o: o,
        k: k
    }

    let es6 = {
        o,
        k
    }
    // { o: 1, k: 2 }
    console.log(es5)
    // { o: 1, k: 2 }
    console.log(es6)

    let es5_method = {
        hello: function () {
            console.log('hello')
        }
    }
    let es6_method = {
        hello() {
            console.log('hello')
        }
    }
    // hello
    es5_method.hello()
    // hello
    es6_method.hello()
}

{
    // 属性表达式
    let a = 'b'
    let es5_obj = {
        a: 'c',
        b: 'c'
    }
    // [a]等于上面得 b
    let es6_obj = {
        [a]: 'c'
    }
    // { a: 'c', b: 'c' } { b: 'c' }
    console.log(es5_obj, es6_obj)
}

{
    // Object.is 功能等同于 ===
    // true true
    console.log(Object.is('abc', 'abc'), 'abc' === 'abc')
    // false false, 引用类型
    console.log(Object.is([], []), [] === [])
}

{
    // 浅拷贝, 只能拷贝自身得属性, 不可枚举得不可拷贝
    console.log(Object.assign({ a: 'a' }, { b: 'b' }))
    
    let test = { k: 123, o: 456 }
    for (let [key, value] of Object.entries(test)) {
        console.log([key, value])
    }
    // ["k", 123]
    // ["o", 456]
}

{
    // test kill {c:'dd',d:'cc'}
    let { a, b, ...c } = { a: 'test', b: 'kill', c: 'ddd', d: 'ccc' }
    console.log(a, b, c)
}
```

## Symbol

```JS
{
    // 提供一个独一无二的值, Sybmbol 声明的永远不相同
    let a1 = Symbol()
    let a2 = Symbol()
    // false
    console.log(a1 == a2)
    // false
    console.log(a1 === a2)

    // 如果注册过就拿到那个值, 没有则生成
    let a3 = Symbol.for('a3')
    let a4 = Symbol.for('a3')
    // true
    console.log(a3 === a4)
}
```

```JS
{
    let a1 = Symbol.for('abc')
    let obj = {
        [a1]: '123',
        'abc': 345,
        'c': 456
    }
    // {abc: 345, c: 456, Symbol(abc): "123"}
    console.log(obj)

    // abc 345
    // c 456
    // 拿不到 Symbol(abc)
    for (let [key, value] of Object.entries(obj)) {
        console.log(key, value)
    }

    // 123, 只获取 Symbol属性
    Object.getOwnPropertySymbols(obj).forEach(ietm => {
        console.log(obj[item])
    })

    // abc c Symbol(abc), 拿到包括 Symbol的属性
    Reflect.ownKeys(obj).forEach(item => {
        console.log(item, item[obj])
    })
} 
```

## set map 数据结构

- Set
- WeakSet
- Map
- WeakMap

```JS
{
    let list = new Set()
    list.add(5)
    list.add(7)
    // 2
    console.log(list.size)
}

{
    let arr = [1, 2, 3, 4, 5]
    let list = new Set(arr)
    // 5
    console.log(list.size)
    // Set { 1, 2, 3, 4, 5 }
    console.log(list)
}

{
    let list = new Set()
    list.add(1)
    list.add(2)
    list.add(1)
    // Set { 1, 2 }
    console.log(list)

    let arr = [1, 2, 2, 3, 4, '4']
    let list2 = new Set(arr)
    // Set { 1, 2, 3, 4, '4' }
    console.log(list2)
}

{
    let arr = ['add', 'delete', 'clear', 'has']
    let list = new Set(arr)
    // true
    console.log(list.has('add'))
    // true
    console.log(list.delete('add'))
    // false
    console.log(list.has('add'))

    // list.clear()
    // Set {}
    console.log(list)



}

{
    let arr = ['add1', 'delete1', 'clear1', 'has1']
    let list = new Set(arr)
    // add1 delete1 clear1 has1
    for (let key of list.keys()) {
        console.log('keys', key)
    }
    // add1 delete1 clear1 has1
    for (let value of list.values()) {
        console.log('value', value)
    }
    // add1 delete1 clear1 has1
    for (let value of list) {
        console.log('value', value)
    }
    // ['add1',['add1'] 
    // ['delete1','delete1'] 
    // ['clear1', 'clear1'] 
    // ['has1','has1']
    for (let value of list.entries()) {
        console.log('value', value)
    }
    // add1 delete1 clear1 has1
    list.forEach(item => {
        console.log(item)
    })
}

{
    // WeakSet, 跟Set支持的数据类型不一样, 只能是对象不能是数值 布尔字符串等
    // 弱引用, 再weakset添加的对象只是引用, 而且不会考虑是不是已经被垃圾回收的对象
    // 不能遍历 没有clear 没有set属性, 其他的同 Set
    let weakList = new WeakSet()
    let arg = {}
    weakList.add(arg)
    // WeakSet {}
    console.log(weakList)
    // Invalid value used in weak set
    // weakList.add(1)
}

{
    // Map 的key 可以是任何数据类型
    let map = new Map()
    let arr = ['123']
    map.set(arr, 456)
    // Map { [ '123' ] => 456 }
    console.log(map)
    // 456
    console.log(map.get(arr))
}

{
    // 其他方法同 Set
    let map = new Map([['a', 123], ['b', 456]])
    // Map { 'a' => 123, 'b' => 456 }
    console.log(map)

    // 2
    console.log(map.size)

    console.log(map.delete('a'))
    // Map { 'b' => 456 }
    console.log(map)

    // Map {}
    map.clear()
    console.log(map)
}

{
    // 同 Set 同 weakSet的区别
    let weakmap = new WeakMap()
    let o = {}
    weakmap.set(o, 123)
    // 123
    console.log(weakmap.get(o))
}

```

## map set 与数组 Object对比

`建议 能使用map 不使用数组, 数据要求比较高, 保证数据存储唯一 优先set 放弃obj array`

```JS
{   
    // 建议 能使用map 不使用数组, 数据要求比较高, 保证数据存储唯一 优先set 放弃obj array
}

{
    let map = new Map()
    let array = []
    // 增
    map.set('t', 1)
    array.push({ t: 1 })

    // Map { 't' => 1 } 
    // [ { t: 1 } ]
    console.info(map, array)

    // 查
    let map_exist = map.has('t')
    let array_exist = array.find(item => item.t)
    // true { t: 1 }
    console.log(map_exist, array_exist)

    // 改
    map.set('t', 2)
    array.forEach(item => item.t ? item.t = 2 : '')
    // Map { 't' => 2 } [ { t: 2 } ]
    console.log(map, array)

    // 删
    map.delete('t')
    let index = array.findIndex(item => item.t)
    array.splice(index, 1)
    // Map {} []
    console.log(map, array)
}

{
    let set = new Set()
    let array = []

    // 增
    set.add({ t: 1 })
    array.push({ t: 1 })
    // Set { { t: 1 } } [ { t: 1 } ]
    console.log(set, array)

    // 查
    let set_exist = set.has({ t: 1 })
    let array_exist = array.find(item => item.t)
    // false { t: 1 }, 为false是因为has找的是对象的引用, 需要先保存下对象 
    console.log(set_exist, array_exist)

    // 改
    set.forEach(item => item.t ? item.t = 2 : '')
    array.forEach(item => item.t ? item.t = 2 : '')
    // Set { { t: 2 } } [ { t: 2 } ]
    console.log(set, array)

    // 删
    set.forEach(item => item.t ? set.delete(item) : '')
    let index = array.findIndex(item => item.t)
    array.splice(index, 1)
    // Set {} []
    console.log(set, array)
}

{
    // map, set, object 对比
    let item = { t: 1 }
    let map = new Map()
    let set = new Set()
    let obj = {}

    // 增
    map.set('t', 1)
    set.add(item)
    obj['t'] = 1
    // Map { 't' => 1 } Set { { t: 1 } } { t: 1 }
    console.log(map, set, obj)

    // 查
    // { map_exist: true, set_exist: true, obj_exist: true }
    console.log({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    })

    // 改
    map.set('t', 2)
    item.t = 2
    obj['t'] = 2
    // Map { 't' => 2 } Set { { t: 2 } } { t: 2 }
    console.log(map, set, obj)

    // 删
    map.delete('t')
    set.delete(item)
    delete obj['t']
    // Map {} Set {} {}
    console.log(map, set, obj)
}
```

## Proxy 和 Reflect

```JS
{
    // 供应商
    let obj = {
        time: '2017-10-24',
        name: 'net',
        _r: 123
    }
    // 代理商
    let monitor = new Proxy(obj, {
        // 拦截(代理)对象属性的读取
        get(target, key) {
            return target[key].replace('2017', '2018')
        },
        // 拦截对象设置属性
        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value
            } else {
                return target[key]
            }
        },
        // 拦截 key in object 操作
        has(target, key) {
            if (key === 'name') {
                return target[key]
            } else {
                return false
            }
        },
        deleteProperty(target, key) {
            if (key.indexOf('_') > -1) {
                delete target[key]
                return true
            } else {
                return target[key]
            }
        },
        // 拦截 Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }

    })
    // 2017-10-24
    console.log(monitor.time)

    monitor.time = '2011'
    monitor.name = 'net2'
    // 2018-10-24 net2, 时间未修改成功
    console.log(monitor.time, monitor.name)
    // true false
    console.log('name' in monitor, 'time' in monitor)

    /* delete monitor.time
    console.log(monitor.time)

    delete monitor._r
    console.log(monitor._r) */

    // ['name', '_r' ]
    console.log(Object.keys(monitor))
}

{
    // Reflect 其他的同 Proxy
    let obj = {
        time: '2017-10-24',
        name: 'net',
        _r: 123
    }

    //2017-10-24
    console.log(Reflect.get(obj, 'time'))

    Reflect.set(obj, 'name', 'haha')
    // { time: '2017-10-24', name: 'haha', _r: 123 }
    console.log(obj)
    // true
    console.log(Reflect.has(obj, 'name'))
}

{
    // 业务解耦校验模块
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value, proxy) {
                if (target.hasOwnProperty(key)) {
                    let va = this._validator[key]
                    if (!!va(value)) {
                        return Reflect.set(target, key, value, proxy)
                    } else {
                        throw Error(`不能设置${key}到${value}`)
                    }
                } else {
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string'
        },
        age(val) {
            return typeof val === 'number' && val > 18
        }
    }

    class Person {
        constructor(name, age) {
            this.name = name
            this.age = age
            return validator(this, personValidators)
        }
    }

    const person = new Person('leilei', 20)
    // Person { name: 'leilei', age: 20 }
    console.log(person)

    // Error: 不能设置name 48
    // person.name = 48

}
```

## 类和对象

- 基本定义
- 继承
- getter setter
- 静态方法
- 静态属性

```JS
{
    // 基本定义和生成实例
    class Parent {
        constructor(name = 'zhangsan') {
            this.name = name
        }
    }

    let v_parent = new Parent('V')
    // Parent { name: 'V' }
    console.log(v_parent)
}

{
    // 继承
    class Parent {
        constructor(name = 'zhangsan', age) {
            this.name = name
            this.age = '33'
        }
    }

    class Child extends Parent {
        constructor(name = 'child') {
            // super 一定是第一行, 子类向父类传递参数的过程
            super(name)
            this.type = 'child'
        }
    }
    // Child { name: '22', age: '33', type: 'child' }
    console.log(new Child('22'))
}

{
    // getter setter
    class Parent {
        constructor(name = 'zhangsan', age) {
            this.name = name
            this.age = '33'
        }
        // 这里是属性 不是方法
        get longName() {
            return 'ml' + this.name
        }

        set longName(value) {
            this.name = value
        }
    }

    let v = new Parent()
    // mlzhangsan
    console.log(v.longName)

    v.longName = 'hello'
    // mlhello
    console.log(v.longName)
}

{
    // 静态方法
    class Parent {
        constructor(name = 'zhangsan', age) {
            this.name = name
            this.age = '33'
        }
        // 静态 方法
        static tell() {
            console.log('tell')
        }
    }

    // tell
    Parent.tell()
}

{
    // 静态属性
    class Parent {
        constructor(name = 'zhangsan', age) {
            this.name = name
            this.age = '33'
        }
        // 静态 方法
        static tell() {
            console.log('tell')
        }
    }

    // 非常简单  静态属性
    Parent.type = 'test'
    console.log(Parent.type)
}
```

## Promise

### 什么是异步

A执行完执行B
传统：回调函数、事件触发

### Promise的作用

解决异步操作问题

### Promise的基本用法

#### 传统写法

```JS
{
    // 基本定义
    let ajax = function (callback) {
        console.log('执行')
        setTimeout(function () {
            callback && callback.call()
        }, 1000)
    }
    ajax(function () {
        console.log('timeout1')
    })
}
```

#### resolve

#### reject

#### then

```js
{
    let ajax = function () {
        console.log('执行3')
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000)
        })
    }

    ajax().then(function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 2000);
        })
    }).then(function () {
        console.log('timeout3')
    }).catch(function (err) {
        console.log('catch')
    })
}
```

#### Promise.all

```JS
{
    // 所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src

            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img)
        })
    }

    Promise.all([
        loadImg('http://localhost.com/1.jpg'),
        loadImg('http://localhost.com/2.jpg'),
        loadImg('http://localhost.com/3.jpg'),
    ]).then(showImgs)
}
```

#### Promise.race

```js
{
    // 有一个完成就添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src

            img.onload = function () {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(img){
        let p = document.createElement('p')
        p.appendChild(img)
        document.body.appendChild(p)
    }

    Promise.race([
        loadImg('http://localhost.com/1.jpg'),
        loadImg('http://localhost.com/2.jpg'),
        loadImg('http://localhost.com/3.jpg'),
    ]).then(showImgs)
}
```

## 字符串扩展

### Unicode表示法

```JS
{
    // a a
    console.log('a', `\u0061`)
    // s ₻7, 因为 20BB7 大于 0XFFFF，20BB解析为₻ 最后结果为₻7
    console.log('s', `\u20BB7`)
    // s �
    console.log('s', `\u{20BB7}`)
    let s = '�'
}

{
    let s = `\u{20BB7}`
    // 2, 四字节为1 大于四字节 2
    console.log('length', s.length)
    // �
    console.log('0', s.charAt(0))
    // �
    console.log('0', s.charAt(1))
    // 55362
    console.log('at0', s.charCodeAt(0))
    // 57271
    console.log('at1', s.charCodeAt(1))

    // 
    let s1 = `\u{20BB7}a`
    // 3
    console.log('length', s1.length)
    // 134071
    console.log('0', s1.codePointAt(0))
    // 20bb7
    console.log('code0', s1.codePointAt(0).toString(16))
    // 57271
    console.log('code0', s1.codePointAt(1))
    // 97
    console.log('code0', s1.codePointAt(2))

}

{
    // ஷ
    console.log(String.fromCharCode('0x20bb7'))
    // �
    console.log(String.fromCodePoint('0x20bb7'))
}
```
### 遍历接口

```JS
{
    //  � � a b c
    let str = `\u{20bb7}abc`
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i])
    }
    // � a b c
    for (let code of str) {
        console.log('es6', code)
    }
}
```

### 模板字符串

```js
{
    let name = 'list'
    let info = 'hello world'
    let m = `i am ${name}, ${info}`
    // i am list, hello world
    console.log(m)
}
```

### includes startsWith endsWith

```js 
{
    let str = "string"
    // 判断包含，true
    console.log('includes', str.includes("s"))
    console.log('includes', str.startsWith("s"))
    console.log('includes', str.endsWith("ng"))
    
}

{
    let str = "abc"
    // abcabc
    console.log(str.repeat(2))
}
```

### padStart padEnd

```JS
{   // ES7的 补白
    // 01
    console.log('1'.padStart(2,0))
    // 10
    console.log('1'.padEnd(2,0))
}
```

### 标签模板

```JS
{
    // 防止 XSS 或者多余字符串
    let user = {
        name: 'list',
        info: 'hello world'
    }
    // [ 'i am ', ', ', '' ] 'list' 'hello world'
    // console.log(abc`i am ${user.name}, ${user.info}`)

    // i am ,, ,listhello world
    function abc(s, v1, v2) {
        console.log(s, v1, v2)
        return s + v1 + v2
    }
}

```

### raw

```JS
{   
    // Hi\n3
    console.log(String.raw`Hi\n${1+2}`)
    /**
     *  Hi
     *  3
     */
    console.log(`Hi\n${1+2}`)
}
```

## Iterator 和 for...of

### iterator

```JS
{
    let arr = ['hello', 'world']
    let map = arr[Symbol.iterator]()
    // { value: 'hello', done: false }
    console.log(map.next())
    // { value: 'world', done: false }
    console.log(map.next())
    // { value: undefined, done: true }
    console.log(map.next())
}
```

### 实现 iterator

```JS
{
    // 实现iterator接口
    let obj = {
        start: [1, 3, 2],
        end: [7, 9, 8],
        [Symbol.iterator]() {
            let self = this
            let index = 0
            let arr = self.start.concat(self.end)
            let len = arr.length
            return {
                next() {
                    if (index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    } else {
                        return {
                            value: arr[index++],
                            done: true
                        }
                    }
                }

            }
        }
    }
    for (let key of obj) {
        console.log(key)
    }
}
```

### for...of

```JS
{
    let arr = ['hello', 'world']
    for (let value of arr) {
        console.log('value', value)
    }
}
```

## Generator （比Promise更高级）

### 基本定义

```JS
{
    // generator 基本定义
    let tell = function* () {
        yield 'a'
        yield 'b'
        yield 'c'
    }

    let ke = tell()
    // generator 返回的就是iterator接口
    // { value: 'a', done: false }
    console.log(ke.next())
    // { value: 'b', done: false }
    console.log(ke.next())
    // { value: 'c', done: false }
    console.log(ke.next())
    // { value: undefined, done: true }
    console.log(ke.next())
}
```

### generator与iterator关系

```JS
{
    // generator与iterator接口关系
    let obj = {}
    obj[Symbol.iterator] = function* () {
        yield 1
        yield 2
        yield 3
    }
    // 1 2 3
    for (let value of obj) {
        console.log(value)
    }
}
```

### 状态机

```JS
{
    // 状态机
    let state = function* () {
        while (1) {
            yield 'A'
            yield 'B'
            yield 'C'
        }
    }
    let status = state()
    // A B C A B 
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
}



{   // async await 是 generator 的语法糖
    let state = async function () {
        while (1) {
            await 'A'
            await 'B'
            await 'C'
        }
    }
    let status = state()
    // A B C A B 
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
    console.log(status.next())
}
```

### 抽奖应用

```JS
{
    // generator应用：抽奖
    let draw = function (count) {
        // 具体抽奖逻辑
        console.info(`剩余${count}次`)
    }
    let residue = function* () {
        while (count > 0) {
            count--
            yield draw(count)
        }
    }
    let star = residue(5)
    let btn = document.createElement('button')
    btn.id = 'start'
    btn.textContent = '抽奖'
    document.body.appendChild(btn)
    document.getElementById('start').addEventListener('click', function () {
        star.next()
    }, false)
}
```

### 长轮询

```JS
{
    // 长轮询
    let ajax = function* () {
        yield new Promise(function (resolve, reject) {
            setTimeout(function () {
                // 这里写你调后台
                resolve({ code: 0 })
            }, 200)
        })
    }

    let pull = function () {
        let generator = ajax()
        let step = generator.next()
        step.value.then(function (d) {
            if (d.code != 0) {
                setTimeout(function () {
                    console.log('wait')
                    pull()
                }, 1000)
            } else {
                console.log(d)
            }
        })
    }
    pull()
}
```

## decorator（修饰器）

### 概念

是一个函数，修改行为（扩展类功能），修改类的行为（只在类起作用）

### 需要安装插件

`npm install babel- plugin - transform - decorators - legacy --save-dev`

```JS
.babelrc 添加
{
    "plugins":["transform-decorators-legacy"]
}
```

### 案例

```JS
{
    let readonly = function (tartget, name, descriptor) {
        descriptor.writable = false
        return descriptor
    }

    class Test {
        @readonly
        time() {
            return '2017-10-24'
        }
    }

    let test = new Test()

    // 会报错，不让修改
    /*
        test.time=function(){
            console.log('rest time')
        }
    */

    console.log(test.time())
}

{
    let typename = function (tartget, name, descriptor) {
        tartget.myname = 'hello'
    }

    @typename
    class Tes {

    }
    // 类修饰符 hello
    console.log('类修饰符'，Test.myname)
}
```

### 第三方库 core-decorators

`npm install core-decorators`

### 案例-埋点日志

```JS
{
    let log = (type) => {
        return function (tartget, name, descriptor) {
            let src_method = descriptor.value
            descriptor.value = (...arg) => {
                src_method.apply(tartget, arg)
                console.log(`log ${type}`)
            }
        }
    }

    class AD {
        @log('show')
        show(){
            console.log('ad is show')
        }
        
        @log('click')
        click(){
            console.log('ad is click')
        }
    }

    let ad = new AD()
    ad.show()
    ad.click()

    // 依次打印
    // ad is show
    // log show
    // ad is click
    // log click
}
```

## ES6 模块化

### 使用

```JS
export let A = 123

export function test() {
    console.log('test')
}

export class Hello {
    test() {
        console.log('class test')
    }
}

import { A, test, Hello } from './module'
console.log(A, test, Hello)

// 或者

import * as lesson from './module'
console.log(lesson.A, lesson.test)
```

### export default （推荐）

```JS
// 推荐用 export default
let A = 123

let test = function () {
    console.log('test')
}

class Hello {
    test() {
        console.log('class test')
    }
}

export default {
    A,
    test,
    Hello
}

// 名字随便 推荐这种
import Lesson from './module'
console.log(Lesson.A)
```
