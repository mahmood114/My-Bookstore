import { useState } from "react";
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        Sign up
      </button>
      <SignupModal closeModal={closeModal} isOpen={isOpen} />
    </>
  );
};

export default SignupButton;
