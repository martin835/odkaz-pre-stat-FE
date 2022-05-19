import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/organizations.css";
import ResultLink from "../search/ResultLink";

function Organizations(props) {
  const { region, numberOfCenters } = useLocation().state;
  const { district } = useParams();
  // console.log("params: ", district);
  const [clientCentersinDistrict, setClientCentersinDistrict] = useState(null);
  const URL = process.env.BE_DEV_URL;

  useEffect(() => {
    getclientCentersinDistrict();
  }, []);

  const getclientCentersinDistrict = async (event) => {
    try {
      const response = await fetch(
        `http://localhost:3001/clientCenters`
        // {
        //   credentials: "include",
        // }
      );
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        setClientCentersinDistrict(
          data.filter((c) => c.district.toLowerCase() === district)
        );
      } else {
        console.log("error on fetching users");
        setClientCentersinDistrict(undefined);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="govuk-width-container">
        {/* <div className="gem-c-title govuk-!-margin-top-8 govuk-!-margin-bottom-8">
          <h1 className="gem-c-title__text govuk-heading-xl">
            Orgány verejnej moci poskytuce elektronické služby
          </h1>
        </div> */}
        {/* ROW START */}
        <div className="govuk-grid-row ">
          <div className="govuk-grid-column-one-third">
            <h2 className="gem-c-heading gem-c-heading--font-size-27" id="bb">
              Klienstké centrá v {region} kraji
            </h2>
            <div
              className="gem-c-big-number govuk-!-margin-bottom-3"
              aria-hidden="true"
            >
              <span className="gem-c-big-number__value">
                {clientCentersinDistrict && clientCentersinDistrict.length}
              </span>
            </div>
          </div>
          <div className="govuk-grid-column-two-thirds">
            {/* MAP RESULTS HERE Start */}
            {clientCentersinDistrict &&
              clientCentersinDistrict.map((clientCenter, i) => (
                <ResultLink key={`${i}-kc`} clientCenter={clientCenter} />
              ))}
            {/* MAP RESULTS HERE END */}
          </div>
        </div>
        {/* ROW END */}
      </div>
    </>
  );
}

export default Organizations;
