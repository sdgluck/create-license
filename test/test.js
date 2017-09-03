const fs = require('fs')
const createLicense = require('../')

describe('create-license', () => {
  afterAll(() => fs.unlinkSync('./LICENSE'))

  it('throws with bad where', () => {
    expect(() => createLicense(0)).toThrowError(/expecting where/i)
  })

  it('throws with bad license', () => {
    expect(() => createLicense('', 'licensh', {})).toThrowError(/unknown license type/i)
  })

  it('throws with bad opts', () => {
    expect(() => createLicense('', 'mit', 0)).toThrowError(/expecting opts/i)
  })

  it('creates license', () => {
    createLicense('./', 'MIT', {
      author: 'Sam Gluck',
      year: 2017,
      project: 'pkg'
    })

    expect(String(fs.readFileSync('./LICENSE'))).toContain('2017 Sam Gluck')
  })
})
