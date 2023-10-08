console.log('Node 原生风格的 esm 测试')
console.log()

try {
  require('cjs/foo')
} catch (e) {
  console.log('不能使用 require')
  console.log()
}

import foo from 'esm-pkg/foo'
console.log('可以通过模块名 import 一个 esm')
console.log(foo)
console.log()

import foo2 from 'cjs/foo.js'
console.log('可以 import 一个 cjs 但是要指定文件名')
console.log(foo2)
console.log()

import haha from 'cjs-pkg'
console.log('可以 import 一个 cjs package，无需指定文件名')
console.log(haha)
console.log()

import('esm-pkg/foo').then((mod) => {
  console.log('可以使用 import() 动态导入一个 esm')
  console.log(mod)
  console.log()
})

import('cjs/foo.js').then((mod) => {
  console.log('可以使用 import() 动态导入一个 cjs，但是要写完整地址，而不是模块名')
  console.log(mod)
  console.log()
})

import('cjs-pkg').then((mod) => {
  console.log('可以 import() 动态导入一个 cjs package, 不用写完整地址')
  console.log(mod)
  console.log()
})
