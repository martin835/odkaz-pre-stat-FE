import { useEffect } from "react";
import { useState } from "react";
import { BsLadder } from "react-icons/bs";
import RankingRow from "./RankingRow";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function RankingTable() {
  const [rankings, setRankings] = useState(null);
  const { t } = useTranslation();

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
            {t("RankingTable-1")} <BsLadder />
          </h2>

          <table className="idsk-table">
            <thead className="idsk-table__head">
              <tr className="idsk-table__row">
                <th scope="col" className="idsk-table__header">
                  <span className="th-span"> Poskytovateľ služby</span>
                </th>
                <th scope="col" className="idsk-table__header">
                  <span className="th-span"> {t("RankingTable-3")}</span>
                </th>
                <th scope="col" className="idsk-table__header">
                  <span className="th-span"> {t("RankingTable-4")}</span>
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
