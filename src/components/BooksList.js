import products from "../products.js";
import BookItem from "./BookItem";
import {ListWrapper} from "../styles.js";

const Books = () => {
    
    const booksList = products.map((book) => (
        <BookItem name={book.name} image={book.image} price={book.price}/>
      ));

    return <ListWrapper>{booksList}</ListWrapper>
}

export default Books;