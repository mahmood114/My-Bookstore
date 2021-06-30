import productStore from "../../stores/productStore";


const DeleteButton = (props) => {

    const handleDelete = () => {
        productStore.deleteBook(props.bookID);

    }

    return (
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
    )
}

export default DeleteButton;