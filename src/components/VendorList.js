import vendorStore from "../stores/vendorStore";
import { observer } from "mobx-react";
import VendorItem from "./VendorItem";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { ListWrapper } from "../styles";
import { Helmet } from "react-helmet";

const VendorList = () => {
  const [query, setQuery] = useState("");

  const vendors = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} />);

  return (
    <>
      <Helmet>
        <title>Vendors</title>
      </Helmet>
      <SearchBar setQuery={setQuery} target="vendor" />
      <ListWrapper>{vendors}</ListWrapper>
    </>
  );
};

export default observer(VendorList);
