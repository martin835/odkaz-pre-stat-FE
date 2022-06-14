import RankingTable from "../feedback/RankingTable";
import UsersReviewBlock from "../feedback/UsersReviewBlock";
import MirriServiceSelector from "../search/mirriOnly/MirriServiceSelector";
import SearchBlock from "../search/SearchBlock";

function Home() {
  return (
    <>
      {/* <SearchBlock /> */}
      <MirriServiceSelector />
      <RankingTable />
      <UsersReviewBlock />
    </>
  );
}

export default Home;
