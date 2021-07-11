import { observer } from "mobx-react";
import React from "react";
import { Helmet } from "react-helmet";
import { Redirect, useParams } from "react-router";
import productStore from "../stores/productStore";
import vendorStore from "../stores/vendorStore";
import { DetailWrapper } from "../styles";
import BooksList from "./BooksList";

const VendorDetail = () => {
  const { vendorSlug } = useParams();
  const vendor = vendorStore.vendors.find(
    (vendor) => vendor.slug === vendorSlug
  );

  const books = vendor.books?.map((book) => productStore.getBookById(book.id));

  console.log(books);

  if (!vendor) return <Redirect to="/vendors" />;

  return (
    <>
      <DetailWrapper>
        <Helmet>
          <title>{vendor.name}</title>
        </Helmet>
        <img src={vendor.image} />
        <h2>{vendor.name}</h2>
      </DetailWrapper>
      <BooksList books={books} vendor={vendor} />
    </>
  );
};

export default observer(VendorDetail);
