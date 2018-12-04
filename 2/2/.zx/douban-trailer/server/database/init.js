const mongoose = require('mongoose')
const db = 'mongodb://localhost/douban-trailer'

mongoose.Promise = global.Promise

exports.connect = () => {
  let maxConnectTimes = 0

  return new Promise((resolve, reject) => {

    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true)
    }

    mongoose.connect(db)

    mongoose.connection.on('disconnected', () => {
      maxConnectTimes++
      if (maxConnectTimes < 5) {
        mongoose.connect(db)
      } else {
        throw new Error('挂了')
      }
    })

    mongoose.connection.on('error', err => {
      maxConnectTimes++
      if (maxConnectTimes < 5) {
        mongoose.connect(db)
      } else {
        throw new Error('挂了')
      }
    })

    mongoose.connection.once('open', () => {
      mongoose.model('Dog', {
        name: String
      })
      const doga = new doga({
        name: '小米'
      })

      doga.save().then(() => {
        console.log('hahahahah')
      })
    })

    mongoose.connection.on('open', () => {
      resolve()
      console.log('success.....')
    })
  })

}