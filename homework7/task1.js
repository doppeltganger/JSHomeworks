/*
task description: Создайте элемент p, при клике на котором появляется картинка размером 100px. При наведении указателя мышки на картинку ее размер должен плавно увеличиваться до 200px. При клике на картинке она должна исчезать
*/

const imageLink = 'https://static.poohitan.com/images/1516810828873_jasper-js.jpg'
let element = document.body.appendChild(document.createElement('p'))
element.innerText = 'Click'
let image = document.body.appendChild(document.createElement('img'))
element.onclick = function(event) {
  document.body.removeChild(event.target)
  image.src = imageLink
  image.style = `
    width: 150px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%
  `
}

image.onmouseover = function(event) {
  event.target.style = `
    width: 300px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transition: 5000ms
  `
}

image.onclick = function(event) {
  document.body.removeChild(event.target)
}
