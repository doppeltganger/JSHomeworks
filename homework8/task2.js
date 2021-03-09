/*
task description: Завершите код рекурсивной функции typeMessage так, чтобы при ее вызове на страницу выводился один символ в секунду
*/

const container = document.body.appendChild (document.createElement ('h3'))
container.style = `color: magenta;`
const typeMessage = (function() {
    let index = 0
    return function (message) {
      let num = index
      setTimeout(() => container.textContent += message[num], 500 * num)
      if (index++ < message.length - 1) arguments.callee(message)
    }
})()

typeMessage ('Welcome to the hell')

const container = document.body.appendChild (document.createElement ('h3'))
container.style = `color: magenta;`
const typeMessage = (function() {
    let index = 0
    return function (message) {
      setTimeout(function recurs() {
        container.textContent += message[index]
        index++
        message[index] && setTimeout(recurs, 500)
      })
    }
})()

function typeMessage(message) {
  const messageArray = message.split('')
  let letter = messageArray.pop()
  setTimeout(() => document.body.appendChild(document.createElement('element')).textContent = letter, 1000 * messageArray.length)
  messageArray.length > 0 && typeMessage(messageArray.join(''))
}
