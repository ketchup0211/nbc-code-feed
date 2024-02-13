const CHECKSEARCH = "search/CHECKSEARCH";

export const checkSearch = (payload) => {
  return {
    type: CHECKSEARCH,
    payload,
  };
};

const initialState = "";

const search = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default search;
