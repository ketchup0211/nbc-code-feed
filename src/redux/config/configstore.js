import { combineReducers, createStore } from "redux";
import SignUpReducer from "../modules/SignUpReducer";

const RootReducer = combineReducers({ SignUpReducer: SignUpReducer });

const store = createStore(RootReducer);
export default store;
