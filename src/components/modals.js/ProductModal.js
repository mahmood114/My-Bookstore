import Modal from "react-modal";
import { useState } from "react";
import productStore from "../../stores/productStore";

const ProductModal = (props) => {
  const [product, setProduct] = useState(
    props.oldProduct || {
      name: "",
      price: 1,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (props.oldProduct) productStore.updateProduct(product);
    else productStore.createBook(product);

    setProduct({
      name: "",
      price: 1,
      description: "",
      image: "",
    });
    props.closeModal();
  };

  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
  };

  return (
    <Modal isOpen={props.isOpen} onRequestClose={props.closeModal}>
      <form onSubmit={handleSubmit}>
        <div className="form-group row py-1">
          <label
            for="colFormLabel"
            className="col-sm-2 col-form-label text-dark"
          >
            Name
          </label>
          <div className="col-sm-10">
            <input
              name="name"
              value={product.name}
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
            Price
          </label>
          <div className="col-sm-10">
            <input
              name="price"
              value={product.price}
              onChange={handleChange}
              className="form-control"
              type="number"
              min="1"
              required
            />
          </div>
        </div>
        <div className="form-group row py-1">
          <label
            for="colFormLabel"
            className="col-sm-2 col-form-label text-dark"
          >
            Description
          </label>
          <div className="col-sm-10">
            <input
              name="description"
              value={product.description}
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
            Image
          </label>
          <div className="col-sm-10">
            <input
              name="image"
              // value={product.image}
              onChange={handleImage}
              className="form-control"
              type="file"
              required
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          {props.oldProduct ? "Update" : "Create"}
        </button>
      </form>
    </Modal>
  );
};

export default ProductModal;
