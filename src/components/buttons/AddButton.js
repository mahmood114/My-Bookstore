import { useState } from "react";
import {AiFillPlusCircleStyled} from "../../styles.js";
import ProductModal from "../modals.js/ProductModal.js";

const AddButton = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <div>
            <AiFillPlusCircleStyled onClick={openModal}/>
            <ProductModal 
                isOpen={isOpen}
                closeModal={closeModal}
            />
        </div>
    );
};

export default AddButton;