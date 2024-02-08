import { combineReducers, createStore } from "redux";
import SignUpReducer from "../modules/SignUpReducer";
import users from "../modules/user";
import postList from "../modules/postList";

const RootReducer = combineReducers({ SignUpReducer, postList, users });

const store = createStore(RootReducer);
export default store;
