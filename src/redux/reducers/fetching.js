import { types as actionTypes } from "../actions";

const fetching = (state = {}, action = {}) => {
  switch (action.type) {
  case actionTypes.SET_FETCHING.name:
    return {
      ...state,
      [action.name]: true
    };
/*  case actionTypes.SET_POSTS.name:
    return {
      ...state,
      posts: false
    };*/
  default:
    return state;
  }
};


export { fetching };
