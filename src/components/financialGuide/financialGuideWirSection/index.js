import React from "react";
import { NavLink } from "react-router-dom";
import "./financialGuideWirSection.scss";
export default function FinancialGuideWirSection() {
  return (
    <div>
      <div className="FinancialGuideWirSection">
        <div className="container-md-3">
          <div className="box-right-alignment">
            <div className="box-text">
              <h3>Wir sind die FE Finance GmbH</h3>
              <p>
                Eigene Ziele erreichen und finanziell sorgenfrei leben - <br />
                das ist unser Auftrag für unsere Mandanten.
              </p>
              <p>
                Die FE Finance GmbH arbeitet auf unterschiedlichen Ebenen daran,
                die Persönlichkeit ihrer Mandanten zu stäken, entwickeln und
                ihre Arbeitssituation so zu optimieren, dass sie langfristig zu
                beruflicher und finanzieller Sicherheit gelangen.
              </p>
              <div className="button">
              <NavLink to="/steper">
              <button>Mehr zu FE Finance erfahren</button>
              </NavLink>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
