import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ClientCenterOverView() {
  const { id } = useParams();
  const [clientCenter, setclientCenter] = useState(null);

  useEffect(() => {
    fetchClientCenter();
  }, []);

  const fetchClientCenter = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/clientCenters/${id}`,
        {
          method: "GET",
          //   headers: {
          //     "Content-type": "application/json",
          //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
          //   },
        }
      );
      if (response.ok) {
        const data = await response.json();
        //console.log("FETCH DATA: ", data);
        setclientCenter(data);
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-two-thirds">
          <h2 className=" govuk-heading-m">
            Prehľad hodnotenia pre {clientCenter?.name}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ClientCenterOverView;
