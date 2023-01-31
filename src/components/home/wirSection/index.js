import React, { useState } from "react";
import "./wirSection.scss";
import FaqImage from "../../../assets/images/faq1.png";
import FaqImage1 from "../../../assets/images/faq1.png";
import ContactModal from "../../ContactModal";
import { toast, ToastContainer } from "react-toastify";
import SecModal from "../../secModal";
export default function WirSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      <ToastContainer />
      <div className="wir-section-content-alignment">
        <div className="container-md-8">
          <div className="grid">
            <div className="grid-items">
              <div className="faq-image-style">
                <img src={FaqImage} alt="FaqImage" />
                <img src={FaqImage1} alt="FaqImage1" />
              </div>
            </div>
            <div className="grid-items">
              <h3>Wir sind die FE Finance GmbH</h3>
              <p>Eigene Ziele erreichen und finanziell sorgenfrei leben -</p>
              <p>das ist unser Auftrag für unsere Mandanten.</p>
              <p className="top-align">
                Die FE Finance GmbH arbeitet auf unterschiedlichen Ebenen daran,
                die Persönlichkeit ihrer Mandanten zu stäken, entwickeln und
                ihre Arbeitssituation so zu optimieren, dass sie langfristig zu
                beruflicher und finanzieller Sicherheit gelangen.
              </p>
              <div className="button-right-alignment">
                <button
                  onClick={() => {
                    setModalOpen(!modalOpen);
                  }}
                >
                  {" "}
                  Mehr zu FE Finance erfahren
                </button>
              </div>
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
