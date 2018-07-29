
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
const fs = require('fs')
const util = require('util')
const readAsync = util.promisify(fs.readFile)

async function init () {
  let data = await readAsync('./package.json')

  data = JSON.parse(data)
  console.log(data.name)
}

init()



