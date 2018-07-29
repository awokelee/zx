'use strict';

// const fs = require('fs')

/* fs.readFile('./package.json', (err, data) => {
  if (err) return console.log(err)
  data = JSON.parse(data)
  console.log(data.name)
}) */

/* function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) reject(err)
      else resolve(data)
    })
  })
} */

/* readFileAsync('./package.json')
  .then(data => {
    data = JSON.parse(data)
    console.log(data.name)
  }).catch(err => {
    console.log(err)
  }) */

// promisify
var util = require('util');

util.promisify(fs.readFile)('./package.json').then(JSON.parse).then(function (data) {
  console.log(data.name + '===');
}).catch(function (err) {
  console.log(err);
});
//# sourceMappingURL=promise.js.map