import productStore from "../../stores/productStore";
import { DeleteButtonStyled } from "../../styles"

const DeleteButton = (props) => {

    const handleDelete = () => {
        productStore.deleteBook(props.bookID);

    }

    return (
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    )
}

export default DeleteButton;