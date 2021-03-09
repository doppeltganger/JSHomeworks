/*
task description: Есть два массива, в первом - имена, во втором - фамилии. Нужно создать массив, элементы которого будут содержать имя и фамилию одной строкой
*/

const names = ['Stas', 'Max', 'Dmitriy', 'George']
const lastnames = ['Danilov', 'Leonov', 'Katkov', 'Grishanin']
const resultingArray = []
for (i = 0; i < names.length; i++) {
  resultingArray.push(`${names[i]} ${lastnames[i]}`)
}
