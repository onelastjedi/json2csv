![bundle size](https://img.shields.io/bundlephobia/minzip/@onelastjedi/json2csv)
![version](https://img.shields.io/npm/v/@onelastjedi/json2csv)
![downloads](https://img.shields.io/npm/dm/@onelastjedi/json2csv)

# json2csv

JavaScript library to convert JSON to CSV and back. Has no dependencies. Only works with flat objects.

## Installation

If you use npm, `npm install @onelastjedi/json2csv`. You can also download the [latest release on GitHub](https://github.com/onelastjedi/json2csv/releases/latest). 

### Use

```js
import parse from '@onelastjedi/json2csv'

const csv = 'name,developer,age\Mary,true,25'
const json = { name: 'John', developer: false, age: 30 }

parse.csv2json(csv) // [{ name: 'Mary', developer: true, age: 25}]
parse.json2csv(json) // name,developer,age\nJohn,false,30
```

### License

[MIT](LICENSE)
