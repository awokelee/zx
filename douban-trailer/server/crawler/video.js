const puppeteer = require('puppeteer')

const base = `https://movie.douban.com/subject/`
const doubanId = `26359235`
const videoBase = `https://movie.douban.com/trailer/233683/#content`

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

async function launch() {
  console.log('Start visit the target page')

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  })

  const page = await browser.newPage()
  await page.goto(base + doubanId, {
    waitUntil: 'networkidle2'
  })

  await sleep(1000)

  const result = await page.evaluate(() => {
    var $ = window.$
    var it = $('.related-pic-video')
    if (it && it.length > 0) {
      var link = it.attr('href')
      var cover = it.find('img').attr('src')

      return {
        link,
        cover
      }
    }
    return {}
  })
  let video

  if (result.link) {
    await page.goto(result.link, {
      waitUntil: 'networkidle2'
    })
    await sleep(2000)
    video = await page.evaluate(()=>{
      var $ = window.$
      var it = $('source')

      if (it && it.length > 0) {
        return it.attr('src')
      }

      return ''
    })
  }
  const data = {
    video,
    doubanId,
    cover: result.cover
  }
  console.log(data)
  browser.close()
  // process.send(data)
  // process.exit(0)
}

launch()