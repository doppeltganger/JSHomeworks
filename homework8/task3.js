/*
task description: Нужно сделать так, чтобы у всех экзепляров, созданных конструктором User, был унаследованный метод counter(), который считает созданные конструктором экземпляры.
Каждый вызов конструктора увеличивает счетчик экземпляров на 1 и помещает новое значение счетчика в свойство id созданного экземпляра
*/


function User(name) {
  this.name = name
  this.id = this.counter()
}

User.prototype.counter = (
  function() {
    let counter = 0
    return function() {
      return this.id ? this.id : counter++
    }
  }
)()

const users = [
    new User ('Семен'),
    new User ('Антон'),
    new User ('Демьян'),
    new User ('Василий')
]
