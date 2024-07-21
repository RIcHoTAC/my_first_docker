import Author from "./author.js";
import Book from "./book.js";

Author.hasMany(Book, { as: "books", foreignKey: "authorId" });
Book.belongsTo(Author, {
  foreignKey: "authorId",
});

export { Author, Book };
