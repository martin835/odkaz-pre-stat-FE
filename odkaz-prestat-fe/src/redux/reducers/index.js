import { initialState } from "../store/index.js";
import {
  SET_LOGGED_USER,
  REMOVE_LOGGED_USER,
  SET_SOCKET,
  REMOVE_SOCKET,
} from "../actions/index.js";

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

    case SET_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };

    case REMOVE_SOCKET:
      return {
        ...state,
        socket: null,
      };

    default:
      return state;
  }
};

export default mainReducer;
