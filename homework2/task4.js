/*
task description: Создайте пустой массив letters. Создайте строку из нескольких слов, например "Backend As A Service". Напилите код, который разбивает эту строку на массив слов и пушит в массив letters первый символ каждого слова. Выведите результат в консоль. Объедините все элементы массива letters в одну строку и выведите ее в консоль
*/

const letters = []
let string = 'Backend As A Service'
const arrayOfWords = string.split(' ')
for (i = 0; i < arrayOfWords.length; i++) {
  letters.push(arrayOfWords[i].charAt(0))
}
console.log(letters)
let result = letters.join('')
console.log(result)
