import UserReviewCard from "./UserReviewCard";

function UsersReviewRow3(props) {
  return (
    <div className="govuk-grid-row ">
      {props.row1 &&
        props.row1.map((review, i) => (
          <UserReviewCard key={`row1-${i}`} review={review} />
        ))}
      {props.row2 &&
        props.row2.map((review, i) => (
          <UserReviewCard key={`row2-${i}`} review={review} />
        ))}
    </div>
  );
}

export default UsersReviewRow3;
