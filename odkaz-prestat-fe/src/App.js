import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import FeedbackCard from "./components/feedback/FeedbackCard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/views/Home";
import Organizations from "./components/views/Organizations";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  useEffect(() => {
    // Do we have an access token in the URL?
    const token = new URLSearchParams(window.location.search).get(
      "accessToken"
    );
    if (token) {
      localStorage.setItem("token", token);
      Navigate(window.location.pathname);
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizations/:district" element={<Organizations />} />
        <Route path="/feedback/:orgId" element={<FeedbackCard />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
