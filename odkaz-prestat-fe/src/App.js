import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import "./App.css";
import ChatWindow from "./components/chat/ChatWindow";
import FeedbackCard from "./components/feedback/FeedbackCard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ClientCenterOverView from "./components/views/ClientCenterOverView";
import Home from "./components/views/Home";
import Login from "./components/login/Login";
import Organizations from "./components/views/Organizations";
import UserProfile from "./components/views/UserProfile";
import { setLoggedUserAction } from "./redux/actions";
import ScrollToTop from "./utils/ScrollToTop";
import useDidUpdateEffect from "./utils/useDidUpdateEffect";
import UserRegistration from "./components/login/UserRegistration";
import EmailVerification from "./components/login/EmailVerification";

function App() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  //This is just to make component re-render correctly after token is set to LS. Token should be always taken from the Local Storage!!!
  const [tokenInLocalStorage, setTokenInLocalStorage] = useState(null);
  //const [loggedUser, setLoggedUser] = useState(null);
  // Do we have an access token in the URL?

  const token = new URLSearchParams(window.location.search).get("accessToken");
  //console.log(token);
  useEffect(() => {
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
  }, []);

  useDidUpdateEffect(() => {
    //console.log("useDidUpdateEffect: ", token);
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
  }, []);

  const loadLoggedUser = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/users/me`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        //setLoggedUser(data);
        dispatch(setLoggedUserAction(data));
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<UserProfile />} />
          <Route path="/user-registration" element={<UserRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/verify-email" element={<EmailVerification />} />
          <Route path="/organizations/:district" element={<Organizations />} />
          <Route
            path="/feedback/:orgId"
            element={
              localStorage.getItem("accessToken") ? <FeedbackCard /> : <Login />
            }
          />
          <Route path="/provider/:id" element={<ClientCenterOverView />} />
        </Routes>
        <ChatWindow />
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
