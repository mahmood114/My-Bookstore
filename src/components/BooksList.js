import BookItem from "./BookItem";
import { ListWrapper } from "../styles.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";
import { Helmet } from "react-helmet";
import productStore from "../stores/productStore";
import { observer } from "mobx-react";

const Books = () => {

  const [query, setQuery] = useState("");

  const BooksList = productStore.books
    .filter(book => book.name.toLowerCase().includes(query.toLowerCase()) || book.price === Number(query))
    .map((book) => <BookItem book={book} />);

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{BooksList}</ListWrapper>
    </div>
  )
}

export default observer(Books);