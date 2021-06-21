import {ProductWrapper} from "../styles.js";
import DeleteButton from "./button/DeleteButton.js";
import {Link} from "react-router-dom";

const BookItem = (props) => (
        <ProductWrapper>
                <Link to={`/products/${props.book.slug}`}>
                        <img className="booksImage" src={props.book.image} />
                </Link>
                
                <p className="centerText">{props.book.name}</p>
                <p className="product-price">{props.book.price} KD</p>
                <DeleteButton bookID={props.book.id} deleteBook={props.deleteBook}></DeleteButton>
        </ProductWrapper>
    );

export default BookItem;