export const SET_LOGGED_USER = "SET_LOGGED_USER";
export const REMOVE_LOGGED_USER = "REMOVE_LOGGED_USER";
// export const SET_SOCKET = "SET_SOCKET";
// export const REMOVE_SOCKET = "REMOVE_SOCKET";
// export const SET_ADMINS = "SET_ADMINS";
// export const REMOVE_ADMIN = "REMOVE_ADMIN";
// export const ADD_ADMIN = "ADD_ADMIN";
// export const SET_USERS = "SET_USERS";

export const setLoggedUserAction = (user) => ({
  type: SET_LOGGED_USER,
  payload: user,
});

export const removeLoggedUserAction = () => ({
  type: REMOVE_LOGGED_USER,
  //payload: i,
});

// export const setSocket = (socket) => ({
//   type: SET_SOCKET,
//   payload: socket,
// });

// export const removeSocket = () => ({
//   type: REMOVE_SOCKET,
// });

// export const setOnlineAdmins = (onlineAdmins) => ({
//   type: SET_ADMINS,
//   payload: onlineAdmins,
// });
// export const setOnlineUsers = (onlineUsers) => ({
//   type: SET_USERS,
//   payload: onlineUsers,
// });

//EXAMPLE WITH THUNK ?
// export const fetchSearchedJobsAction = (searchQuery) => {
//   //if (e.key !== "Enter") return;
//   console.log(searchQuery);
//   return async (dispatch, getState) => {
//     try {
//       dispatch({ type: SET_LOADING });
//       let response = await fetch(
//         `https://strive-jobs-api.herokuapp.com/jobs?search=${searchQuery}&limit=10`
//       );
//       if (response.ok) {
//         let data = await response.json();
//         console.log(data);
//         //dispatch data here
//         dispatch({
//           type: FETCHED_JOBS,
//           payload: data.data,
//         });
//         dispatch({ type: SET_LOADING });
//       } else {
//         alert("something wrong with the data");
//         //dispatch error here
//         dispatch({ type: SET_LOADING });
//         dispatch({ type: THROW_ERROR });
//       }
//     } catch (error) {
//       console.log(error);
//       //dispatch error here
//       dispatch({ type: SET_LOADING });
//       dispatch({ type: THROW_ERROR });
//     }
//   };
// };
