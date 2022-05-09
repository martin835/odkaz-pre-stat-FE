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
              Oficiálna stránka &nbsp;
              <button
                className="idsk-header-web__brand-gestor-button"
                aria-label="Zobraziť informácie o stránke"
                aria-expanded="false"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                verejnej správy SR
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>
            <span className="govuk-body-s idsk-header-web__brand-gestor-text--mobile">
              SK
              <button
                className="idsk-header-web__brand-gestor-button"
                aria-label="Zobraziť informácie o stránke"
                aria-expanded="false"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                e-gov
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>

            <div className="idsk-header-web__brand-dropdown">
              <div className="govuk-width-container">
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">Doména gov.sk je oficálna</h3>
                    <p className="govuk-body-s">
                      Toto je oficiálna webová stránka orgánu verejnej moci
                      Slovenskej republiky. Oficiálne stránky využívajú najmä
                      doménu gov.sk.{" "}
                      <a
                        className="govuk-link"
                        href="https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci"
                        target="_blank"
                        title="odkazy na webové sídla orgánov verejnej moci"
                      >
                        Odkazy na jednotlivé webové sídla orgánov verejnej moci
                        nájdete na tomto odkaze
                      </a>
                      .
                    </p>
                  </div>
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">
                      Táto stránka je zabezpečená
                    </h3>
                    <p className="govuk-body-s">
                      Buďte pozorní a vždy sa uistite, že zdieľate informácie
                      iba cez zabezpečenú webovú stránku verejnej správy SR.
                      Zabezpečená stránka vždy začína https:// pred názvom
                      domény webového sídla.
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
              Oficiálna stránka &nbsp;
              <button
                className="idsk-header-web__brand-gestor-button idsk-header-web__brand-gestor-button--active"
                aria-label="Skryť informácie o stránke"
                aria-expanded="true"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                verejnej správy SR
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>
            <span className="govuk-body-s idsk-header-web__brand-gestor-text--mobile">
              SK
              <button
                className="idsk-header-web__brand-gestor-button idsk-header-web__brand-gestor-button--active"
                aria-label="Skryť informácie o stránke"
                aria-expanded="true"
                data-text-for-hide="Skryť informácie o stránke"
                data-text-for-show="Zobraziť informácie o stránke"
                onClick={() => setHeaderCaption(!headerCaption)}
              >
                e-gov
                <span className="idsk-header-web__link-arrow"></span>
              </button>
            </span>

            <div className="idsk-header-web__brand-dropdown idsk-header-web__brand-dropdown--active">
              <div className="govuk-width-container">
                <div className="govuk-grid-row">
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">Doména gov.sk je oficálna</h3>
                    <p className="govuk-body-s">
                      Toto je oficiálna webová stránka orgánu verejnej moci
                      Slovenskej republiky. Oficiálne stránky využívajú najmä
                      doménu gov.sk.{" "}
                      <a
                        className="govuk-link"
                        href="https://www.slovensko.sk/sk/agendy/agenda/_organy-verejnej-moci"
                        target="_blank"
                        title="odkazy na webové sídla orgánov verejnej moci"
                      >
                        Odkazy na jednotlivé webové sídla orgánov verejnej moci
                        nájdete na tomto odkaze
                      </a>
                      .
                    </p>
                  </div>
                  <div className="govuk-grid-column-one-half">
                    <h3 className="govuk-body-s">
                      Táto stránka je zabezpečená
                    </h3>
                    <p className="govuk-body-s">
                      Buďte pozorní a vždy sa uistite, že zdieľate informácie
                      iba cez zabezpečenú webovú stránku verejnej správy SR.
                      Zabezpečená stránka vždy začína https:// pred názvom
                      domény webového sídla.
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
