/*
task description: Результат должен быть аналогичен тому, что получится в предыдущем упражнении. Однако исходный массив tags должен быть массивом объектов, каждый из которых содержит не только имя тега элемента, но и его атрибуты, а так же хотя бы один обработчик события. Таким образом, массив classes нам уже не нужен, но кроме стилизации элементов нужно еще добавить их контент, используя как атрибуты тегов, так и свойства элементов DOM.
*/

const tags = [
  {tagName: 'h1',
   tagClass: 'heading',
   text: 'heading tag',
   onclick: function(event) {
     event.target.style = 'background-color: yellow'
   }
  },
  {tagName: 'b',
   tagClass: 'bold',
   text: 'bold tag',
   onclick: function(event) {
     event.target.style = 'background-color: blue'
   }
  },
  {tagName: 'p',
   tagClass: 'paragrapgh',
   text: 'paragraph tag',
   onclick: function(event) {
     event.target.style = 'background-color: green'
   }
  },
  {tagName: 'em',
   tagClass: 'emphasis',
   text: 'emphasis tag',
   onclick: function(event) {
     event.target.style = 'background-color: red'
   }
  }
]

for (let element of tags) {
  document.body.appendChild(document.createElement(element.tagName)).classList.add(element.tagClass)
  let instance = document.getElementsByClassName(element.tagClass)[0]
  instance.innerHTML = element.text
  instance.onclick = element.onclick
}
