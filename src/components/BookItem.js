const BookItem = (props) => (
        <div className="book">
              <img className="booksImage" src={props.image} />
              <h5 className="centerText">{props.name}</h5>
              <h5 className="centerText">{props.price} KD</h5>
        </div>
    );

export default BookItem;