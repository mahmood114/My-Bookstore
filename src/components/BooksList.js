import products from "../products.js";
import BookItem from "./BookItem";

const Books = () => {
    
    const booksList = products.map((book) => (
        <BookItem name={book.name} image={book.image} price={book.price}/>
      ));

    return <div className="list">{booksList}</div>
}

export default Books;