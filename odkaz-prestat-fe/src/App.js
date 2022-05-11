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
import OrganizationWithServices from "./components/views/OrganizationWithServices";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route
          path="/organizations/:orgId"
          element={<OrganizationWithServices />}
        />
        <Route
          path="/organizations/:orgId/feedback/:serviceId"
          element={<FeedbackCard />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
