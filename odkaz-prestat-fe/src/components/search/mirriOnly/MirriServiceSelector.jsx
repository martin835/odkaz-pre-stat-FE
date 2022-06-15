import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "../../../styles/organizations.css";
import { useState } from "react";

function MirriServiceSelector() {
  const { t } = useTranslation();
  const [serviceSelected, setsServiceSelected] = useState(null);

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
            <div
              className="govuk-radios"
              onChange={(e) => setsServiceSelected(e.target.value)}
            >
              <div className="govuk-radios__item">
                <input
                  className="govuk-radios__input idsk-feedback__radio-button "
                  id="1"
                  name="basicFeedback"
                  type="radio"
                  value="62a891ceb3f79421f9ab2719"
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
                  value="62a891d8b3f79421f9ab271c"
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
                  value="62a891e4b3f79421f9ab271f"
                />
                <label className="govuk-label govuk-radios__label" htmlFor="3">
                  Portál Moje slovensko
                </label>
              </div>
            </div>
            <Link
              to="/feedback/62a89194b3f79421f9ab2717"
              state={{ serviceId: serviceSelected }}
            >
              <button
                type="reset"
                className="idsk-button govuk-!-margin-top-7"
                data-module="idsk-button"
              >
                Pokračovať
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MirriServiceSelector;
