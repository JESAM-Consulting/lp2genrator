import React, { useState } from "react";
import "./finacialGuide.scss";
import ModalLogo from "../../../assets/logo/modal-logo.svg";
import CloeIcon from "../../../assets/icons/ei_close.svg";
import ContactModal from "../../ContactModal";
import SecModal from "../../secModal";
export default function FinacialGuide() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div>
      <div className="finacial-guide-banner">
        <div className="container-md">
          <div className="grid">
            <div className="grid-items">
              <h2>
                Werde Financial Guide & <br /> entfalte neues Potential
              </h2>
              <p>
                Du wirst Teil des innovativsten Beratungsnetzwerkes in
                Deutschland!
              </p>
              <p>
                Das Ganze in Verbindung mit der höchstmöglichen
                Einkommensperspektive von ⌀ 108.000€.
              </p>
              <p>
                {" "}
                Wir freuen uns auf deine Bewerbung und gestalten gemeinsam den
                Markt neu.
              </p>
            </div>
            <div className="grid-items">
              <button onClick={() => setModalOpen(!modalOpen)}>
                Jetzt bewerben <br />
                <span className="new-buton-style-span">
                  (ohne Lebenslauf in 30 Sek.)
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <ContactModal
          setModalOpen={setModalOpen}
          setModal2Open={setModal2Open}
        />
      )}
      {modal2Open && <SecModal setModal2Open={setModal2Open} />}
    </div>
  );
}
