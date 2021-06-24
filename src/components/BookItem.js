import { ProductWrapper } from "../styles.js";
import DeleteButton from "./buttons/DeleteButton.js";
import { Link } from "react-router-dom";

const BookItem = (props) => (
        <ProductWrapper className="card" >
                <img src={props.book.image} className="card-img-top" alt="" />
                <div className="card-body">
                        <h5 className="card-title text-center">{props.book.name}</h5>
                        <h5 className="card-text text-center">{props.book.price} KD</h5>
                        <div className="text-center">
                                <DeleteButton bookID={props.book.id} deleteBook={props.deleteBook}></DeleteButton>
                        </div>
                </div>
        </ProductWrapper>
);

/*
<ProductWrapper>
                <Link to={`/products/${props.book.slug}`}>
                        <img className="booksImage" src={props.book.image} alt="" />
                </Link>

                <p className="centerText">{props.book.name}</p>
                <p className="product-price">{props.book.price} KD</p>
                <div className="text-center">
                        <DeleteButton bookID={props.book.id} deleteBook={props.deleteBook}></DeleteButton>
                </div>
        </ProductWrapper>
*/

export default BookItem;