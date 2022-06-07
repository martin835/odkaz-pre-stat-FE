import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import mainReducer from "../reducers/index.js";

const composeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  loggedUser: null,
  socket: null,
};

/* const persistConfig = {
  key: "root",
  storage: storageSession,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
}; */

/* const persistedReducer = persistReducer(persistConfig, mainReducer); */

export const configureStore = createStore(
  mainReducer,
  initialState,
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);

/* export const persistor = persistStore(configureStore); */
