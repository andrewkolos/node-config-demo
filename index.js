const raw = require('./config/default.json')

const config = require('config')
const fakeDependency = require('fake_dependency')

console.log('=== Now in config-overwrite-issue-demo === ')
console.log(`Expected value of MyParam to be ${raw.MyParam}`)
console.log(`The value retrieved is ${config.get('MyParam')}. Good!`)
