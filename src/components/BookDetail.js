import {DetailWrapper} from "../styles.js";
import DeleteButton from "./button/DeleteButton.js";

const BookDetail = (props) => {
    
    const goBack = () => props.setBook(null);

    return (
        <DetailWrapper>
            <img src={props.book.image}/>
            <p>Name: <span>{props.book.name}</span></p>
            <p>Description: <span>{props.book.description}</span></p>
            <p>Price: <span>{props.book.price}</span></p>
            <button onClick={goBack}>Back</button>
            <DeleteButton setBook={props.setBook} goBack={goBack} bookID={props.book.id} deleteBook={props.deleteBook}></DeleteButton>
        </DetailWrapper>
    )
}

export default BookDetail;