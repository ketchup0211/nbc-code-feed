const SET_NAME = "SET_NAME";
const SET_USERNAME = "SET_USERNAME";
const SET_EMAIL = "SET_EMAIL";
const SET_PASSWORD = "SET_PASSWORD";

export const setName = (name) => {
  type: SET_NAME;
  payload: name;
};
export const setUserName = (userName) => {
  type: SET_USERNAME;
  payload: userName;
};
export const setEmail = (email) => {
  type: SET_EMAIL;
  payload: email;
};
export const setPassword = (password) => {
  type: SET_PASSWORD;
  payload: password;
};

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
};

const SignUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: state.payload,
      };
    case SET_USERNAME:
      return {
        ...state,
        username: state.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: state.payload,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: state.payload,
      };
    default:
      return state;
  }
};

export default SignUpReducer;
