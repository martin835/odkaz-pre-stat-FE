import UserReviewCard from "./UserReviewCard";

function UsersReviewRow3(props) {
  return (
    <div className="govuk-grid-row ">
      {props.row && props.row.map((review) => <UserReviewCard />)}
    </div>
  );
}

export default UsersReviewRow3;
