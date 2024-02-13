import { combineReducers, createStore } from "redux";
import SignUpReducer from "../modules/SignUpReducer";
import postList from "../modules/postList";
import users from "../modules/user";
import search from "../modules/search";
import postImageid from "../modules/postImageid";
import postBasicImage from "../modules/postBasicImage";

const RootReducer = combineReducers({
  SignUpReducer,
  postList,
  users,
  search,
  postImageid,
  postBasicImage,
});

const store = createStore(RootReducer);
export default store;
