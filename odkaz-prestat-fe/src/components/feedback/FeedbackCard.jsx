import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ImHeart } from "react-icons/im";

function FeedbackCard() {
  const [showTextArea, setShowTextArea] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [charsLeft, setCharsLeft] = useState(200);
  const [showThankYou, setShowThankYou] = useState(false);
  const [reqObj, setReqObj] = useState({
    rating: null,
    review: "",
    service: "",
  });
  const { clientCenter } = useLocation().state;
  //console.log(" ", clientCenter);
  const computeCharsLeft = (chars) => {
    let left = 200 - parseInt(chars.length);
    setCharsLeft(left);
  };

  const postReview = async () => {
    try {
      let response = await fetch(`http://localhost:3001/reviews`, {
        method: "POST",
        body: JSON.stringify(reqObj),
        //credentials: "include",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (response.ok) {
        //console.log(response);
      } else {
        console.log("login failed");
        if (response.status === 400) {
          console.log("bad request");
        }
        if (response.status === 404) {
          console.log("page not found");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return showThankYou ? (
    <div className="govuk-width-container">
      <div id="idsk-feedback__thanks" className="">
        <h2 className="govuk-heading-l">
          Ďakujeme za spätnú väzbu. <ImHeart />
        </h2>
      </div>
      {/*Conditional rendering*/}
    </div>
  ) : (
    <div data-module="idsk-feedback">
      <div className="govuk-width-container">
        <div id="idsk-feedback__content">
          <h2 className="govuk-heading-l">
            Spätná väzba pre {clientCenter.name}
          </h2>
          <h3 className="govuk-heading-m idsk-feedback__subtitle">
            Ktorú službu klientského centra chcete ohodnotiť ?
          </h3>
          <div className="govuk-form-group">
            <label className="govuk-label" htmlFor="select-dd1">
              Vyberte službu:
            </label>
            <select
              className="govuk-select"
              id="select-dd1"
              name="select-1"
              onChange={(e) => {
                setReqObj({ ...reqObj, service: e.target.value });
              }}
            >
              <option value=""></option>
              {clientCenter.services.map((service, i) => (
                <option key={`service-${i}`} value={service._id}>
                  {service.type}
                </option>
              ))}
            </select>
          </div>
          <h3 className="govuk-heading-m idsk-feedback__subtitle">
            Ako ste spokojný so službami klientského centra ?
          </h3>

          <div
            className="govuk-radios"
            onChange={(e) =>
              setReqObj({ ...reqObj, rating: parseInt(e.target.value) })
            }
          >
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button idsk-feedback-textarea--show"
                id="1"
                name="basicFeedback"
                type="radio"
                value="1"
                onChange={() => setShowTextArea(true)}
              />
              <label className="govuk-label govuk-radios__label" htmlFor="1">
                Veľmi nespokojný
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button idsk-feedback-textarea--show"
                id="2"
                name="basicFeedback"
                type="radio"
                value="2"
                onChange={() => setShowTextArea(true)}
              />
              <label className="govuk-label govuk-radios__label" htmlFor="2">
                Nespokojný
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button idsk-feedback-textarea--show"
                id="3"
                name="basicFeedback"
                type="radio"
                value="3"
                onChange={() => setShowTextArea(true)}
              />
              <label className="govuk-label govuk-radios__label" htmlFor="3">
                Ani spokojný ani nespokojný
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button "
                id="4"
                name="basicFeedback"
                type="radio"
                value="4"
                onChange={() => setShowTextArea(false)}
              />
              <label className="govuk-label govuk-radios__label" htmlFor="4">
                Spokojný
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button "
                id="5"
                name="basicFeedback"
                type="radio"
                value="5"
                onChange={() => setShowTextArea(false)}
              />
              <label className="govuk-label govuk-radios__label" htmlFor="5">
                Veľmi spokojný
              </label>
            </div>{" "}
            <br />
          </div>
          {/*Conditional rendering*/}
          <div
            id="idsk-feedback__question-bar"
            className={
              showTextArea
                ? `idsk-feedback--animation idsk-feedback--open`
                : `idsk-feedback--animation idsk-feedback--invisible`
            }
          >
            <h3 className="govuk-heading-m">
              Ako by sme mohli túto službu zlepšiť?
            </h3>
            <div>
              <br />

              <div
                className="idsk-character-count"
                data-module="idsk-character-count"
                data-maxlength="200"
              >
                <div className="govuk-form-group">
                  <span id="feedback-hint" className="govuk-hint"></span>
                  {/*Conditional rendering*/}
                  <textarea
                    className={
                      charsLeft < 0
                        ? `govuk-textarea govuk-js-character-count govuk-textarea--error`
                        : `govuk-textarea govuk-js-character-count `
                    }
                    id="feedback"
                    name="feedback"
                    rows="5"
                    aria-describedby="feedback-info feedback-hint"
                    value={feedbackText}
                    onChange={(e) => {
                      setFeedbackText(e.target.value);
                      computeCharsLeft(e.target.value);
                      setReqObj({ ...reqObj, review: e.target.value });
                    }}
                  ></textarea>
                  {/*Conditional rendering*/}
                  <span
                    id="feedback-info"
                    className={
                      charsLeft < 0
                        ? `govuk-error-message govuk-character-count__message`
                        : `govuk-hint govuk-character-count__message`
                    }
                    aria-live="polite"
                  >
                    {/*Conditional rendering*/}
                    {charsLeft < 0
                      ? `Prekročili ste maximálny počet znakov`
                      : ` Zostáva Vám ${charsLeft} znakov`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="idsk-feedback__buttons">
            {/*Conditional rendering*/}
            {charsLeft < 0 ? (
              <button
                id="idsk-feedback__send-button"
                className="govuk-button"
                disabled
              >
                Odoslať
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.4016 10L0 0H5.59826L15 10H9.4016Z"
                    fill="white"
                  ></path>
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5984 20L15 10H9.40174L0 20H5.5984Z"
                    fill="white"
                  ></path>
                </svg>
                {/*Conditional rendering*/}
              </button>
            ) : (
              <button
                id="idsk-feedback__send-button"
                className="govuk-button"
                onClick={() => {
                  postReview();
                  setShowThankYou(true);
                }}
              >
                Odoslať
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.4016 10L0 0H5.59826L15 10H9.4016Z"
                    fill="white"
                  ></path>
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5984 20L15 10H9.40174L0 20H5.5984Z"
                    fill="white"
                  ></path>
                </svg>
              </button>
            )}
            <button className="govuk-button govuk-button--secondary">
              Odísť
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
