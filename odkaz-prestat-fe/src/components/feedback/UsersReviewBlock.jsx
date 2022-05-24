import { useEffect } from "react";
import { useState } from "react";
import { GrValidate } from "react-icons/gr";
import useDidUpdateEffect from "../../utils/useDidUpdateEffect";
import UsersReviewRow3 from "./UsersReviewRow3";

function UsersReviewBlock() {
  const [reviews, setreviews] = useState(null);
  const [arrOfRows, setArrOfRows] = useState(null);

  useEffect(() => {
    fetchReviews(6, 0);
  }, []);

  useDidUpdateEffect(() => {
    if (reviews) {
      chunkArrayInGroups(reviews, 3);
    }
  }, [reviews]);

  const fetchReviews = async (limit, offset) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/reviews/?limit=${limit}&offset=${offset}`,
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
        //console.log(data);

        if (!reviews) {
          setreviews(data);
        } else {
          setreviews(reviews.concat(data));
        }
      } else {
        console.log("error on fetching users");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const chunkArrayInGroups = (arr, size) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    //console.log(newArr);
    setArrOfRows(newArr);
  };

  return (
    <div className="govuk-width-container govuk-!-margin-top-8 ">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full-width">
          <h2 className="govuk-heading-m govuk-!-margin-bottom-7">
            Naposledy hodnotili <GrValidate />
          </h2>
        </div>
      </div>

      {arrOfRows &&
        arrOfRows.map((row, i) => (
          <UsersReviewRow3 row={row} rowid={`r-${i}`} key={`r-${i}`} />
        ))}

      <button
        className="govuk-button govuk-button--secondary"
        data-module="govuk-button"
        onClick={() => fetchReviews(3, reviews.length)}
      >
        Načítať viac hodnotení...
      </button>
    </div>
  );
}

export default UsersReviewBlock;

//NOTE:
// HOW TO CHUNK ARRAY FROM RESPONSE INTO SMALLER ARRAYS: https://stackoverflow.com/questions/7273668/how-to-split-a-long-array-into-smaller-arrays-with-javascript
