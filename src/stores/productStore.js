import books from "../books.js";
import { makeAutoObservable } from "mobx";

class ProductStore {
    books = books;

    constructor() {
        makeAutoObservable(this);
    }

    deleteBook = (bookID) => {
        const filtered = this.books.filter(book => book.id !== bookID);
        this.books = filtered;
    }
}

const productStore = new ProductStore();

export default productStore;