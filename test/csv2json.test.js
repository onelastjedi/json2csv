const assert = require('assert')
const { csv2json } = require('../src')

describe('Module `csv2json` is a', () => {
  it('Function which returns: ', () => {
    assert.equal(typeof csv2json, 'function')
  })

  context('valid json when receives', () => {
    it('an valid csv string', () => {
      const csv = 'name,developer,age' + '\n' +
        'Mary,true,25'

      const obj = [{
        name: 'Mary',
        developer: true,
        age: 25
      }]

      assert.deepEqual(csv2json(csv), obj)
    })
  })
})
