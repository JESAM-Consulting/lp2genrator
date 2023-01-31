import "./secModal.scss";
import ModalLogo from "../../assets/logo/modal-logo.svg";
import CloeIcon from "../../assets/icons/ei_close.svg";
import React, { useEffect, useState, useCallback } from "react";

export default function SecModal(props) {
  // const [message,setMessage] = useState(false);

  return (
    <>
      <div>
        <div className="modal-wrapper1">
          <div className="sec-modal-box">
            <div className="modal-header">
              <div>
                <img src={ModalLogo} alt="ModalLogo" />
              </div>
              <div onClick={() => props.setModal2Open(false)}>
                <img src={CloeIcon} alt="CloeIcon" />
              </div>
            </div>
            <div className="modal-body">
              <div className="text-style-new">
                <p>Vielen Dank für deine Bewerbung </p>
                <span>Wir melden uns binnen 48h bei dir.</span>
                <h6>Dein Team von FE Finance</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
