'use strict';

var _marked = /*#__PURE__*/regeneratorRuntime.mark(makeIterator);

/* function makeIterator (arr) {
  let nextIndex = 0

  return {
    next: () => {
      if (nextIndex < arr.length) {
        return {value: arr[nextIndex++], done: false}
      } else {
        return {done: true}
      }
    }
  }
}

const it = makeIterator(['吃饭', '睡觉', '打豆豆'])

console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().done) */

function makeIterator(arr) {
  var i;
  return regeneratorRuntime.wrap(function makeIterator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          i = 0;

        case 1:
          if (!(i < arr.length)) {
            _context.next = 7;
            break;
          }

          _context.next = 4;
          return arr[i];

        case 4:
          i++;
          _context.next = 1;
          break;

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
}

var gen = makeIterator(['吃饭', '睡觉', '打豆豆']);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);
//# sourceMappingURL=iterator.js.map