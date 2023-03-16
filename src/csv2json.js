const toPrimitive = require('./toPrimitive')
module.exports = function csv2json (csv) {
  const res = []
  const arr = csv.split('\n')
  const head = arr.slice(0, 1).join().split(',')
  const tail = arr.slice(1, arr.length).map(x => x.split(','))

  for (let i = 0; i < tail.length; ++i) {
    const f = {}

    for (let n = 0; n < tail[i].length; ++n) {
      f[head[n]] = toPrimitive(tail[i][n])
    }

    res.push(f)
  }

  return res
}
