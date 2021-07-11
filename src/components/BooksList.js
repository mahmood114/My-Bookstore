import BookItem from "./BookItem";
import { ListWrapper } from "../styles.js";
import SearchBar from "./SearchBar.js";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";
import AddButton from "./buttons/AddButton";

const Books = ({ books, vendor }) => {
  const [query, setQuery] = useState("");

  const BooksList = books
    .filter(
      (book) =>
        book.name?.toLowerCase().includes(query.toLowerCase()) ||
        book.price?.toString().includes(query)
    )
    .map((book) => <BookItem book={book} />);

  console.log(BooksList);

  return (
    <div>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <SearchBar setQuery={setQuery} target="book" />
      <AddButton vendor={vendor} />
      <ListWrapper>{BooksList}</ListWrapper>
    </div>
  );
};

export default observer(Books);
