import { initialState } from "../store/index.js";
import { SET_LOGGED_USER, REMOVE_LOGGED_USER } from "../actions/index.js";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return {
        ...state,
        loggedUser: action.payload,
      };

    case REMOVE_LOGGED_USER:
      return {
        ...state,
        loggedUser: null,
      };

    default:
      return state;
  }
};

export default mainReducer;
