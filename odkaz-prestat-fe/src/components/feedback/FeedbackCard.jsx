function FeedbackCard() {
  return (
    <div data-module="idsk-feedback">
      <div className="govuk-width-container">
        <div id="idsk-feedback__content">
          <h2 className="govuk-heading-l">
            Spätná väzba na službu Podávanie žiadosti o nenávratný príspevok na
            opravu bicykla
          </h2>
          <h3 className="govuk-heading-m idsk-feedback__subtitle">
            Ako ste spokojný so službou, ktorú ste práve využili?
          </h3>
          <div className="govuk-radios">
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button idsk-feedback-textarea--show"
                id="1"
                name="example"
                type="radio"
                value="1"
              />
              <label className="govuk-label govuk-radios__label" for="1">
                Veľmi nespokojný
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button idsk-feedback-textarea--show"
                id="2"
                name="example"
                type="radio"
                value="2"
              />
              <label className="govuk-label govuk-radios__label" for="2">
                Nespokojný
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button idsk-feedback-textarea--show"
                id="3"
                name="example"
                type="radio"
                value="3"
              />
              <label className="govuk-label govuk-radios__label" for="3">
                Ani spokojný ani nespokojný
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button "
                id="4"
                name="example"
                type="radio"
                value="4"
              />
              <label className="govuk-label govuk-radios__label" for="4">
                Spokojný
              </label>
            </div>
            <div className="govuk-radios__item">
              <input
                className="govuk-radios__input idsk-feedback__radio-button "
                id="5"
                name="example"
                type="radio"
                value="5"
              />
              <label className="govuk-label govuk-radios__label" for="5">
                Veľmi spokojný
              </label>
            </div>{" "}
            <br />
          </div>
          <div
            id="idsk-feedback__question-bar"
            className="idsk-feedback--animation idsk-feedback--invisible"
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
                  <textarea
                    className="govuk-textarea govuk-js-character-count"
                    id="feedback"
                    name="feedback"
                    rows="5"
                    aria-describedby="feedback-info feedback-hint"
                  ></textarea>
                  <span
                    id="feedback-info"
                    className="govuk-hint govuk-character-count__message"
                    aria-live="polite"
                  >
                    Zostáva Vám 200 znakov{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="idsk-feedback__buttons">
            <button id="idsk-feedback__send-button" className="govuk-button">
              Odoslať
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.4016 10L0 0H5.59826L15 10H9.4016Z"
                  fill="white"
                ></path>
                <path
                  opacity="0.5"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.5984 20L15 10H9.40174L0 20H5.5984Z"
                  fill="white"
                ></path>
              </svg>
            </button>
            <button
              className="govuk-button govuk-button--secondary"
              onclick="location.href='/';"
            >
              Odísť
            </button>
          </div>
        </div>
        <div id="idsk-feedback__thanks" className="idsk-feedback--hidden">
          <h2 className="govuk-heading-l">Ďakujeme za spätnú väzbu.</h2>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
