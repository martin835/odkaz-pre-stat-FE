import { useEffect } from "react";
import { useState } from "react";
import UsersReviewRow3 from "./UsersReviewRow3";

function UsersReviewBlock() {
  const [reviews, setreviews] = useState(null);

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
        console.log(data);
        setreviews(data);
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const chunkReviews = () => {
    let reviewsToChunk = reviews;

    while (reviewsToChunk.length) {
      let row = reviewsToChunk.splice(0, 3);
      console.log(row);
      <UsersReviewRow3 row={row} />;
    }
  };

  return (
    <div className="govuk-width-container govuk-!-margin-top-8 ">
      <h2 className="govuk-heading-m govuk-!-margin-bottom-7">
        Naposledy hodnotili:
      </h2>
      {reviews && chunkReviews()}
    </div>
  );
}

export default UsersReviewBlock;
