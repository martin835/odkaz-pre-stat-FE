import { useEffect } from "react";
import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import useDidUpdateEffect from "../../utils/useDidUpdateEffect";
import UsersReviewRow3 from "../feedback/UsersReviewRow3";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

function ClientCenterOverView() {
  const { id } = useParams();
  const [clientCenter, setclientCenter] = useState(null);
  const [reviewsForKC, setreviewsForKC] = useState(null);
  const [avgRating, setAvgRating] = useState(null);
  const [reviewsCount, setreviewsCount] = useState(null);
  const [weights, setWeights] = useState(null);
  const [arrOfRows, setArrOfRows] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    fetchClientCenter();
    fetchReviewsForClientCenter(6, 0);
  }, []);

  useDidUpdateEffect(() => {
    if (reviewsForKC) {
      chunkArrayInGroups(reviewsForKC, 3);
    }
  }, [reviewsForKC]);

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

  const fetchReviewsForClientCenter = async (limit, offset) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BE_URL}/reviews/?clientCenterId=${id}&limit=${limit}&offset=${offset}`,
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
        setreviewsForKC(data.reviews);
        setAvgRating(data.avgRating);
        setreviewsCount(data.reviewsCount);
        setWeights(data.weights);
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
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full">
          <h1 className=" govuk-heading-l govuk-!-margin-bottom-8 ">
            {t("ClientCenterOverView-1")} {clientCenter?.name}
          </h1>
        </div>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
            <div className=" text-center text-md-left">
              <div className="gem-c-big-number__value mb-3">
                {avgRating && avgRating}
              </div>
              <div className="d-flex justify-content-center justify-content-md-start  mb-2">
                {avgRating < 1.5 && (
                  <>
                    <BsStarFill className="mr-2" /> <BsStar className="mr-2" />{" "}
                    <BsStar className="mr-2" /> <BsStar className="mr-2" />{" "}
                    <BsStar className="mr-2" />
                  </>
                )}
                {avgRating >= 1.5 && avgRating < 2 && (
                  <>
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarHalf className="mr-2" /> <BsStar className="mr-2" />{" "}
                    <BsStar className="mr-2" /> <BsStar className="mr-2" />
                  </>
                )}
                {avgRating >= 2 && avgRating < 2.5 && (
                  <>
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" /> <BsStar className="mr-2" />{" "}
                    <BsStar className="mr-2" /> <BsStar className="mr-2" />
                  </>
                )}
                {avgRating >= 2.5 && avgRating < 3 && (
                  <>
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarHalf className="mr-2" /> <BsStar className="mr-2" />{" "}
                    <BsStar className="mr-2" />
                  </>
                )}
                {avgRating >= 3 && avgRating < 3.5 && (
                  <>
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" /> <BsStar className="mr-2" />{" "}
                    <BsStar className="mr-2" />
                  </>
                )}
                {avgRating >= 3.5 && avgRating < 4 && (
                  <>
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarHalf className="mr-2" /> <BsStar className="mr-2" />
                  </>
                )}
                {avgRating >= 4 && avgRating < 4.5 && (
                  <>
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" /> <BsStar className="mr-2" />
                  </>
                )}
                {avgRating >= 4.5 && avgRating < 4.8 && (
                  <>
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarHalf className="mr-2" />
                  </>
                )}
                {avgRating > 4.8 && (
                  <>
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />{" "}
                    <BsStarFill className="mr-2" />
                  </>
                )}
              </div>
              <div>
                {reviewsCount && reviewsCount} {t("ClientCenterOverView-2")}{" "}
              </div>
            </div>
          </Col>
          <Col xs={12} md={10}>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                5
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar
                  now={weights && weights.weight5}
                  className="mt-1"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                4
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar
                  now={weights && weights.weight4}
                  className="mt-1"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                3
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar
                  now={weights && weights.weight3}
                  className="mt-1"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                2
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar
                  now={weights && weights.weight2}
                  className="mt-1"
                />
              </Col>
            </Row>
            <Row className="mb-2">
              <Col xs={2} className="text-right">
                1
              </Col>
              <Col xs={10}>
                {" "}
                <ProgressBar
                  now={weights && weights.weight1}
                  className="mt-1"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <h2 className=" govuk-heading-m govuk-!-margin-bottom-8 govuk-!-margin-top-8 ">
        {t("ClientCenterOverView-3")}
      </h2>

      {arrOfRows &&
        arrOfRows.map((row, i) => (
          <UsersReviewRow3 row={row} rowid={`r-${i}`} key={`r-${i}`} />
        ))}
    </div>
  );
}

export default ClientCenterOverView;
