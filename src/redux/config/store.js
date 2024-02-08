import { combineReducers, createStore } from "redux";
import SignUpReducer from "../modules/SignUpReducer";
import postList from "../modules/postList";
import users from "../modules/user";

const RootReducer = combineReducers({ SignUpReducer, postList, users });

const store = createStore(RootReducer);
export default store;
