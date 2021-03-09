/*
task description:
1. Объявить конструктор LibraryBook, с помощью которого можно создавать и редактировать объекты, хранящие информацию о книгах в библиотеке.

2. Приватные свойства объекта:
1) title (название книги),
2) year (год издания),
3) author (автор),
4) readerName (кому выдана),
5) readerData (когда выдана)

3. Приватный метод giveTheBook(client)
внесение изменений в свойства:
1) readerName / client /
2) readerData / текущая дата /

4. Публичные методы:
1) getBookInfo() - посмотреть информацию о наличии книги
(вывести в консоль readerData)
2) getTheBook(client) - получить книгу:
проверка, что книга не выдана на руки
(приватное свойство readerName должно быть пустой строкой)
если выдана - вернуть null
если не выдана, то вызвать приватный метод giveTheBook(client) и вернуть bookTitle
3) returnBook() - вернуть книгу:
сбросить значения приватных свойств readerName, readerData

5. Создайте экземпляр книги. Запросите экземпляр от имени ... ( любое имя )
*/

function LibraryBook(title,year,author) {
  let bookTitle = title, bookYear = year, bookAuthor = author, readerData = null, readerName = null
  function giveBook(client) {
    readerData = (new Date()).toLocaleString()
    readerName = client
  }
  this.getBookInfo = function() {
    let bookInfo = readerName ? `Borrowed: ${readerData})` : 'The book is available'
    console.log(`${bookTitle}, ${bookAuthor}, ${bookYear}: ${bookInfo}`)
  }
  this.getBook = function(client) {
    if(readerName) {
      this.getBookInfo()
      return null
    }
    else {
      giveBook(client)
      console.log(`${bookTitle}, ${bookAuthor}, ${bookYear}: The book is reserved`)
    }
  }
  this.returnBook = function() {
    readerData = null
    readerName = null
  }
}

const allBooks = []

allBooks[0] = new LibraryBook('Treasure Island', 1883, 'Robert Louis Stevenson')
allBooks[1] = new LibraryBook('Robinson Crusoe', 1719, 'Daniel Defoe')
allBooks[2] = new LibraryBook('Le tour du monde en quatre-vingts jours', 1872, 'Jules Verne')

allBooks[0].getBookInfo()
allBooks[0].getBook('Stas Danylov')
allBooks[0].getBook('Dmitriy Katkov')
allBooks[0].returnBook()
allBooks[0].getBookInfo()
