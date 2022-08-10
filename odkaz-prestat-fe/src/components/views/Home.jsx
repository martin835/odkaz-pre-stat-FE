import RankingTable from "../feedback/RankingTable";
import UsersReviewBlock from "../feedback/UsersReviewBlock";
import ServiceSelector from "../search/ServiceSelector";

function Home() {
  return (
    <>
      <ServiceSelector />
      <RankingTable />
      <UsersReviewBlock />
    </>
  );
}

export default Home;
