import { combineReducers } from "redux";
import { cartreducer } from "./reducer";

const rooter = combineReducers({
  cartreducer,
});

export default rooter;