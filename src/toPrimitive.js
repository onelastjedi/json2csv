module.exports = function toPrimitive (x) {
  if (!x) return ''
  if (parseInt(x)) return parseInt(x)
  if (x.toLowerCase() === 'true') return !!x
  if (x.toLowerCase() === 'false') return !x
  return x
}
