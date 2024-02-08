const LOG = "user/LOG";

export const log = (payload) => {
  return {
    type: LOG,
    payload,
  };
};

const initialState = {
  user: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case LOG:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default users;
