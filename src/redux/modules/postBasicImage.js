const URLPATCH = "URLPATCH";

const initialState = "";

export const urlPatch = (payload) => {
  return {
    type: URLPATCH,
    payload,
  };
};

const postBasicImage = (state = initialState, action) => {
  switch (action.type) {
    case URLPATCH:
      return action.payload;
    default:
      return state;
  }
};

export default postBasicImage;
