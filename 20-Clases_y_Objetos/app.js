class Book {
  constructor(title, author, year, gender) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.gender = gender;
  }

  bookInfo() {
    return `${this.title} es un libro de ${this.gender},
        escrito por ${this.author} en el año ${this.year}`;
  }
}

let books = [];

while (books.length < 3) {
  let title = prompt("Introduce el titulo del libro");
  let athor = prompt("Introduce el autor del libro");
  let year = prompt("Introduce el año del libro");
  let gender = prompt("Introduce el genero del libro").toLowerCase();

  if (
    title != "" &&
    author != "" &&
    !isNaN(year) &&
    year.length == 4 &&
    (gender == "aventura" || gender == "terror" || gender == "fantasia")) {
     books.push(new Book(title, author, year, gender));   
  }
}

const showAllBooks= () =>{
    console.log(books)
}

showAllBooks();