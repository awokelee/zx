'use strict';

var init = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readAsync('./package.json');

          case 2:
            data = _context.sent;


            data = JSON.parse(data);
            console.log(data.name);

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// 第一个阶段 Callback
/* const fs = require('fs')

function readFile (cb) {
  fs.readFile('./package.json', (err, data) => {
    if (err) return cb(err)

    cb(null, data)
  })
}

readFile((err, data) => {
  if (!err) {
    data = JSON.parse(data)

    console.log(data.name)
  }
}) */

// 第二阶段 Promise
/* const fs = require('fs')

function readFileAsync (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) =>{
      if (err) reject(err)
      else resolve(data)
    })
  })
}

readFileAsync('./package.json')
  .then(data => {
    data = JSON.parse(data)

    console.log(data.name)
  })
  .catch(err => {
    console.log(err)
  }) */

// 第三个阶段 co + Generator Function + Promise

/* const fs = require('fs')
const co = require('co')
const util = require('util')

co(function *() {
  let data = yield util.promisify(fs.readFile)('./package.json')

  data = JSON.parse(data)
  console.log(data.name)
}) */

// 第四个阶段 Async
var fs = require('fs');
var util = require('util');
var readAsync = util.promisify(fs.readFile);

init();
//# sourceMappingURL=await.js.map