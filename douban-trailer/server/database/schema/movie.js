const momgoose = require('moogoose')
const Schema = momgoose.Schema
const Mixed = Schema.Types.Mixed

const movieSchema = new Schema({
  doubanId: String,
  rate: Number,
  title: String,
  summary: String,
  video: String,
  poster: String,
  cover: String,
  rawTitle: String,
  movieTypes: [String],
  pubdate: Mixed,
  year: Number,
  tags: [String],
  videoKey: String,
  posterKey: String,
  coverKey: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

movieSchema.pre('save', next => {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.meta.updateAt = Date.now()
  }
  
  next()
})

mongoose.model('Movie', movieSchema)