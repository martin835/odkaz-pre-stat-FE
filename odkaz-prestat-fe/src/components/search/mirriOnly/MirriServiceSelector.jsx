import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "../../../styles/organizations.css";

function MirriServiceSelector() {
  const { t } = useTranslation();

  return (
    <div className="govuk-width-container">
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full ">
          {" "}
          <h1 className="govuk-heading-l  govuk-!-margin-bottom-6">
            Ohodnoť digitálne aplikácie MIRRI
          </h1>
        </div>
      </div>
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full ">
          <form>
            <div className="govuk-radios" onChange={(e) => console.log("ping")}>
              <div className="govuk-radios__item">
                <input
                  className="govuk-radios__input idsk-feedback__radio-button "
                  id="1"
                  name="basicFeedback"
                  type="radio"
                  value="1"
                  onChange={() => console.log("ping")}
                />
                <label className="govuk-label govuk-radios__label" htmlFor="1">
                  Slovensko v mobile
                </label>
              </div>
              <div className="govuk-radios__item">
                <input
                  className="govuk-radios__input idsk-feedback__radio-button "
                  id="2"
                  name="basicFeedback"
                  type="radio"
                  value="2"
                  onChange={() => console.log("ping")}
                />
                <label className="govuk-label govuk-radios__label" htmlFor="2">
                  slovensko.sk
                </label>
              </div>
              <div className="govuk-radios__item">
                <input
                  className="govuk-radios__input idsk-feedback__radio-button "
                  id="3"
                  name="basicFeedback"
                  type="radio"
                  value="3"
                  onChange={() => console.log("ping")}
                />
                <label className="govuk-label govuk-radios__label" htmlFor="3">
                  Portál Moje slovensko
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="idsk-button govuk-!-margin-top-7"
              data-module="idsk-button"
            >
              Pokračovať
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MirriServiceSelector;
