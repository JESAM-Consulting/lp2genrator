import React from "react";
import "./firstStep.scss";
import { useHistory } from "react-router-dom";

export default function FirstStep(props) {
  const { stepper, setStepper, setTabview } = props;
  const history = useHistory();

  return (
    <div>
      <div className="first-step-all-content-alignment">
        <div className="">
          <div className="steper-box-center-alignment">
            <div className="step-box">
              <h5>Hast du bereits Vertriebserfahrung?</h5>
              <p>in 3 Schritten zu FE Finance</p>
              <div className="button-left-right-alignment">
                <button
                  onClick={(e) => {
                    setStepper({ ...stepper, firstStepper: "yes" });
                    setTabview("second");
                    history.push("/steper2");
                  }}>
                  Ja
                </button>
                <button
                  onClick={(e) => {
                    setStepper({ ...stepper, firstStepper: "no" });
                    setTabview("second");
                    history.push("/steper2");
                  }}>
                  Nein
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
