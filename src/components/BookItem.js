import {ProductWrapper} from "../styles.js";

const BookItem = (props) => (
        <ProductWrapper>
              <img className="booksImage" src={props.image} />
              <p className="centerText">{props.name}</p>
              <p className="product-price">{props.price} KD</p>
        </ProductWrapper>
    );

export default BookItem;