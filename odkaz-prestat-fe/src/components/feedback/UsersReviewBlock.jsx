import { useEffect } from "react";
import { useState } from "react";
import UsersReviewRow3 from "./UsersReviewRow3";

function UsersReviewBlock() {
  const [reviews, setreviews] = useState(null);
  const [row1, setRow1] = useState(null);
  const [row2, setRow2] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`http://localhost:3001/reviews`, {
        method: "GET",
        //   headers: {
        //     "Content-type": "application/json",
        //     Authorization: "Bearer " + localStorage.getItem("accessToken"),
        //   },
      });
      if (response.ok) {
        const data = await response.json();
        //console.log(data);
        setreviews(data);
        setRow1(data.slice(0, 3));
        setRow2(data.slice(3));
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="govuk-width-container govuk-!-margin-top-8 ">
      <h2 className="govuk-heading-m govuk-!-margin-bottom-7">
        Naposledy hodnotili:
      </h2>
      <UsersReviewRow3 row1={row1} />
      <UsersReviewRow3 row2={row2} />
    </div>
  );
}

export default UsersReviewBlock;

//NOTE:
// HOW TO CHUNK ARRAY FROM RESPONSE INTO SMALLER ARRAYS: https://stackoverflow.com/questions/7273668/how-to-split-a-long-array-into-smaller-arrays-with-javascript
