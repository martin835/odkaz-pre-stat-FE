import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import "../../styles/organizations.css";
import { useEffect, useState } from "react";

function ServiceSelector() {
  const { t } = useTranslation();
  const [serviceSelected, setsServiceSelected] = useState(null);
  const [providerOfServiceSelected, setProviderOfServiceSelected] =
    useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    getServices();
  }, []);

  const getServices = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_URL}/services`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("services: ", data);
        setServices(data);
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
        <div className="govuk-grid-column-full ">
          {" "}
          <h1 className="govuk-heading-l  govuk-!-margin-bottom-6">
            Ohodnoť naše digitálne služby
          </h1>
        </div>
      </div>
      <div className="govuk-grid-row ">
        <div className="govuk-grid-column-full ">
          <form>
            <div
              className="govuk-radios"
              onChange={(e) => (
                setsServiceSelected(e.target.id),
                setProviderOfServiceSelected(e.target.value)
              )}
            >
              {services?.map((service) => (
                <div className="govuk-radios__item" key={service._id}>
                  <input
                    className="govuk-radios__input idsk-feedback__radio-button "
                    //id is service id
                    id={`${service._id}`}
                    name="basicFeedback"
                    type="radio"
                    //value is provider id
                    value={`${service.provider?._id}`}
                  />
                  <label
                    className="govuk-label govuk-radios__label"
                    htmlFor={`${service._id}`}
                  >
                    {`${service.name}`}
                  </label>
                </div>
              ))}
              {/* <div className="govuk-radios__item">
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
              </div> */}
            </div>
            <Link
              to={`/feedback/${providerOfServiceSelected}`}
              state={{ serviceId: serviceSelected }}
            >
              <button
                type="submit"
                className="idsk-button govuk-!-margin-top-7"
                data-module="idsk-button"
                disabled={serviceSelected ? "" : "disabled"}
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

export default ServiceSelector;
