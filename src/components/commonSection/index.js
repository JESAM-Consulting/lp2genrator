import React from "react";
import "./commonSection.scss";
import IconDesign from "../../assets/icons/001.svg";
import IconDesign2 from "../../assets/icons/002.svg";
import IconDesign3 from "../../assets/icons/003.svg";
import IconDesign4 from "../../assets/icons/005.svg";
import IconDesign6 from "../../assets/icons/006.svg";
export default function CommonSection() {
  return (
    <div>
      <div className="common-section-content-all-alignment">
        <div className="container-lg-5">
          <div className="grid">
            <div className="grid-items">
              <div className="icon-alignment-for-web">
                <img src={IconDesign} alt="IconDesign" />
              </div>
              <h2>
                Voll-/Teilzeit und <br />
                selbständig
              </h2>
              <p>
                flexible Arbeitszeiten keine Kernzeiten unbefristete Einstellung
                nach Probezeit
              </p>
            </div>
            <div className="grid-items">
              <div className="icon-alignment-for-web">
                <img src={IconDesign2} alt="IconDesign2" />
              </div>
              <h2>Home-Office</h2>
              <p>
                Flexible Arbeitsorte und mobiles <br /> Arbeiten
              </p>
            </div>
            <div className="grid-items">
              <div className="icon-alignment-for-web">
                <img src={IconDesign3} alt="IconDesign3" />
              </div>
              <h2>Standort unabhängig</h2>
              <p>
                über 30 Standorte in Deutschland <br /> moderne Offices
              </p>
            </div>
            <div className="grid-items">
              <div className="icon-alignment-for-web">
                <img src={IconDesign4} alt="IconDesign4" />
              </div>
              <h2>Verbraucherschutzkonform nach</h2>
              <div className="center-c">
                <img src={IconDesign6} alt="IconDesign6" />
              </div>
            </div>
            <div className="grid-items"></div>
            <div className="grid-items"></div>
            <div className="grid-items"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
