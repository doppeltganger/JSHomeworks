/*
task description: Объявите функцию без формальных параметров, которая выводит в консоль сама себя и все переданные ей аргументы. Вызовите эту функцию с аргументами: 10, false, "google"
*/

function getItself() {
  console.log(arguments.callee.name, arguments)
}
