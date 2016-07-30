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
  var passed = true
  Object.keys(tests).forEach((testName) => {
    var test = tests[testName]
    var result = runTest(test)
    if (result.outcome === FAILED) {
      passed = false
    }
  })
  if (passed) {
    return {outcome: PASSED}
  } else {
    return {outcome: FAILED}
  }
}
exports.runTest = runTest
exports.assert = assert
exports.runSuite = runSuite
