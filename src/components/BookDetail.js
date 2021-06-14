import {DetailWrapper} from "../styles.js";

const BookDetail = (props) => {
    
    return (
        <DetailWrapper>
            <img src={props.book.image}/>
            <p>Name: <span>{props.book.name}</span></p>
            <p>Description: <span>{props.book.description}</span></p>
            <p>Price: <span>{props.book.price}</span></p>
        </DetailWrapper>
    )
}

export default BookDetail;