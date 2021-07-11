import { ProductWrapper } from "../styles.js";
import DeleteButton from "./buttons/DeleteButton.js";
import { Link } from "react-router-dom";
import UpdateButton from "./buttons/UpdateButton.js";
import { observer } from "mobx-react";

const BookItem = (props) => (
  <ProductWrapper className="card">
    <Link to={`/products/${props.book.slug}`}>
      <img src={props.book.image} className="card-img-top" alt="" />
    </Link>
    <div className="card-body">
      <h5 className="card-title text-center">{props.book.name}</h5>
      <h5 className="card-text text-center">{props.book.price} KD</h5>
      <div className="d-flex justify-content-between align-items-center">
        <UpdateButton book={props.book} />
        <DeleteButton
          bookID={props.book.id}
          deleteBook={props.deleteBook}
        ></DeleteButton>
      </div>
    </div>
  </ProductWrapper>
);

export default observer(BookItem);
