/*
task description: Объявите функцию с одним формальным параметром, которая проверяет тип данных переданного аргумента и: если это число, возвращает текущую дату в формате "20.02.2019, 13:21:51"; в противном случае возвращает строку "Неверный тип данных". Вызовите функцию
*/

function verifyNumbers(value) {
  let newData = new Date()
  typeof value === 'number' ? console.log(newData.toLocaleString()) : console.log('Invalid data type')
}
