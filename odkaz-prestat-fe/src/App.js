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
  // Do we have an access token in the URL?
  const token = new URLSearchParams(window.location.search).get("accessToken");

  useDidUpdateEffect(() => {
    //console.log(token);
    if (token) {
      localStorage.setItem("accessToken", token);
      setTokenInLocalStorage(token);
    } else {
      setTokenInLocalStorage(null);
    }
    //console.log(localStorage.getItem("accessToken"));
  }, [token]);

  return (
    <>
      <Header />
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
