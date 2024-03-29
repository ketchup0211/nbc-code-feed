const SET_NAME = "SET_NAME";
const SET_USERNAME = "SET_USERNAME";
const SET_EMAIL = "SET_EMAIL";
const SET_PASSWORD = "SET_PASSWORD";
const SET_AGREE = "SET_AGREE";

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};
export const setUserName = (userName) => {
  return {
    type: SET_USERNAME,
    payload: userName,
  };
};
export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};
export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};
export const setAgree = (agree) => {
  return {
    type: SET_AGREE,
    payload: agree,
  };
};

const initialState = {
  name: "",
  username: "",
  email: "",
  password: "",
  agree: false,
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
    case SET_AGREE:
      return {
        ...state,
        agree: state.payload,
      };
    default:
      return state;
  }
};

export default SignUpReducer;
