console.log('Node 原生风格的 cjs 测试')
console.log()

// import foo from 'esm-pkg'
console.log('不能使用 import 静态导入')
console.log()

const foo = require('cjs/foo')
console.log('可以通过模块名 require 一个 cjs', foo)
console.log()

const { name } = require('cjs/foo-named-export')
console.log('可以通过模块名 require 一个 cjs 的具名导出', name)
console.log()

try {
  require('esm-pkg/foo')
} catch (e) {
  console.log('不能 require esm package')
  console.log()
}

try {
  require('esm/foo.mjs')
} catch (e) {
  console.log('不能 require esm module')
  console.log()
}

import('esm-pkg/foo').then((mod) => {
  console.log('可以 import() 动态导入一个 esm，只用写模块名')
  console.log('mod', mod)
  console.log()
})

import('cjs/foo.js').then((mod) => {
  console.log('可以 import() 动态导入一个 cjs，但是要写完整地址，而不是模块名')
  console.log(mod)
  console.log()
})

import('cjs-pkg').then((mod) => {
  console.log('可以 import() 动态导入一个 cjs package, 不用写完整地址')
  console.log(mod)
  console.log()
})

import('cjs/foo-named-export.js').then((mod) => {
  console.log('可以 import() 动态导入 cjs 的具名导出')
  console.log(mod)
  console.log()
})
