import { initialState } from "../store/index.js";
import {
  SET_LOGGED_USER,
  REMOVE_LOGGED_USER,
  SET_SOCKET,
  REMOVE_SOCKET,
  SET_ADMINS,
  REMOVE_ADMIN,
  ADD_ADMIN,
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

    case SET_ADMINS:
      return {
        ...state,
        adminsOnline: action.payload,
      };

    //Probably not needed:
    // case REMOVE_ADMIN:
    //   return {
    //     ...state,
    //     adminsOnline: state.adminsOnline.filter(
    //       (admin) => admin._id !== action.payload
    //     ),
    //   };
    // case ADD_ADMIN:
    //   return {
    //     ...state,
    //     adminsOnline: state.adminsOnline.concat(action.payload),
    //   };

    default:
      return state;
  }
};

export default mainReducer;
