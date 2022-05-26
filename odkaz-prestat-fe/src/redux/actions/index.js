export const SET_LOGGED_USER = "SET_LOGGED_USER";
export const REMOVE_LOGGED_USER = "REMOVE_LOGGED_USER";
// export const FETCHED_JOBS = "FETCHED_JOBS";
// export const THROW_ERROR = "THROW_ERROR";
// export const SET_LOADING = "SET_LOADING";

export const setLoggedUserAction = (user) => ({
  type: SET_LOGGED_USER,
  payload: user,
});

export const removeLoggedUserAction = () => ({
  type: REMOVE_LOGGED_USER,
  //payload: i,
});

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
