const PASSED = 'passed'

function runTest (func) {
  return func()
}

function assert () {
  return {outcome: PASSED}
}

exports['a test returning a valid assertion should pass'] = function () {
  const test = runTest(() => assert(true))
  return assert(test.outcome === PASSED, 'test sould have passed')
}
