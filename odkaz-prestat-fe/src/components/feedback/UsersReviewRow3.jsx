import UserReviewCard from "./UserReviewCard";

function UsersReviewRow3(props) {
  return (
    <div className="govuk-grid-row ">
      {props.row &&
        props.row.map((review, i) => (
          <UserReviewCard review={review} key={`${props.rowid}-${i}`} />
        ))}
    </div>
  );
}

export default UsersReviewRow3;
