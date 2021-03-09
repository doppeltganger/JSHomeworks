/*
task description: Создайте массив tags с именами валидных тегов HTML5. Теперь создайте массив classes с именами классов. Создайте элемент style и вставьте его в head документа. Добавьте контент элемента style с описанием классов, имена которых находятся в массиве classes. Итерируйте массив tags, создавая соответствующие элементы и вставляя их на страницу, добавляя каждому элементу класс из массива classes
*/

const tags = ['h1', 'b', 'p', 'em']
const classes = ['heading', 'bold', 'paragraph', 'emphasis']
let style = document.head.appendChild(document.createElement('style'))
for (let element of classes) {
  style.classList.add(element)
}
for (let item = 0; item < classes.length; item++) {
  document.body.appendChild(document.createElement(tags[item])).classList.add(classes[item])
}
