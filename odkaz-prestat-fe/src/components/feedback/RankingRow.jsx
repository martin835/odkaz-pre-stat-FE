import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function RankingRow(props) {
  return (
    <tr className="idsk-table__row">
      <td className="idsk-table__cell">{props.ranking.Provider[0].name}</td>
      <td className="idsk-table__cell">
        {Math.round(props.ranking.avgRating * 10) / 10}{" "}
        {props.ranking.avgRating < 1.5 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStar className="mr-1 pb-1" /> <BsStar className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" /> <BsStar className="mr-1 pb-1" />
          </>
        )}
        {props.ranking.avgRating >= 1.5 && props.ranking.avgRating < 2 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStarHalf className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" /> <BsStar className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" />
          </>
        )}
        {props.ranking.avgRating >= 2 && props.ranking.avgRating < 2.5 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" /> <BsStar className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" />
          </>
        )}
        {props.ranking.avgRating >= 2.5 && props.ranking.avgRating < 3 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarHalf className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" /> <BsStar className="mr-1 pb-1" />
          </>
        )}
        {props.ranking.avgRating >= 3 && props.ranking.avgRating < 3.5 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" /> <BsStar className="mr-1 pb-1" />
          </>
        )}
        {props.ranking.avgRating >= 3.5 && props.ranking.avgRating < 4 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarHalf className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" />
          </>
        )}
        {props.ranking.avgRating >= 4 && props.ranking.avgRating < 4.5 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStar className="mr-1 pb-1" />
          </>
        )}
        {props.ranking.avgRating >= 4.5 && props.ranking.avgRating < 4.8 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarHalf className="mr-1 pb-1" />
          </>
        )}
        {props.ranking.avgRating > 4.8 && (
          <>
            <BsStarFill className="mr-1 pb-1 ml-3 " />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />{" "}
            <BsStarFill className="mr-1 pb-1" />
          </>
        )}
      </td>
      <td className="idsk-table__cell">{props.ranking.noReviews}</td>
    </tr>
  );
}

export default RankingRow;
