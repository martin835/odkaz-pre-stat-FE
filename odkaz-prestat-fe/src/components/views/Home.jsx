import RankingTableProviders from "../feedback/RankingTableProviders";
import UsersReviewBlock from "../feedback/UsersReviewBlock";
import ServiceSelector from "../search/ServiceSelector";

function Home() {
  return (
    <>
      <ServiceSelector />
      <RankingTableProviders />
      <UsersReviewBlock />
    </>
  );
}

export default Home;
