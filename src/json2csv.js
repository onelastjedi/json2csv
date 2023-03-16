module.exports = function json2csv (data) {
  if (
    !data || data.length === 0 ||
    Object.keys(data).length === 0
  ) {
    throw new Error('Unexpected input')
  }

  const arr = Array.isArray(data) ? data : [data]
  let fields
  const columns = []

  for (let i = 0; i < arr.length; ++i) {
    fields = Object.keys(arr[i])
    columns.push(Object.values(arr[i]))
  }

  return fields + '\n' + columns.join('\n')
}
