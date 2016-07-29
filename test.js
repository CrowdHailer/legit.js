const chalk = require('chalk')

function assert (condition) {
  if (condition) {
    return {outcome: 'PASSED'}
  } else {
    return {outcome: 'FAILED'}
  }
}

function skip (reason) {
  return {outcome: 'SKIPPED', message: reason}
}

function runTest (name, test) {
  var output
  try {
    output = test()
    if (Array.isArray(output)) {

    } else {
      output = [output]
    }
  } catch (e) {
    output = [{outcome: 'ERRORED', message: e.message}]
  } finally {
    return output
  }
}

var specification = {
  'A simple passing test': function () {
    return assert(true)
  },
  'A simple failing test': function () {
    return assert(false)
  },
  'Several passing assertions': function () {
    return [
      assert(true),
      assert(true)
    ]
  },
  'A useless test': function () {
    return []
  },
  'A pending test': function () {
    return skip('this test is not yet ready.')
  },
  'A test that throws an error': function () {
    throw new Error('A test error')
  }
}

var reporter = {
  'PASSED': chalk.green('.'),
  'FAILED': chalk.red('F'),
  'ERRORED': chalk.red('E'),
  'SKIPPED': chalk.yellow('S')
}

process.stdout.write('\n   ')
var testNames = Object.keys(specification)
testNames.map(function (name) {
  var test = specification[name]
  var results = runTest(name, test)
  results.forEach(function (result) {
    process.stdout.write(reporter[result.outcome] || '')
  })
})
process.stdout.write('\n')
process.stdout.write('\n')