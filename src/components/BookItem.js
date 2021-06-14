import {ProductWrapper} from "../styles.js";

const BookItem = (props) => (
        <ProductWrapper onClick={() => props.setBook(props.book)}>
              <img className="booksImage" src={props.book.image} />
              <p className="centerText">{props.book.name}</p>
              <p className="product-price">{props.book.price} KD</p>
        </ProductWrapper>
    );

export default BookItem;