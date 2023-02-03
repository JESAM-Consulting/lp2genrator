import React from "react";
import "./secStep.scss";
import { useHistory } from "react-router-dom";

export default function SecStep(props) {
  const { stepper, setStepper, setTabview } = props;

  const history = useHistory();

  return (
    <div>
      <div className="sec-step-all-content-alignment">
        <div className="">
          <div className="steper-box-center-alignment">
            <div className="step-box">
              <h5>Hast du einen Abschluss nach 34d?</h5>
              <p>in 3 Schritten zu FE Finance</p>
              <div className="button-left-right-alignment">
                <button
                  onClick={(e) => {
                    setStepper({ ...stepper, secondStepper: "yes" });
                    setTabview("third");
                    history.push("/steper3");
                  }}>
                  Ja
                </button>
                <button
                  onClick={(e) => {
                    setStepper({ ...stepper, secondStepper: "no" });
                    setTabview("third");
                    history.push("/steper3");
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
