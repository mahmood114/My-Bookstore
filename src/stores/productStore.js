import books from "../books.js";
import { makeAutoObservable } from "mobx";
import slugify from 'react-slugify';

class ProductStore {
    books = books;

    constructor() {
        makeAutoObservable(this);
    }

    deleteBook = (bookID) => {
        const filtered = this.books.filter(book => book.id !== bookID);
        this.books = filtered;
    }

    createBook = (newBook) => {
        newBook["id"] = this.books.length + 1;
        newBook["slug"] = slugify(newBook.name);
        this.books.push(newBook);
    }
}

const productStore = new ProductStore();

export default productStore;