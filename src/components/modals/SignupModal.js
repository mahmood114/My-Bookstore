import Modal from "react-modal";
import { useState } from "react";
import authStore from "../../stores/authStore";

const SignupModal = ({ closeModal, isOpen }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    firstname: "",
    lastname: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    authStore.signup(user);

    setUser({
      username: "",
      password: "",
      email: "",
      firstname: "",
      lastname: "",
    });
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <form onSubmit={handleSubmit}>
        <div className="form-group row py-1">
          <label
            for="colFormLabel"
            className="col-sm-2 col-form-label text-dark"
          >
            Username
          </label>
          <div className="col-sm-10">
            <input
              name="username"
              onChange={handleChange}
              className="form-control"
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row py-1">
          <label
            for="colFormLabel"
            className="col-sm-2 col-form-label text-dark"
          >
            Password
          </label>
          <div className="col-sm-10">
            <input
              name="password"
              onChange={handleChange}
              className="form-control"
              type="password"
              required
            />
          </div>
        </div>
        <div className="form-group row py-1">
          <label
            for="colFormLabel"
            className="col-sm-2 col-form-label text-dark"
          >
            E-mail
          </label>
          <div className="col-sm-10">
            <input
              name="email"
              value={user.description}
              onChange={handleChange}
              className="form-control"
              type="email"
            />
          </div>
        </div>
        <div className="form-group row py-1">
          <label
            for="colFormLabel"
            className="col-sm-2 col-form-label text-dark"
          >
            First name
          </label>
          <div className="col-sm-10">
            <input
              name="firstname"
              onChange={handleChange}
              className="form-control"
              type="text"
            />
          </div>
        </div>
        <div className="form-group row py-1">
          <label
            for="colFormLabel"
            className="col-sm-2 col-form-label text-dark"
          >
            Last name
          </label>
          <div className="col-sm-10">
            <input
              name="lastname"
              onChange={handleChange}
              className="form-control"
              type="text"
            />
          </div>
        </div>

        <button className="btn btn-primary mt-3" type="submit">
          Sign up
        </button>
      </form>
    </Modal>
  );
};

export default SignupModal;
