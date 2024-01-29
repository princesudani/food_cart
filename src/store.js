import { createStore } from "redux";
import rooter from "./redux/reducers/main";

const store = createStore(rooter);

export default store;
