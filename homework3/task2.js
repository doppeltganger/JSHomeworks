/*
task description:
1. Объявите функцию userInfo, которая выводит в консоль:
  1) свойство "Дата регистрации: " + свойство data контекста вызова, если свойство registered имеет значение true
  2) сообщение "Незарегистрированный пользователь: " + свойство name в противном случае
(используйте переменные в литералах)
2. Создайте два объекта с одинаковым набором свойств:
 1) name (строка)
 2) registered (логическое значение)
 3) data (дата в формате "дд.мм.гг")
3. Добавьте каждому объекту метод getInfo, который будет ссылкой на функцию userInfo
4. Вызовите каждый метод
*/

function userInfo() {
  console.log(
    this.registered
      ? `Registration date : ${this.data}`
      : `Unregistered user: ${this.name}`
  )
}

const firstUser = {
    registered : true,
    name : 'Danilov Stas',
    data : new Date(1995, 01, 12).toLocaleDateString(),
    getInfo : userInfo
}
const secondUser = {
    registered : false,
    name : 'Katkov Dmitriy',
    data : new Date(1994, 12, 17).toLocaleDateString(),
    getInfo : userInfo
}
