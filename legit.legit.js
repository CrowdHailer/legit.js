const PASSED = 'passed'
const ERRORED = 'errored'
const FAILED = 'failed'

function runTest (func) {
  var result
  try {
    var output = func()
    const assertions = Array.isArray(output) ? output : [output]
    const passed = assertions.every((assertion) => assertion.outcome === PASSED)
    if (passed) {
      result = {outcome: PASSED}
    } else {
      result = {outcome: FAILED}
    }
  } catch (e) {
    result = {outcome: ERRORED}
  } finally {
    return result
  }
}

function assert (condition, description) {
  if (condition) {
    return {outcome: PASSED}
  } else {
    return {outcome: FAILED, message: description || 'assertion invalid'}
  }
}

function runSuite (tests) {
  return {outcome: PASSED}
}

exports['Test returning a valid assertion should pass'] = function () {
  const test = runTest(() => assert(true))
  return assert(test.outcome === PASSED, 'test should have passed')
}
exports['Test returning an invalid assertion should fail'] = function () {
  const test = runTest(() => assert(false))
  return assert(test.outcome === FAILED, 'test should have passed')
}
exports['Test returning two valid assertion should pass'] = function () {
  const test = runTest(() => [assert(true), assert(true)])
  return assert(test.outcome === PASSED, 'test should have passed')
}
exports['Test throwing an error should be marked as error'] = function () {
  const test = runTest(() => { throw new Error('example error')})
  return assert(test.outcome === ERRORED, 'test should have errored')
}
exports['Suite passes if all its tests pass'] = function () {
  const suite = runSuite({'my test': () => assert(true)})
  return assert(suite.outcome === PASSED, 'suite should have passed')
}
