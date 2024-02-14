const INITIALIZATION = "user/INITIALIZATION";

export const initialization = (payload) => {
  return {
    type: INITIALIZATION,
    payload,
  };
};

const initialState = {
  user: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZATION:
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};

export default users;
