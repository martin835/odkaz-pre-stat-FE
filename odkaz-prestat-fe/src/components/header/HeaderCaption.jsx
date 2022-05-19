import { useState } from "react";

function HeaderCaption() {
  //header Caption is the blue, expandable area of the header
  const [headerCaption, setHeaderCaption] = useState(true);
  return (
    <>
      {headerCaption ? (
        <>
          {" "}
          <div className="idsk-header-web__brand-gestor">
            <span className="govuk-body-s idsk-header-web__brand-gestor-text">
              Táto stránka slúži ako koncept. &nbsp;
              <button
                className="idsk-header-web__brand-gestor-button"
                aria-label="Zobraziť informácie o stránke"
                aria-expanded="false"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                Viac o našich cieľoch:
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>
            <span className="govuk-body-s idsk-header-web__brand-gestor-text--mobile">
              <button
                className="idsk-header-web__brand-gestor-button"
                aria-label="Zobraziť informácie o stránke"
                aria-expanded="false"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                O projekte:
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>

            <div className="idsk-header-web__brand-dropdown">
              <div className="govuk-width-container">
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">
                      Našim cieľom je sprostredkovať spätnú väzbu pre verejnú
                      správu.
                    </h3>
                    <p className="govuk-body-s">
                      Chceme aby sa orgány verejnej moci dozvedeli ako sú
                      občania spokojní so službami, ktoré poskytujú a mohli na
                      základe spätnej väzby zlepšovať svoje fungovanie.
                    </p>
                  </div>
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">
                      Chceme aby občania mali možnosť zmeniť fungovanie verejnej
                      správy k lepšiemu.
                    </h3>
                    <p className="govuk-body-s">
                      Cieľom je primäť orgány verejnej moci aby sa spätnou
                      väzbou od občanou reálne zaoberali a odovzdané podnenty
                      riešili.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="idsk-header-web__brand-spacer"></div>
        </>
      ) : (
        <>
          {" "}
          <div className="idsk-header-web__brand-gestor">
            <span className="govuk-body-s idsk-header-web__brand-gestor-text">
              Táto stránka slúži ako koncept. &nbsp;
              <button
                className="idsk-header-web__brand-gestor-button idsk-header-web__brand-gestor-button--active"
                aria-label="Skryť informácie o stránke"
                aria-expanded="true"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                Menej o našich cieľoch:
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>
            <span className="govuk-body-s idsk-header-web__brand-gestor-text--mobile">
              <button
                className="idsk-header-web__brand-gestor-button idsk-header-web__brand-gestor-button--active"
                aria-label="Skryť informácie o stránke"
                aria-expanded="true"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                O projekte:
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>

            <div className="idsk-header-web__brand-dropdown idsk-header-web__brand-dropdown--active">
              <div className="govuk-width-container">
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">
                      Našim cieľom je sprostredkovať spätnú väzbu pre verejnú
                      správu.
                    </h3>
                    <p className="govuk-body-s">
                      Chceme aby sa orgány verejnej moci dozvedeli ako sú
                      občania spokojní so službami, ktoré poskytujú a mohli na
                      základe spätnej väzby zlepšovať svoje fungovanie.
                    </p>
                  </div>
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">
                      Chceme aby občania mali možnosť zmeniť fungovanie verejnej
                      správy k lepšiemu.
                    </h3>
                    <p className="govuk-body-s">
                      Cieľom je primäť orgány verejnej moci aby sa spätnou
                      väzbou od občanou reálne zaoberali a odovzdané podnenty
                      riešili.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="idsk-header-web__brand-spacer idsk-header-web__brand-spacer--active"></div>
        </>
      )}
    </>
  );
}

export default HeaderCaption;
