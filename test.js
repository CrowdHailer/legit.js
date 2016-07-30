const chalk = require('chalk')
//
//
// function skip (reason) {
//   return {outcome: 'SKIPPED', message: reason}
// }
//
// function runTest (name, test) {
//   var output
//   try {
//     output = test()
//     if (Array.isArray(output)) {
//
//     } else {
//       output = [output]
//     }
//   } catch (e) {
//     output = [{outcome: 'ERRORED', message: e}]
//   } finally {
//     return output
//   }
// }
//
// var specification = {
//   'A simple passing test': function () {
//     return assert(true)
//   },
//   'A simple failing test': function () {
//     return assert(false)
//   },
//   'A failing test with description': function () {
//     return assert(false, 'really! I thought this might work')
//   },
//   'Several passing assertions': function () {
//     return [
//       assert(true),
//       assert(true)
//     ]
//   },
//   'A useless test': function () {
//     return []
//   },
//   'A pending test': function () {
//     return skip('this test is not yet ready.')
//   },
//   'A test that throws an error': function () {
//     throw new Error('A test error')
//   }
// }
//
// var errored = []
// var failed = []
// var skipped = []
// var reporter = {
//   prefix: function () {
//     process.stdout.write('\n   ')
//   },
//   push: function (result) {
//     var str = this.constants[result.outcome] || ''
//     process.stdout.write(str)
//     if (result.outcome === 'ERRORED') {
//       errored.push(result)
//     }
//     if (result.outcome === 'FAILED') {
//       failed.push(result)
//     }
//     if (result.outcome === 'SKIPPED') {
//       skipped.push(result)
//     }
//   },
//   summary: function () {
//     process.stdout.write('\n\n')
//     skipped.forEach(function (result) {
//       process.stdout.write('   ')
//       process.stdout.write(chalk.yellow.bold(result.message))
//       process.stdout.write('\n')
//     })
//     errored.forEach(function (result) {
//       process.stdout.write('   ')
//       process.stdout.write(chalk.red.bold(result.message))
//       process.stdout.write('\n')
//     })
//     failed.forEach(function (result) {
//       process.stdout.write('   ')
//       process.stdout.write(chalk.red.bold(result.message))
//       process.stdout.write('\n')
//     })
//     process.stdout.write('\n')
//   },
//   constants: {
//     'PASSED': chalk.green('.'),
//     'FAILED': chalk.red.bold('F'),
//     'ERRORED': chalk.red.bold('E'),
//     'SKIPPED': chalk.yellow('S')
//   }
// }

// reporter.prefix()
// var testNames = Object.keys(specification)
// testNames.map(function (name) {
//   var test = specification[name]
//   var results = runTest(name, test)
//   results.forEach(function (result) {
//     reporter.push(result)
//   })
// })
// reporter.summary()


const suite = require('./legit.legit.js')
var testNames = Object.keys(suite)
testNames.forEach((name) => {
  if (suite[name]().outcome !== 'passed') {
    console.log(name)
    process.exit(-1)
  }
})
