import { useState } from "react";
import { AiFillPlusCircleStyled } from "../../styles.js";
import ProductModal from "../modals/ProductModal.js";

const AddButton = ({ vendor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <div>
      <AiFillPlusCircleStyled onClick={openModal} />
      <ProductModal isOpen={isOpen} closeModal={closeModal} vendor={vendor} />
    </div>
  );
};

export default AddButton;
