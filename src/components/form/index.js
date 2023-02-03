import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg";
import SteperLine from "../steper/steperLine";
import { dataStepContext } from "../../App";
import ForthStep from "../steper/forthStep";
import "../steper/steper.scss";

export default function Form() {
  const { stepper, setStepper, tabview, setTabview } = useContext(
    dataStepContext
  );
  return (
    <div>
      <div className="steper-all-content-alignment">
        <div className="container-lg">
          <div className="first-content-alignment">
            <div>
              <NavLink to="/">
                <img src={Logo} alt="Logo" />
              </NavLink>
            </div>
            <div>
              <p>
                Dein Erfolg <span>ist</span> der deiner Mandanten.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="main-child-content-steper-page-alignment">
        <SteperLine tabview={tabview} />

        <ForthStep
          stepper={stepper}
          setStepper={setStepper}
          setTabview={setTabview}
        />
      </div>
      <div className="steper-footer">
        <span>Copyright © 2022 FE Finance. Alle Rechte vorbehalten.</span>
      </div>
    </div>
  );
}
