# ArangoDB error codes

[![MIT License](https://img.shields.io/badge/license-mit-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/oprogramador/arangodb-error-codes.svg?branch=master)](https://travis-ci.org/oprogramador/arangodb-error-codes)

[![NPM status](https://nodei.co/npm/arangodb-error-codes.png?downloads=true&stars=true)](https://npmjs.org/package/arangodb-error-codes)

ArangoDB 3 error codes according to the [official documentation](https://docs.arangodb.com/3.0.10/Manual/Appendix/ErrorCodes.html).

## install

`npm install --save arangodb-error-codes`

## usage

```
const arangoErrorCodes = require('arangodb-error-codes');

db.collection(collectionName).firstExample({ id })
  .catch(error => (error.errorNum === arangoErrorCodes.ERROR_HTTP_NOT_FOUND ? Promise.resolve() : Promise.reject(error)));
```
