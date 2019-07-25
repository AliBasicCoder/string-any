# string-any

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/b75c8c5c1c3947f58187f03cffb562d4)](https://app.codacy.com/app/AliBasicCoder/string-any?utm_source=github.com&utm_medium=referral&utm_content=AliBasicCoder/string-any&utm_campaign=Badge_Grade_Dashboard)
[![npm](https://img.shields.io/npm/v/string-any.svg)](https://www.npmjs.com/package/string-any)
[![GitHub](https://img.shields.io/github/license/AliBasicCoder/string-any.svg)](https://github.com/AliBasicCoder/string-any/)
[![npm bundle size](https://img.shields.io/bundlephobia/min/string-any.svg?style=flat-sqaure)](https://bundlephobia.com/result?p=string-any@latest)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAliBasicCoder%2Fstring-any.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FAliBasicCoder%2Fstring-any?ref=badge_shield)

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

```

## LICENSE

MIT License

Copyright (c) 2019 AliBasicCoder


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FAliBasicCoder%2Fstring-any.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FAliBasicCoder%2Fstring-any?ref=badge_large)