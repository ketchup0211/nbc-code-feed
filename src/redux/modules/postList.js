const ADDPOST = "ADDPOST";
// const SEARCHPOST = "SEARCHPOST";

export const addPost = (payload) => {
  return {
    type: ADDPOST,
    payload,
  };
};
const initialState = {
  post: null,
};

const postList = (state = initialState, action) => {
  switch (action.type) {
    case ADDPOST:
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default postList;
