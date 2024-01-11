const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/* 18. Destructuring Objects and Arrays

const book = getBook(2);

// Destructuring an Object

// Data without destructuring
const bookTitle = book.title;
const bookAuthor = book.author;
console.log(
  `The title of the book is "${bookTitle}" written by ${bookAuthor}.`
);

// Data with destructuring
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(
  `The title of the book is "${title}" written by ${author} & it focuses on ${genres}.`
);

// Destructuring an Array

// Data without destructuring
const firstGenre = genres[0];
const secondGenre = genres[1];
console.log(`This book is about ${firstGenre} and ${secondGenre}.`);

// Data with destructuring
const [primaryGenre, secondaryGenre] = genres;
console.log(`This book is about ${primaryGenre} & ${secondaryGenre}.`);

*/

/* 19. Rest/Spread Operator

const book = getBook(1);

// Data with destructuring
const { genres } = book;

// Rest operator
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(`This book is also about ${otherGenres}.`);

// Spread operator
// to spread out the array and add new variable
const newGenres = [...genres, "epic fantasy"];
console.log(newGenres);

// to spread out the object and add new variable or update an old one
const updatedBook = { ...book, moviePublisherDate: "2001-12-19", pages: 1000 };
console.log(updatedBook);

*/

/* 20. Template Literals

const book = getBook(1);

// Data with destructuring
const { title, pages, genres } = book;

// Template Literals
const infoAboutTheBook = `${title} has ${pages} pages and under ${genres.join(
  ", "
)} categories`;
console.log(infoAboutTheBook);

*/

/* 21. Ternaries Instead of if/else Statements

const book = getBook(1);

// Data with destructuring
const { title, pages, genres } = book;

// Template Literals
const infoAboutTheBook = `${title} has ${
  pages > 1000 ? "more than 1k" : "1K or less"
} pages and under ${genres.length > 5 ? "more than 5" : "5 "} categories`;
console.log(infoAboutTheBook);

*/

/* 22. Arrow Functions

const book = getBook(1);

// Data with destructuring
const { title, pages, genres } = book;

// Template Literals
const infoAboutTheBook = `${title} has ${
  pages > 1000 ? "more than 1k" : "1K or less"
} pages and under ${genres.length > 5 ? "more than 5" : "5 "} categories`;
console.log(infoAboutTheBook);

*/

/* 23. Short-Circuiting And Logical Operators: &&, ||, ??

const book = getBook(1);

// Data with destructuring
const { title, pages, genres, hasMovieAdaptation } = book;

// && returns the first falsy value
console.log(true && "Some String"); // 'Some String'
console.log("" && "Some String"); // Returns empty string because it is falsy
console.log(hasMovieAdaptation && "This book has a movie"); // 'This book has a movie'

// || returns the first true value
console.log(true || "Some String"); // true
console.log("" || "Some String"); // Returns 'Some String' because it is not falsy
console.log(hasMovieAdaptation || "This book has a movie"); // true

// ?? returns the first true value (its falsy values are null & undefined only)
console.log(true ?? "Some String"); // true
console.log("" ?? "Some String"); // Returns 'Some String' because it is not falsy
console.log(hasMovieAdaptation ?? "This book has a movie"); // true

*/

/* 24. Optional Chaining

const book = getBook(3);

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount; // 49701
  // if book.reviews.librarything.reviewsCount ===  undefined => set librarything to 0
  const librarything = book.reviews.librarything?.reviewsCount ?? 0; // 0
  console.log(goodreads);
  console.log(librarything);
  return goodreads + librarything; // 49701
}

console.log(getTotalReviewCount(book));

*/

/* 25. The Array map Method 

const books = getBooks();

const titles = books.map((book) => book.title);

console.log(titles);

const essentialData = books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});

console.log(essentialData);

*/

/* 26. The Array filter Method 

const books = getBooks();

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => book.title);

console.log(longBooks);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

*/

/* 27. The Array reduce Method

const books = getBooks();

const pagesAllBooks = books.reduce(
  (prevBook, book) => prevBook + book.pages,
  0
);

console.log(pagesAllBooks);

*/

/* 28. The Array sort Method

const arr = [3, 6, 2, 9, 7, 8, 4];

const sortedArr = arr.sort((a, b) => a - b);

console.log(arr);

console.log(sortedArr);

const books = getBooks();

const sortedBooks = books.slice().sort((a, b) => a.pages - b.pages);

console.log(sortedBooks);

*/

/* 29. Working With Immutable Arrays
 
const books = getBooks();

const newBook = {
  id: 6,
  title: "The Hobbit",
};

// 1. adding book object to array
const booksAfterAdd = [...books, newBook];

console.log(booksAfterAdd);

// 2. Deleting book object from array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id != 5);

console.log(booksAfterDelete);

// 3. Updating book object in the array
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? {} : book
);

console.log(booksAfterUpdate);

*/

/* 30. Asynchronous JavaScript: Promises

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Hello World!");

*/
