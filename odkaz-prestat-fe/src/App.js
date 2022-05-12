import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import FeedbackCard from "./components/feedback/FeedbackCard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/views/Home";
import Organizations from "./components/views/Organizations";

function App() {
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
