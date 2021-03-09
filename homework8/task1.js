/*
task description: Напилите код, выводящий на страницу текущее время в течение 100 секунд
*/

let currentTime = document.body.appendChild(document.createElement('h1'))
function recursion(second) {
  setTimeout(() => currentTime.textContent = new Date().toLocaleTimeString(), 1000 * second)
  second-- > 0 ? recursion(second) : null
}
