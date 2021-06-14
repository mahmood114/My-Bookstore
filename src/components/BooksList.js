import products from "../products.js";
import BookItem from "./BookItem";
import {ListWrapper} from "../styles.js";
import SearchBar from "./SearchBar.js";
import {useState} from "react";

const Books = () => {
    
  const [query, setQuery] = useState("");

  const BooksList = products
    .filter(book => book.name.toLowerCase().includes(query.toLowerCase()) || book.price === Number(query))
    .map((book) => <BookItem name={book.name} image={book.image} price={book.price}/> );
  

  return (
    <div>
      <SearchBar setQuery={setQuery}/>
      <ListWrapper>{BooksList}</ListWrapper>
    </div>    
  )
}

export default Books;