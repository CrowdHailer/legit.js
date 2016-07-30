const PASSED = 'passed'
const ERRORED = 'errored'
const FAILED = 'failed'

var assert = require('./legit').assert
var runTest = require('./legit').runTest
var runSuite = require('./legit').runSuite

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
exports['Suite fails if any of its tests fail'] = function () {
  const suite = runSuite({'my test': () => assert(false)})
  return assert(suite.outcome === FAILED, 'suite should have passed')
}
