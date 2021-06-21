import { DeleteButtonStyled } from "../../styles"

const DeleteButton = (props) => {

    const handleDelete = () => {
        props.deleteBook(props.bookID);
        
        // if(props.goBack)
        //     props.setBook(null);
    }

    return (
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    )
}

export default DeleteButton;