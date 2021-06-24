import { useParams } from "react-router";
import { Redirect, useHistory } from "react-router-dom";
import { DetailWrapper, DetailButtons } from "../styles.js";
import DeleteButton from "./button/DeleteButton.js";
import { Helmet } from "react-helmet";
import { observer } from "mobx-react";
import productStore from "../stores/productStore.js";

const BookDetail = () => {

    const productSlug = useParams().productSlug;
    const book = productStore.books.find(book => book.slug === productSlug);
    const history = useHistory();

    const goBack = () => history.goBack();
    if (!book) return (<Redirect to="/products" />);

    return (
        <DetailWrapper>
            <Helmet>
                <title>{book.name}</title>
            </Helmet>
            <img src={book.image} alt="book cover" />
            <p>Name: <span>{book.name}</span></p>
            <p>Description: <span>{book.description}</span></p>
            <p>Price: <span>{book.price}</span></p>
            <DetailButtons>
                <button className="btn btn-primary" onClick={goBack}>Back</button>
                <DeleteButton bookID={book.id}></DeleteButton>
            </DetailButtons>
        </DetailWrapper>
    )
}

export default observer(BookDetail);