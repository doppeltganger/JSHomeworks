/*
task description:
Создайте объект, свойства которого описывают содержимое дамской сумочки
1) Создайте метод объекта, позволяющий удалить что-то из сумочки
2) Создайте метод объекта, позволяющий положить что-то в сумочку
*/

const contentsOfHandbag = {
  contents: [],
  putThing: function(thing) {
    this.contents.push(thing)
  },
  removeThing: function(thing) {
    let index = this.contents.indexOf(thing)
    if (index === -1) return 'Nothing'
    return this.contents.splice(index, 1)
  }
}
