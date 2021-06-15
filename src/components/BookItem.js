import {ProductWrapper} from "../styles.js";
import DeleteButton from "./button/DeleteButton.js";


const BookItem = (props) => (
        <ProductWrapper >
                <img onClick={() => props.setBook(props.book)} className="booksImage" src={props.book.image} />
                <p className="centerText">{props.book.name}</p>
                <p className="product-price">{props.book.price} KD</p>
                <DeleteButton bookID={props.book.id} deleteBook={props.deleteBook}></DeleteButton>
        </ProductWrapper>
    );

export default BookItem;