'use strict';

var _ex = require('./ex');

var _ex2 = _interopRequireDefault(_ex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

console.log(_ex.name);
console.log((0, _ex.getName)());

// 不需要对应变量名, 而是根据 export default 的


console.log(_ex2.default); // 19
console.log(_ex2.default); // 19

// 批量导入

console.log(_ex.name2);
console.log((0, _ex.getName2)());
console.log(_ex.age);
//# sourceMappingURL=index.js.map