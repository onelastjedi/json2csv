module.exports = toPrimitive
/**
 *  Convert string to primitives
 *
 *  @param {string} x - Any string
 *  @return {*} Detected primitive type
 *
 *  @example
 *    
 *    toPrimitive('John') -> 'John'
 *    toPrimitive('true') -> true
 *    toPrimitive('2590') -> 2590
 */
function toPrimitive (x) {
  if (!x) return ''
  if (parseInt(x)) return parseInt(x)
  if (x.toLowerCase() === 'true') return !!x
  if (x.toLowerCase() === 'false') return !x
  return x
}
