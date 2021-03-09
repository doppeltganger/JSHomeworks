/*
task description: Создайте коллекцию вложенных друг в друга html-элементов с обработчиками событий click, mouseover, mouseout. Установите атрибуты стиля width и height такие, чтобы вложенные элементы были меньше размером, чем родитель. Установите значение #ff00ff50 атрибута background-color каждому элементу. Установите значение dotted 1px yellow; атрибута border каждому элементу. При наступлении события mouseover значение атрибута background-color должно меняться на #ffff0050. При наступлении события mouseout атрибуту background-color должно устанавливаться исходное значение. При наступлении события click элемент должен быть удален
*/

function over(event) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out(event) {
    event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler(event) {
    document.body.removeChild(event.target)
}
var container = document.body
for (var item of [1, 2, 3, 4, 5]) {
  var element = document.createElement ('div')
  element.style = `
    width: ${450 - 50 * item}px;
    height: ${450 - 50 * item}px;
    background-color: #ff00ff50;
    border: dotted 1px yellow;
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%
  `
   container.appendChild(element)
   container = element
   element.onmouseover = over
   element.onmouseout = out
   element.onclick = clickHandler
 }
