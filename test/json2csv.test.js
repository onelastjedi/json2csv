const assert = require('assert')
const { json2csv } = require('../src')

describe('Module `json2csv` is a', () => {
  it('Function which returns: ', () => {
    assert.equal(typeof json2csv, 'function')
  })

  context('exception when receives', () => {
    it('an empty object', function () {
      const res = () => json2csv({})
      assert.throws(res, Error)
    })

    it('an empty string', () => {
      const res = () => json2csv('')
      assert.throws(res, Error)
    })

    it('an empty array', () => {
      const res = () => json2csv([])
      assert.throws(res, Error)
    })

    it('undefined', () => {
      const res = () => json2csv(undefined)
      assert.throws(res, Error)
    })
  })

  context('valid csv when receives', () => {
    it('an array of objects', () => {
      const csv = 'name,developer,age\n' +
        'Mary,true,25\n' +
        'Dan,false,30'

      const arr = [
        { name: 'Mary', developer: true, age: 25 },
        { name: 'Dan', developer: false, age: 30 }
      ]

      assert.equal(json2csv(arr), csv)
    })

    it('an object', () => {
      const csv = 'name,developer,age\n' + 'Mary,true,25'
      const obj = { name: 'Mary', developer: true, age: 25 }

      assert.equal(json2csv(obj), csv)
    })
  })
})
