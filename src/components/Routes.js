// Router
import { Route, Switch } from "react-router";

// Components
import BooksList from "./BooksList.js";
import Home from "./Home.js";
import BookDetail from "./BookDetail.js";
import VendorList from "./VendorList";
import VendorDetail from "./VendorDetail";
import SignupModal from "./modals/SignupModal.js";

// Stores
import productStore from "../stores/productStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/vendors/:vendorSlug">
        <VendorDetail />
      </Route>
      <Route path="/vendors">
        <VendorList />
      </Route>
      <Route path="/products/:productSlug">
        <BookDetail />
      </Route>
      <Route path="/products">
        <BooksList books={productStore.books} />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
