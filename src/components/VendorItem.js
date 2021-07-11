import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { ProductWrapper } from "../styles.js";

const VendorItem = ({ vendor }) => {
  return (
    <ProductWrapper>
      <Link to={`/vendors/${vendor.slug}`}>
        <img src={vendor.image} />
      </Link>
      <p>{vendor.name}</p>
    </ProductWrapper>
  );
};

export default observer(VendorItem);
