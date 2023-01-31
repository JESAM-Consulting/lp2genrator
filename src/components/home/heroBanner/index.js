import React from "react";
import "./heroBanner.scss";
import XmldIcon from "../../../assets/icons/xmld.svg";
export default function HeroBanner() {
  return (
    <div>
      <div className="hero-banner">
        <div className="container-lg-2">
          <div className="mobile-icon-bottom-alignment">
            <span>verbraucherschutzkonform nach</span>
            <img src={XmldIcon} alt="XmldIcon" />
          </div>
          <div className="relative">
            <div className="text-style">
              <h1>
                »Der <span>Financial Guide</span> gestaltet <br />
                <span>deine Position</span> am Markt neu.«
              </h1>
            </div>
            <div className="icon-bottom-alignment">
              <img src={XmldIcon} alt="XmldIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
