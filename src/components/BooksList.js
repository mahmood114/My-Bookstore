import products from "../products.js";
import BookItem from "./BookItem";
import {ListWrapper} from "../styles.js";
import SearchBar from "./SearchBar.js";
import {useState} from "react";

const Books = (props) => {
    
  const [query, setQuery] = useState("");

  const BooksList = products
    .filter(book => book.name.toLowerCase().includes(query.toLowerCase()) || book.price === Number(query))
    .map((book) => <BookItem book={book} setBook={props.setBook}/> );
  

  return (
    <div>
      <SearchBar setQuery={setQuery}/>
      <ListWrapper>{BooksList}</ListWrapper>
    </div>    
  )
}

export default Books;