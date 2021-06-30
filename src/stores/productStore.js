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

        this.fetchProducts();
    }

    createBook = async (newBook) => {
        try {
            const response = await axios.post("http://localhost:8000/books", newBook);
            
            this.books.push(response.data);
        } catch (error) {
            console.error("THIS IS YOUR STUPID ERROR\n", error)
        }
        
        // this.fetchProducts();
    }

    updateProduct = async (updatedProduct) => {
        try {
            await axios.put(`http://localhost:8000/books/${updatedProduct.id}`,updatedProduct);
            const product = this.books.find(book => book.id === updatedProduct.id);
            Object.assign(product, updatedProduct);
            product.slug = slugify(product.name);
            
        } catch (error) {
            console.error("THIS IS YOUR STUPUD ERROR\n", error);
        }
        // EAAAAASY Salwa 

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