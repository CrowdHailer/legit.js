const chalk = require('chalk')


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
