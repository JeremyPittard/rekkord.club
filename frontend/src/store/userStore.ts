import { Store } from "@tanstack/store";
import { UserDetails } from "../definitions/Users";

const initialState: UserDetails = {
  _id: "",
  email: "",
  name: "",
};

const userStore = new Store(initialState);

export default userStore;
