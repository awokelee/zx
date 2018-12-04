/**
 * DOM 事件模型,编写一个 EventUtil 工具类实现事件管理兼容
 * 跨浏览器事件处理工具。只支持冒泡。不支持捕获
 */
var EventUtil = {
  getEvent: function (event) {
    return event || window.event;
  },
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  // 返回注册成功的监听器，IE中需要使用返回值来移除监听器
  on: function (elem, type, handler) {
    if (elem.addEventListener) {
      elem.addEventListener(type, handler, false);
      return handler;
    } else if (elem.attachEvent) {
      var wrapper = function () {
        var event = window.event;
        event.target = event.srcElement;
        handler.call(elem, event);
      };
      elem.attachEvent('on' + type, wrapper);
      return wrapper;
    }
  },
  off: function (elem, type, handler) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handler, false);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + type, handler);
    }
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else if ('returnValue' in event) {
      event.returnValue = false;
    }
  },
  stopPropagation: function (event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else if ('cancelBubble' in event) {
      event.cancelBubble = true;
    }
  },
  /**
   * keypress事件跨浏览器获取输入字符
   * 某些浏览器在一些特殊键上也触发keypress，此时返回null
   **/
  getChar: function (event) {
    if (event.which == null) {
      return String.fromCharCode(event.keyCode); // IE
    } else if (event.which != 0 && event.charCode != 0) {
      return String.fromCharCode(event.which); // the rest
    } else {
      return null; // special key
    }
  }
};

/**
 * 编写 javascript 深度克隆函数 deepClone
 */

function deepClone(obj) {
  var _toString = Object.prototype.toString;

  // null, undefined, non-boject, function
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  // DOM Node
  if (obj.nodeType && 'cloneNode' in obj) {
    return obj.cloneNode(true);
  }

  // Date
  if (_toString.call(obj) === '[object Date]') {
    return new Date(obj.getTime());
  }

  // RegExp
  if (_toString.call(obj) === '[object RegExp]') {
    var flags = [];
    if (obj.global) {
      flags.push('g');
    }
    if (obj.multiline) {
      flags.push('m');
    }
    if (obj.ignoreCase) {
      flags.push('i');
    }

    return new RegExp(obj.source, flags.join(''));
  }

  var result = Array.isArray(obj) ? [] : obj.constructor ? new obj.constructor() : {};

  for (var key in obj) {
    result[key] = deepClone(obj[key]);
  }

  return result;
}
/* 
function A() {
  this.a = a;
}

var a = {
  name: 'qiu',
  age: undefined,
  obj: {
    obj: [1],
    name: {
      name: 3
    }
  },
  birth: new Date(),
  pattern: /qiu/gim,
  // container: document.body,
  hobbys: ['book', new Date(), /aaa/gim, 111]
};

console.log(a)
var c = new A();
var b = deepClone(c);
console.log(c.a === b.a);
console.log(c, b); */

// 编写一个函数接受url中query string为参数,返回解析后的Object,query string使用application/x-www-form-urlencoded编码
/**
 * 解析query string转换为对象，一个key有多个值时生成数组
 *
 * @param {String} query 需要解析的query字符串，开头可以是?，
 * 按照application/x-www-form-urlencoded编码
 * @return {Object} 参数解析后的对象
 */
function parseQuery(query) {
  var result = {};

  // 如果不是字符串返回空对象
  if (typeof query !== 'string') {
    return result;
  }

  // 去掉字符串开头可能带的?
  if (query.charAt(0) === '?') {
    query = query.substring(1);
  }

  var pairs = query.split('&');
  var pair;
  var key, value;
  var i, len;

  for (i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i].split('=');
    // application/x-www-form-urlencoded编码会将' '转换为+
    key = decodeURIComponent(pair[0]).replace(/\+/g, ' ');
    value = decodeURIComponent(pair[1]).replace(/\+/g, ' ');

    // 如果是新key，直接添加
    if (!(key in result)) {
      result[key] = value;
    }
    // 如果key已经出现一次以上，直接向数组添加value
    else if (isArray(result[key])) {
      result[key].push(value);
    }
    // key第二次出现，将结果改为数组
    else {
      var arr = [result[key]];
      arr.push(value);
      result[key] = arr;
    } // end if-else
  } // end for

  return result;
}

