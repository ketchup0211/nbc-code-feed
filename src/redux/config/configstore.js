import { combineReducers, createStore } from "redux";
import users from "../modules/user";
import postList from "../modules/postList";

const rootReducer = combineReducers({
  postList,
  users,
});

const store = createStore(rootReducer);

export default store;
