// import books from "../books.js";
import { makeAutoObservable } from "mobx";
import slugify from 'react-slugify';
import axios from "axios";

class ProductStore {
    books = [];

    constructor() {
        makeAutoObservable(this);
    }

    deleteBook = async (bookID) => {
        
        try {
            await axios.delete(`http://localhost:8000/books/${bookID}`);
            const filtered = this.books.filter(book => book.id !== bookID);
            this.books = filtered;
        }
        catch(error) {
            console.log("THIS IS YOUR STUPID ERROR!\n", error);
        }
    }

    /*
    deleteProducts = async (bookID) => {
        try {
            await axios.delete(`http://localhost:8000/books/${bookID}`);
        }
        catch(error) {
            console.log("THIS IS YOUR STUPID ERROR!\n", error);
        }
    }
    */

    createBook = (newBook) => {
        newBook["id"] = this.books.length + 1;
        newBook["slug"] = slugify(newBook.name);
        this.books.push(newBook);
    }

    updateProduct = (updatedProduct) => {
        const product = this.books.find(book => book.id === updatedProduct.id);
        // EAAAAASY Salwa 😎
        Object.assign(product, updatedProduct);
        product.slug = slugify(updatedProduct.name);
    }
    
    fetchProducts = async () => {
        try{
            const response = await axios.get("http://localhost:8000/books");

            this.books = response.data;
        }
        catch(error){
            console.error("There was a problem\n", error)
        }
    }

    
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;