function isArray(arg) {
  if (arg && typeof arg === 'object') {
    return Object.prototype.toString.call(arg) === '[object Array]';
  }
  return false;
}
/**
console.log(parseQuery('sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8'));
 */


// 解析一个完整的url,返回Object包含域与window.location相同
/**
 * 解析一个url并生成window.location对象中包含的域
 * location:
 * {
 *      href: '包含完整的url',
 *      origin: '包含协议到pathname之前的内容',
 *      protocol: 'url使用的协议，包含末尾的:',
 *      username: '用户名', // 暂时不支持
 *      password: '密码',  // 暂时不支持
 *      host: '完整主机名，包含:和端口',
 *      hostname: '主机名，不包含端口'
 *      port: '端口号',
 *      pathname: '服务器上访问资源的路径/开头',
 *      search: 'query string，?开头',
 *      hash: '#开头的fragment identifier'
 * }
 *
 * @param {string} url 需要解析的url
 * @return {Object} 包含url信息的对象
 */
function parseUrl(url) {
  var result = {};
  var keys = ['href', 'origin', 'protocol', 'host',
    'hostname', 'port', 'pathname', 'search', 'hash'
  ];
  var i, len;
  var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;

  var match = regexp.exec(url);

  if (match) {
    for (i = keys.length - 1; i >= 0; --i) {
      result[keys[i]] = match[i] ? match[i] : '';
    }
  }

  return result;
}

// 请实现一个Event类,继承自此类的对象都会拥有两个方法on,off,once和trigger

function Event() {
  if (!(this instanceof Event)) {
    return new Event();
  }
  this._callbacks = {};
}
Event.prototype.on = function (type, handler) {
  this_callbacks = this._callbacks || {};
  this._callbacks[type] = this.callbacks[type] || [];
  this._callbacks[type].push(handler);

  return this;
};

Event.prototype.off = function (type, handler) {
  var list = this._callbacks[type];

  if (list) {
    for (var i = list.length; i >= 0; --i) {
      if (list[i] === handler) {
        list.splice(i, 1);
      }
    }
  }

  return this;
};

Event.prototype.trigger = function (type, data) {
  var list = this._callbacks[type];

  if (list) {
    for (var i = 0, len = list.length; i < len; ++i) {
      list[i].call(this, data);
    }
  }
};

Event.prototype.once = function (type, handler) {
  var self = this;

  function wrapper() {
    handler.apply(self, arguments);
    self.off(type, wrapper);
  }
  this.on(type, wrapper);
  return this;
};




// event(事件)工具集，来源：github.com/markyun
markyun.Event = {
  // 页面加载完成后
  readyEvent: function (fn) {
    if (fn == null) {
      fn = document;
    }
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
      window.onload = fn;
    } else {
      window.onload = function () {
        oldonload();
        fn();
      };
    }
  },
  // 视能力分别使用dom0||dom2||IE方式 来绑定事件
  // 参数： 操作的元素,事件名称 ,事件处理程序
  addEvent: function (element, type, handler) {
    if (element.addEventListener) {
      //事件类型、需要执行的函数、是否捕捉
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, function () {
        handler.call(element);
      });
    } else {
      element['on' + type] = handler;
    }
  },
  // 移除事件
  removeEvent: function (element, type, handler) {
    if (element.removeEventListener) {
      element.removeEventListener(type, handler, false);
    } else if (element.datachEvent) {
      element.detachEvent('on' + type, handler);
    } else {
      element['on' + type] = null;
    }
  },
  // 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
  stopPropagation: function (ev) {
    if (ev.stopPropagation) {
      ev.stopPropagation();
    } else {
      ev.cancelBubble = true;
    }
  },
  // 取消事件的默认行为
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
  // 获取事件目标
  getTarget: function (event) {
    return event.target || event.srcElement;
  },
  // 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
  getEvent: function (e) {
    var ev = e || window.event;
    if (!ev) {
      var c = this.getEvent.caller;
      while (c) {
        ev = c.arguments[0];
        if (ev && Event == ev.constructor) {
          break;
        }
        c = c.caller;
      }
    }
    return ev;
  }
};