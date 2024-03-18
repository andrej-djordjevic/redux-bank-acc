import { applyMiddleware, combineReducers, createStore } from "redux";
import accountreducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerReducer,
});

const store = createStore(rootReducer,composeWithDevTools (applyMiddleware(thunk)));

export default store;
