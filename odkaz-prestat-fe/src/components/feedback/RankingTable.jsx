import { useEffect } from "react";
import { useState } from "react";
import { BsLadder } from "react-icons/bs";
import RankingRow from "./RankingRow";

function RankingTable() {
  const [rankings, setRankings] = useState(null);

  useEffect(() => {
    loadRankings();
  }, []);

  const loadRankings = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/reviews/stats?limit=10`, //limit of 10 is also set as default at the back-end
        {
          method: "GET",
          // headers: {
          //   "Content-type": "application/json",
          //   Authorization: "Bearer " + localStorage.getItem("accessToken"),
          // },
        }
      );
      if (response.ok) {
        const data = await response.json();
        //console.log(data.sort((b, a) => (a.avgRating > b.avgRating ? 1 : -1)));
        setRankings(data.sort((b, a) => (a.avgRating > b.avgRating ? 1 : -1)));
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="govuk-width-container govuk-!-margin-top-8 ">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-m govuk-!-margin-bottom-7">
            Rebríček hodnotení <BsLadder />
          </h2>

          <table className="idsk-table">
            <thead className="idsk-table__head">
              <tr className="idsk-table__row">
                <th scope="col" className="idsk-table__header">
                  <span className="th-span"> Klientské centrum</span>
                </th>
                <th scope="col" className="idsk-table__header">
                  <span className="th-span">Priemerne hodnotenie</span>
                </th>
                <th scope="col" className="idsk-table__header">
                  <span className="th-span">Počet hodnotení</span>
                </th>
              </tr>
            </thead>
            <tbody className="idsk-table__body">
              {rankings &&
                rankings.map((ranking, i) => (
                  <RankingRow
                    ranking={ranking}
                    rank={i + 1}
                    key={`RankingRow-${i}`}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RankingTable;
