const PASSED = 'passed'
const ERRORED = 'errored'

function runTest (func) {
  var result
  try {
    func()
    result = {outcome: PASSED}
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
    return {outcome: 'FAILED', message: description || 'assertion invalid'}
  }
}

exports['Test returning a valid assertion should pass'] = function () {
  const test = runTest(() => assert(true))
  return assert(test.outcome === PASSED, 'test sould have passed')
}
exports['Test returning two valid assertion should pass'] = function () {
  const test = runTest(() => [assert(true), assert(true)])
  return assert(test.outcome === PASSED, 'test sould have passed')
}
exports['Test throwing an error should be marked as error'] = function () {
  const test = runTest(() => { throw new Error('example error')})
  return assert(test.outcome === ERRORED, 'test sould have errored')
}
