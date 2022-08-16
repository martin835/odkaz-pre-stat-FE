import RankingTableServices from "../feedback/RankingTableServices";
import RankingTableProviders from "../feedback/RankingTableProviders";
import UsersReviewBlock from "../feedback/UsersReviewBlock";
import ServiceSelector from "../search/ServiceSelector";

function Home() {
  return (
    <>
      <ServiceSelector />
      <RankingTableServices />
      <RankingTableProviders />
      <UsersReviewBlock />
    </>
  );
}

export default Home;
