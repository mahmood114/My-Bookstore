import BookItem from "./BookItem";
import {ListWrapper} from "../styles.js";
import SearchBar from "./SearchBar.js";
import {useState} from "react";
import { Helmet } from "react-helmet";

const Books = (props) => {
    
  const [query, setQuery] = useState("");

  const BooksList = props.books
    .filter(book => book.name.toLowerCase().includes(query.toLowerCase()) || book.price === Number(query))
    .map((book) => <BookItem book={book} deleteBook={props.deleteBook}/> );
  

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <SearchBar setQuery={setQuery}/>
      <ListWrapper>{BooksList}</ListWrapper>
    </div>    
  )
}

export default Books;