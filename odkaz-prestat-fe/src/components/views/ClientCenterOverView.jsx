import { useEffect } from "react";
import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function ClientCenterOverView() {
  const { id } = useParams();
  const [clientCenter, setclientCenter] = useState(null);
  const [reviewsForKC, setreviewsForKC] = useState(null);

  useEffect(() => {
    fetchClientCenter();
    fetchReviewsForClientCenter();
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

  const fetchReviewsForClientCenter = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/reviews/?clientCenterId=${id}`,
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
        console.log("FETCH DATA: ", data);
        setreviewsForKC(data);
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
        <div className="govuk-grid-column-full">
          <h1 className=" govuk-heading-l govuk-!-margin-bottom-8 ">
            Prehľad hodnotenia pre {clientCenter?.name}
          </h1>
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
            <div className=" text-center text-md-left">
              <div className="gem-c-big-number__value mb-3">4,2</div>
              <div className="d-flex justify-content-center justify-content-md-start  mb-2">
                <BsStarFill className="mr-2" /> <BsStarFill className="mr-2" />{" "}
                <BsStarFill className="mr-2" /> <BsStar className="mr-2" />{" "}
                <BsStar className="mr-2" />
              </div>
              <div>42 hodnotení</div>
            </div>
          </Col>
          <Col xs={12} md={10}>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                5
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar now={90} className="mt-1" />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                4
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar now={60} className="mt-1" />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                3
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar now={75} className="mt-1" />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                2
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar now={30} className="mt-1" />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                1
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar now={10} className="mt-1" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <h2 className=" govuk-heading-m govuk-!-margin-bottom-8 govuk-!-margin-top-8 ">
        Posledné hodnotenia:
      </h2>
    </div>
  );
}

export default ClientCenterOverView;

// <ProgressBar now={80} className="govuk-!-margin-bottom-1" />
//       <ProgressBar now={30} className="govuk-!-margin-bottom-1" />
//       <ProgressBar now={15} className="govuk-!-margin-bottom-1" />
//       <ProgressBar now={5} className="govuk-!-margin-bottom-1" />
//       <ProgressBar now={10} className="govuk-!-margin-bottom-1" />

//  <div>
//    <span>spokojný</span>
//    <div className="progress govuk-!-margin-bottom-1">
//      <div
//        className="progress-bar  "
//        role="progressbar"
//        style={{ width: "95%" }}
//        aria-valuenow="0"
//        aria-valuemin="0"
//        aria-valuemax="100"
//      ></div>
//    </div>
//  </div>;
