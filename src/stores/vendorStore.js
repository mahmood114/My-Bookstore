import { makeAutoObservable } from "mobx";
import instance from "./instance";

class VendorStore {
  vendors = [];
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchVendors = async () => {
    try {
      const response = await instance.get("/shops");
      this.vendors = response.data;
      this.loading = false;
    } catch (error) {
      console.error("There was a problem\n", error);
    }
  };
}

const vendorStore = new VendorStore();
vendorStore.fetchVendors();

export default vendorStore;
