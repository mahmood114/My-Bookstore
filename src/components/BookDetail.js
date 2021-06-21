import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import {DetailWrapper} from "../styles.js";
import DeleteButton from "./button/DeleteButton.js";

const BookDetail = (props) => {
    
    const productSlug = useParams().productSlug;
    const book = props.books.find(book => book.slug === productSlug);

    const goBack = () => (<Redirect to="/products" />);

    if (!book) return (<Redirect to="/products" />);

    return (
        <DetailWrapper>
            <img src={book.image}/>
            <p>Name: <span>{book.name}</span></p>
            <p>Description: <span>{book.description}</span></p>
            <p>Price: <span>{book.price}</span></p>
            <button onClick={goBack}>Back</button>
            <DeleteButton setBook={props.setBook} bookID={book.id} deleteBook={props.deleteBook}></DeleteButton>
        </DetailWrapper>
    )
}

export default BookDetail;