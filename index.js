const path = require('path')
const fs = require('fs')

function assertStr (str, name) {
  if (typeof str !== 'string') {
    throw new Error(`Expecting ${name} to be string`)
  }
}

const licenses = fs
  .readdirSync(__dirname + '/licenses')
  .map((license) => license.replace(/\.[0-9a-z]+$/i, ''))

function createLicense (where, license, opts) {
  license = typeof license === 'string' ? license.toLowerCase() : null

  if (opts && typeof opts !== 'object' && !!opts.prototype) {
    throw new Error(`Expecting opts to be object`)
  }

  assertStr(where, 'where')

  if (licenses.indexOf(license) === -1) {
    throw new Error('Unknown license type ' + license)
  }

  if (typeof opts.year !== 'string' && typeof opts.year !== 'number') {
    throw new Error('Expecting opts.year to be number or string')
  }

  assertStr(opts.author, 'opts.author')
  assertStr(opts.project, 'opts.project')

  const license_file = __dirname + '/licenses/' + license + '.txt'
  const data = fs.readFileSync(license_file, 'utf8')
  const result = data
    .replace(/\[year\]/g, opts.year)
    .replace(/\[fullname\]/g, opts.author)
    .replace(/\[project\]/g, opts.project)

  fs.writeFileSync(
    path.resolve(where, 'LICENSE'),
    result,
    'utf8'
  )
}

module.exports = createLicense

module.exports.licenses = licenses
