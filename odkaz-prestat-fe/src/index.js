import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { configureStore } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import translator from "./utils/i18n.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

//USED THIS WHEN TRYING TO DOWNGRADE TO REACT 17, BUT IT CAUSED TOO MANY ERRORS.

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={configureStore}>
//       <Router>
//         <App />
//       </Router>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// END - USED THIS WHEN TRYING TO DOWNGRADE TO REACT 17, BUT IT CAUSED TOO MANY ERRORS.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
