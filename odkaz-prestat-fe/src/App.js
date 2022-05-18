import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FeedbackCard from "./components/feedback/FeedbackCard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/views/Home";
import Organizations from "./components/views/Organizations";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/views/Login";
import useDidUpdateEffect from "./utils/useDidUpdateEffect";
import { useState } from "react";

function App() {
  //This is just to make component re-render correctly after token is set to LS. Token should be always taken from the Local Storage!!!
  const [tokenInLocalStorage, setTokenInLocalStorage] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  // Do we have an access token in the URL?
  const token = new URLSearchParams(window.location.search).get("accessToken");

  useDidUpdateEffect(() => {
    //console.log(token);
    if (token) {
      localStorage.setItem("accessToken", token);
      setTokenInLocalStorage(token);
      loadLoggedUser();
    } else {
      setTokenInLocalStorage(null);
    }

    if (localStorage.getItem("accessToken")) {
      loadLoggedUser();
      setTokenInLocalStorage(localStorage.getItem("accessToken"));
    }
    //console.log(localStorage.getItem("accessToken"));
  }, [token]);

  const loadLoggedUser = async () => {
    try {
      const response = await fetch(`http://localhost:3001/users/me`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setLoggedUser(data);
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizations/:district" element={<Organizations />} />
        <Route
          path="/feedback/:orgId"
          element={
            localStorage.getItem("accessToken") ? <FeedbackCard /> : <Login />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
