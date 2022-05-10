import briskLogo from "../../assets/images/brisk-logo.png";

function Footer() {
  return (
    <div data-module="idsk-footer-extended">
      <footer className="idsk-footer-extended  " role="contentinfo">
        <div className="idsk-footer-extended-main-content">
          <div className="govuk-width-container">
            <div className="govuk-grid-column-full">
              <div className="idsk-footer-extended-description-panel">
                <div className="idsk-footer-extended-meta-item">
                  <ul className="idsk-footer-extended-inline-list ">
                    {/* <li className="idsk-footer-extended-inline-list-item">
                      <a className="govuk-link" title="Pomoc" href="#">
                        Pomoc
                      </a>
                    </li>
                    <li className="idsk-footer-extended-inline-list-item">
                      <a className="govuk-link" title="Cookies" href="#">
                        Cookies
                      </a>
                    </li> */}
                    <li className="idsk-footer-extended-inline-list-item">
                      <a className="govuk-link" title="Kontakty" href="#">
                        Kontakty
                      </a>
                    </li>
                    {/* <li className="idsk-footer-extended-inline-list-item">
                      <a className="govuk-link" title="Mapa Stránky" href="#">
                        Mapa Stránky
                      </a>
                    </li>
                    <li className="idsk-footer-extended-inline-list-item">
                      <a className="govuk-link" title="RSS" href="#">
                        RSS
                      </a>
                    </li>
                    <li className="idsk-footer-extended-inline-list-item">
                      <a
                        className="govuk-link"
                        title="Vyhlásenie o prístupnosti"
                        href="#"
                      >
                        Vyhlásenie o prístupnosti
                      </a>
                    </li> */}
                  </ul>
                </div>
                <div className="govuk-grid-column-two-thirds idsk-footer-extended-info-links">
                  <p className="idsk-footer-extended-frame">
                    Vytvorené v súlade s &nbsp;
                    <a
                      className="govuk-link"
                      title="Jednotným dizajn manuálom elektronických služieb."
                      href="https://idsk.gov.sk/"
                    >
                      Jednotným dizajn manuálom elektronických služieb.
                    </a>
                  </p>
                  <p className="idsk-footer-extended-frame">
                    Prevádzkovateľom služby je oddelenie behaviorálnych inovácií
                    na Ministerstve investícií, regionálneho rozvoja a
                    informatizácie SR.
                  </p>
                </div>
                <div className="govuk-grid-column-one-third idsk-footer-extended-logo-box">
                  <a href="https://www.lepsiesluzby.digital/" title="domov">
                    <img
                      className="idsk-footer-extended-logo"
                      src={briskLogo}
                      alt="Ministerstvo investícií, regionálneho rozvoja a informatizácie Slovenskej republiky"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
