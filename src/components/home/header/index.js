import React, { useState } from "react";
import "./header.scss";
import Logo from "../../../assets/logo/logo.svg";
import ContactModal from "../../ContactModal";
import { NavLink } from "react-router-dom";
import SecModal from "../../secModal";
export default function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <div>
      <div className="header-design">
        <div className="container-lg">
          <div className="header-alignment">
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <p>
                Dein Erfolg <span>ist</span> der deiner Mandanten.
              </p>
            </div>
            {/* onClick={() => setModalOpen(!modalOpen)} */}
            <div className="button">
              <NavLink to="/steper">
              <button>
                Jetzt bewerben <br />
                <span className="new-buton-style-span">
                  (ohne Lebenslauf in 30 Sek.)
                </span>
              </button>
              </NavLink>
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
