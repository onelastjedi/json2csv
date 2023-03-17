module.exports = json2csv

/**
 * Convert json2csv
 *
 * @param {*} data - Valid JS object
 * @return {string} CSV string
 *
 * @example
 */
function json2csv (data) {
  if (
    !data || data.length === 0 ||
    Object.keys(data).length === 0
  ) {
    throw new Error('Unexpected input')
  }

  var arr = Array.isArray(data) ? data : [data]
  var fields,
      columns = []
  ;

  for (var i = 0; i < arr.length; ++i) {
    fields = Object.keys(arr[i])
    columns.push(Object.values(arr[i]))
  }

  return fields + '\n' + columns.join('\n')
}
