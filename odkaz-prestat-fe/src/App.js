import "./App.css";
import FeedbackCard from "./components/feedback/FeedbackCard";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import RecentReportsOverview from "./components/reports/RecentReportsOverview";
import SearchBlock from "./components/search/SearchBlock";

function App() {
  return (
    <>
      <Header />
      <SearchBlock />
      <RecentReportsOverview />
      <Footer />
    </>
  );
}

export default App;
