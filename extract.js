const fs = require('fs')

module.exports = function extract(file) {
  let data = fs.readFileSync(file, 'utf8')
  data = data.split('\n')
  // slice off last element which is empty because of extra newline at end of file
  data = data.slice(0, data.length - 1)
  return data
}
