import RankingTable from "../feedback/RankingTable";
import UsersReviewBlock from "../feedback/UsersReviewBlock";
import SearchBlock from "../search/SearchBlock";

function Home() {
  return (
    <>
      <SearchBlock />
      <RankingTable />
      <UsersReviewBlock />
    </>
  );
}

export default Home;
