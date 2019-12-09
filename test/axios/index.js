const utils = require('axios/lib/utils')

// const ori = axios.default.defaults

// const config1 = axios.default.create({})
// const config2 = axios.default.create({})

function merge () {
  console.log(this)
  let result = {}
  function assignValue (val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val)
    } else {
      result[key] = val
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    utils.forEach(arguments[i], assignValue)
  }
  return result
}

// let res = merge(A, B)

// console.log(res)
merge.call({'ff': 'aa'})
