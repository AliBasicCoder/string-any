# string-any

[![npm](https://img.shields.io/npm/v/string-any.svg)](https://www.npmjs.com/package/string-any)
[![GitHub](https://img.shields.io/github/license/AliBasicCoder/string-any.svg)](https://github.com/AliBasicCoder/string-any/)
[![npm bundle size](https://img.shields.io/bundlephobia/min/string-any.svg?style=flat-sqaure)](https://bundlephobia.com/result?p=string-any@latest)

[string-any](https://www.npmjs.com/package/string-any)
is a package to convert any object to a string and not ```[object Object]```

## Usage

``` js
const { toStr } = require('string-any');

toStr(
  {
    name: 'name',
    id: 32918,
    randomThing: {
      dwq: 'hello'
    },
    func: () => 'hello'
  }
);
// => '{
// =>   name: "name",
// =>   id: 32918,
// =>   randomThing: {
// =>      dwq: "hello"
// =>   },
// =>   func: () => 'hello'
// => }'
}
```

## LICENSE

MIT License

Copyright (c) 2019 AliBasicCoder
