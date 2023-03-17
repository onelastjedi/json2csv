/** @const {function} */
var toPrimitive = require('./toPrimitive')

/**
 * Convert csv to json
 *
 * @param {string} csv - Valid csv string
 * @return {array}
 *
 * @example
 */
function csv2json (csv) {
  var res = [],
      arr = csv.split('\n'),
      head = arr.slice(0, 1).join().split(','),
      tail = arr.slice(1, arr.length).map(x => x.split(','))
  ;

  for (var i = 0; i < tail.length; ++i) {
    var f = {}

    for (var n = 0; n < tail[i].length; ++n) {
      f[head[n]] = toPrimitive(tail[i][n])
    }

    res.push(f)
  }

  return res
}

module.exports = csv2json