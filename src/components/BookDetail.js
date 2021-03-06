import { useParams } from "react-router";
import { Redirect, useHistory } from "react-router-dom";
import { DetailWrapper } from "../styles.js";
import DeleteButton from "./buttons/DeleteButton.js";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";
import productStore from "../stores/productStore.js";
import UpdateButton from "./buttons/UpdateButton.js";

const BookDetail = () => {
  const { productSlug } = useParams();
  const book = productStore.books.find((book) => book.slug === productSlug);
  const history = useHistory();

  const goBack = () => history.goBack();
  if (!book) return <Redirect to="/products" />;

  return (
    <DetailWrapper>
      <Helmet>
        <title>{book.name}</title>
      </Helmet>
      <img src={book.image} alt="book cover" />
      <h2>{book.name}</h2>
      <p>{book.description}</p>
      <p>
        Price: <span>{book.price}</span>
      </p>
      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={goBack}>
          Back
        </button>
        <UpdateButton book={book} />
        <DeleteButton bookID={book.id}></DeleteButton>
      </div>
    </DetailWrapper>
  );
};

export default observer(BookDetail);
