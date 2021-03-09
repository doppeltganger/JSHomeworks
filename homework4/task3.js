/*
task description:
Объявите конструктор, который создает экземпляры с унаследованным методом addProperty
Метод addProperty должен принимать два аргумента: имя свойства, значение свойства и добавлять экземпляру новое свойство с указанным именем и значением
*/

function CreateInstances() {
  this.addProperty = function(propertyName, propertyValue) {
    this[propertyName] = propertyValue
  }
}

const someInstance = new CreateInstances
someInstance.addProperty('name', 'Irina')
