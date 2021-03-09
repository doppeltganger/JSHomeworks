/*
task description: напилите код функции generateError, такой, чтобы в результате работы кода в консоли было сообщение от ошибке: Application: Invalid arguments
Function needs 3 arguments, but only 1 present
*/

function testArguments() {
  function generateError(numArgs) {
    let error = new Error('Invalid arguments')
    error.name = 'Application'
    error.message = 'Invalid arguments'
    error.stack = `Function needs 3 arguments, but only ${numArgs} present`
    throw error
  }
  try {
    arguments.length >= 3 ? null : generateError (arguments.length)
  }
  catch(err) {
    console.error (`${err.name}: ${err.message}\n${err.stack}`)
  }
}
