const fs = require('fs')

const dir = fs.readdirSync('metadata/parsed_images')
let counter = 0
dir.forEach(el => {
  if (el.split('.')?.[0] && /(\")/g.test(el.split('.')[0])) {
    fs.unlinkSync(`metadata/parsed_images/${el}`)
  }
})

console.log(counter);