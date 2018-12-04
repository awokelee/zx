const fs = require('fs')
const path = require('path')
const axios = require('axios')
var request = require('request')
const markdownpdf = require('markdown-pdf')
const config = require('./config')
const utils = require('./utils')
const puppeteer = require('puppeteer');
const urlList = require('./list')


function imgReg(str) {
  const pattern = /!\[(.*?)\]\((.*?)\)/mg;
  const result = [];
  let matcher;

  while ((matcher = pattern.exec(str)) !== null) {
    str = str.replace(matcher[2], `./media/${path.basename(matcher[2])}`)
    result.push({
      name: path.basename(matcher[2]).split(' ')[0],
      url: matcher[2].split(' ')[0]
    });
  }
  return {str, result}
}


function getSection(url) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      headers: {
        "x-requested-with": "XMLHttpRequest",
        "Cookie": `__jsluid=601859efdd376bb4f9870d2960902819; _ga=GA1.2.834880515.1537986182; _gid=GA1.2.820642865.1538489308; PHPSESSID=h5jtkl34v3sjopao7t1u8nvgfb; remember_cc248a61b22205317666319f4fffa9146988fb4b=266911%7CE8nDlgwPy4zsFZ7xQz3VCEYsatVuvIyvgq8UKLWREnwEyF68LWyrBzXql3w5`
      }
    }).then(res => {
      resolve(res.data)
    })
  })
}

async function load(sectionData) {
  let { str, result } = imgReg(sectionData.content)

  let outputDir = 'ceshi'
  let mediaDir = 'media'

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, 0755)
  }

  if (!fs.existsSync(mediaDir)) {
    fs.mkdirSync(mediaDir, 0755)
  }

  if(result.length){
    result.forEach(item=>{
      request(item.url).pipe(fs.createWriteStream(`./media/${item.name}`))
    })
  }
  console.log(sectionData)
  let fd = fs.openSync(
    outputDir + '/' + sectionData.title.replace('?', '') + '.md',
    'w',
    0644
  )
  fs.writeFileSync(fd, `# ${sectionData.title}\n\n ${str}`, 'utf8')
  console.log(sectionData.title + ' 下载成功')
  fs.closeSync(fd)
  /* markdownpdf({ cssPath: path.join(__dirname, 'pdf.css') })
    .from.string(sectionData.content)
    .to(outputDir + '/' + sectionData.title + '.pdf', function() {
      console.log('Created', outputDir + '/' + sectionData.title)
    }) */
}

(async () => {
  for (let len = urlList.list.length, i = 0; i < len; i++) {
    let res = await getSection(urlList.list[i])
    load(res)
  }
})()