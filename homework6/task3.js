/*
task description: Напилить код, который выбирает все заранее заданные элементы:
  const tags = ['header', 'footer', 'main', 'div', 'p']

и добавляет им класc:
  .redBack {
     background-color: red!important;
  }
*/

const tags = ['header', 'footer', 'main', 'div', 'p']

tags.forEach(element => {
    document.body.appendChild(document.createElement(element)).innerHTML = 'text<br>'
    document.body.getElementsByTagName(element)[0].classList.add('redBack')
})
for (let i = 0; i < tags.length; i++) {
    document.getElementsByClassName('redBack')[i].style = 'background-color: coral!important'
}
