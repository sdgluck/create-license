# create-license

> Create a LICENSE file

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/poz"><img alt="npm version" src="https://badge.fury.io/js/poz.svg"></a>

Parts of this library are based on [`license-generator`](https://github.com/arshad/license-generator) by [Arshad Chummun](https://github.com/arshad). 

## Install 

```sh
npm install --save create-license
```

```sh
yarn add create-license
```

## Import

```sh
// ES2015
import createLicense from 'create-license'
```

```js
// CommonJS
var createLicense = require('create-license')
```

## Usage

### `createLicense(where, type, opts)`

Create a new LICENSE file.

- __where__ {String} where to create the file
- __type__ {String} license type
- __opts__ {Object} LICENSE values

## Available licenses

All available at `exports.licenses`:

    agpl
    apache
    artistic
    bsd-3-clause
    bsd
    cc0
    eclipse
    gpl-v2
    gpl-v3
    lgpl-v2.1
    lgpl-v3
    mit
    mozilla
    no-license
    unlicense
    wtfpl

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out the [great video tutorials on egghead.io](http://bit.ly/2aVzthz)!

## License

MIT © [Sam Gluck](https://github.com/sdgluck)
