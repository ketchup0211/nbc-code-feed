const ADDTODOS = "ADDTODOS";

export const addTodos = (payload) => {
  return {
    type: ADDTODOS,
    payload,
  };
};
const initialState = {
  post: null,
};

const postList = (state = initialState, action) => {
  switch (action.type) {
    case ADDTODOS:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default postList;
