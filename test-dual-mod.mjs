import dualMod from 'dual-mod'
console.log(dualMod)

try {
  import('dual-mod').then((mod) => {
    console.log(mod)
  })
} catch (e) {
  console.log(e)
}
