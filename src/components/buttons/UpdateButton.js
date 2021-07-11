import ProductModal from "../modals/ProductModal";
import { useState } from "react";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal} className="btn btn-primary">
        Update
      </button>
      <ProductModal
        closeModal={closeModal}
        isOpen={isOpen}
        oldProduct={props.book}
      />
    </div>
  );
};

export default UpdateButton;
