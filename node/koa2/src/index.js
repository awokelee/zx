/* import { promisify } from 'util'
import { resolve as r } from 'path'
import { readFile, writeFileSync as wfs } from 'fs'
import * as qs from 'querystring'

promisify(readFile)(r(__dirname, '../package.json'))
  .then(data => {
    data = JSON.parse(data)

    console.log(data.name)

    wfs(r(__dirname, './name'), String(data.name), 'utf8')
  }) */


 
import { name } from './ex'
import { getName } from './ex'

console.log(name)
console.log(getName())


// 不需要对应变量名, 而是根据 export default 的
import age from './ex'
import ageeee from './ex'

console.log(age) // 19
console.log(ageeee) // 19

// 批量导入
import {
  name2 as name3,
  getName2 as getName3,
  age as age3
} from './ex'
console.log(name3)
console.log(getName3())
console.log(age3)