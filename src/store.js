import accountreducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { account: accountreducer, customer: customerReducer },
});

export default store;
