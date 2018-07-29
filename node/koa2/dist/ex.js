'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var name = exports.name = 'Luke';
var getName = exports.getName = function getName() {
  return name;
};

// 导出默认
var age = 19;
exports.default = age;

// 批量导出

exports.name2 = name;
exports.getName2 = getName;
exports.age = age;
//# sourceMappingURL=ex.js.map