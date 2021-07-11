import { makeAutoObservable } from "mobx";
import slugify from "react-slugify";
import instance from "./instance";

class ProductStore {
  books = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  deleteBook = async (bookID) => {
    try {
      await instance.delete(`/books/${bookID}`);
      const filtered = this.books.filter((book) => book.id !== bookID);
      this.books = filtered;
    } catch (error) {
      console.log("THIS IS YOUR STUPID ERROR!\n", error);
    }

    this.fetchProducts();
  };

  createBook = async (newBook, vendor) => {
    try {
      const formData = new FormData();
      for (let key in newBook) formData.append(key, newBook[key]);

      const response = await instance.post(
        `/shops/${vendor.id}/books`,
        formData
      );

      this.books.push(response.data);
      vendor.books.push({ id: response.data.id });
    } catch (error) {
      console.error("THIS IS YOUR STUPID ERROR\n", error);
    }
  };

  updateProduct = async (updatedProduct) => {
    try {
      const formData = new FormData();
      for (let key in updatedProduct) formData.append(key, updatedProduct[key]);

      await instance.put(`/books/${updatedProduct.id}`, updatedProduct);
      const product = this.books.find((book) => book.id === updatedProduct.id);
      Object.assign(product, updatedProduct);
      product.slug = slugify(product.name);
    } catch (error) {
      console.error("THIS IS YOUR STUPUD ERROR\n", error);
    }
  };

  fetchProducts = async () => {
    try {
      const response = await instance.get("/books");
      this.books = response.data;

      this.loading = false;
    } catch (error) {
      console.error("There was a problem\n", error);
    }
  };

  getBookById = (bookId) => this.books.find((book) => book.id === bookId);
}

const productStore = new ProductStore();
productStore.fetchProducts();

export default productStore;
