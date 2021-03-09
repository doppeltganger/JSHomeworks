/*
task description: Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы. Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой. Объявить функцию, которая добавляет нового студента в массив group
*/

const group = [
  {
    name: 'Stas',
    lastname: 'Danilov',
    age: 25,
    notebook: true,
  },
  {
    name: 'Dmitriy',
    lastname: 'Katkov',
    age: 25,
    notebook: true,
  },
  {
    name: 'George',
    lastname: 'Grishanin',
    age: 26,
    notebook: false,
  }
]

function getStudentsList() {
  const result = []
  for (let student of group) {
    let studentData = ''
    for (let property in student) {
      studentData += `${property}: ${student[property]}, `
    }
  result.push(studentData)
  }
return result
}

group.addNewStudent = function(name, lastName, age, notebook) {
  this.push({
    name,
    lastName,
    age,
    notebook
  })
}
