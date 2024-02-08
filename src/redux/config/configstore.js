import { combineReducers, createStore } from "redux";
import users from "src/redux/modules/user";

const rootReducer = combineReducers({
  users,
});

const store = createStore(rootReducer);

export default store;
