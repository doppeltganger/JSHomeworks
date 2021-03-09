/*
task description: Объявить функцию, которая получает в качестве аргумента строку и удаляет из нее символы, код которых больше 1103 или меньше 1040. Функция должна вернуть новую строку. Применить эту функцию к строке: "Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"
*/

function checkString(inputString) {
  let outputString = ''
  for (i = 0; i < inputString.length; i++) {
    if (inputString.charCodeAt(i) < 1103 && inputString.charCodeAt(i) > 1040 || inputString.charCodeAt(i) === 32)
      outputString += inputString[i]
  }
let resultingString = outputString.split(' ').filter(x => x).join(' ')
return resultingString
}
