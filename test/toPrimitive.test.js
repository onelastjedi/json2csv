const assert = require('assert')
const toPrimitive = require('../src/toPrimitive')

function expected (arg) {
  return toPrimitive(arg)
}

describe('Module `toPrimitive` is a', () => {
  it('Function which returns:', () => {
    assert.equal(typeof toPrimitive, 'function')
  })

  it('true:Boolean when receives `true`', () => {
    assert.equal(expected('true'), true)
    assert.equal(typeof expected('true'), 'boolean')
  })

  it('false:Boolean when receives `false`', () => {
    assert.equal(expected('false'), false)
    assert.equal(typeof expected('false'), 'boolean')
  })

  it('strings itself when receives them', () => {
    assert.equal(expected('Mary'), 'Mary')
    assert.equal(expected(''), '')
  })

  it('an empty string when receives nothing', () => {
    assert.equal(expected(), '')
    assert.equal(expected(undefined), '')
    assert.equal(expected(null), '')
    assert.equal(expected(NaN), '')
  })
})
