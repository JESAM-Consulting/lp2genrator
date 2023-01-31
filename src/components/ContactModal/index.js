import "./ContactModal.scss";
import ModalLogo from "../../assets/logo/modal-logo.svg";
import CloeIcon from "../../assets/icons/ei_close.svg";
import React, { useEffect, useState, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SecModal from "../secModal";

import { ApiGet, ApiPost, ApiPut } from "../../helpers/API/ApiData";

export default function ContactModal(props) {
  const [inputValue, setInputValue] = useState({});
  const [errors, setErrors] = useState({});
  const [terms, setTerms] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const bindInput = (value) => {
    var regex = new RegExp("^[^0-9 ]*$");
    var key = String.fromCharCode(
      !value.charCode ? value.which : value.charCode
    );
    if (regex.test(key)) {
      value.preventDefault();
      return false;
    }
  };

  const validateforUserData = () => {
    let isFormValid = true;
    let errors = {};

    if (!inputValue?.fname?.trim() || inputValue?.fname === "") {
      isFormValid = false;
      errors["fname"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }
    if (!inputValue?.lname?.trim() || inputValue?.lname === "") {
      isFormValid = false;
      errors["lname"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (!inputValue?.postalCode || inputValue?.postalCode === "") {
      isFormValid = false;
      errors["postalCode"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (
      !inputValue?.email?.trim() ||
      inputValue?.email === "" ||
      regexEmail?.test(inputValue?.email) === false
    ) {
      isFormValid = false;
      errors["email"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    if (!inputValue?.phone || inputValue?.phone === "") {
      isFormValid = false;
      errors["phone"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }
    if (terms === false) {
      isFormValid = false;
      errors["check1"] = "*Bitte überprüfen Sie ihre Eingabe.";
    }

    setErrors(errors);
    return isFormValid;
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const submitContact = (e) => {
    e.preventDefault();
    if (validateforUserData()) {
      ApiPost(`applyNow/create`, inputValue)
        .then((res) => {
          console.log("success res", res);
          setInputValue({});
          props.setModalOpen(false);
          props.setModal2Open(true);
          setSuccessMessage(true);
          window.gtag("event", "send", {
            eventCategory: "form",
            eventLabel: "Application Form Sent",
            eventValue: "Application",
            eventAction: "click",
          });
          // window.ga("send", {
          //   hitType: "event",
          //   eventCategory: "form",
          //   eventAction: "click",
          //   eventLabel: "Application Form Sent",
          //   eventValue: "Application",
          // });

          window.fbq("track", "SubmitApplication");
        })
        .catch((err) => {
          console.log("errrrrrrrrr", err);
          toast.error("Etwas ist schief gelaufen. Bitte versuche es erneut");
        });
    }
  };

  useEffect(() => {
    window.gtag("event", "send", {
      eventCategory: "form",
      eventLabel: "Application Form Opened",
      eventValue: "Application",
      eventAction: "click",
    });
    // window.ga("send", {
    //   hitType: "event",
    //   eventCategory: "form",
    //   eventAction: "click",
    //   eventLabel: "Application Form Opened",
    //   eventValue: "Application",
    // });
    window.fbq("trackCustom", "OpenApplicationForm");
  }, []);

  return (
    <>
      <ToastContainer />

      <div>
        <div className="modal-wrapper">
          <div className="white-box">
            <div className="modal-header">
              <div>
                <img src={ModalLogo} alt="ModalLogo" />
              </div>
              <div onClick={() => props.setModalOpen(false)}>
                <img src={CloeIcon} alt="CloeIcon" />
              </div>
            </div>
            <div className="modal-body">
              <div className="text-style">
                <p>Jetzt bewerben</p>
                <h6 style={{ margin: "0" }} className="m-new-s">
                  Wir, die FE Finance GmbH legt großen Wert auf Effizienz und
                  kurze Wege.
                </h6>
                <h6 className="m-new-s">
                  {" "}
                  Um den Bewerbungsprozess für dich so angenehm wie möglich zu
                  gestalten haben wir auf ein langes Bewerbungsformular
                  verzichtet. Wir freuen uns auf deine Bewerbung und melden uns
                  binnen 48h bei dir.
                </h6>
                <h3>So können wir dich erreichen</h3>
                <div class="floating-form">
                  <div class="floating-label">
                    <input
                      class="floating-input"
                      type="text"
                      placeholder=" "
                      id="fname"
                      name="fname"
                      value={inputValue?.fname}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                    />
                    <span class="highlight"></span>
                    <label>Vorname</label>
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.fname}
                    </span>
                  </div>
                  <div class="floating-label">
                    <input
                      class="floating-input"
                      type="text"
                      placeholder=" "
                      id="lname"
                      name="lname"
                      value={inputValue?.lname}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                    />
                    <span class="highlight"></span>
                    <label>Nachname</label>
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.lname}
                    </span>
                  </div>
                  <div class="floating-label">
                    <input
                      class="floating-input"
                      type="text"
                      placeholder=" "
                      id="postalCode"
                      name="postalCode"
                      value={inputValue?.postalCode}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                      onKeyPress={bindInput}
                    />

                    <span class="highlight"></span>
                    <label>Postleitzahl</label>
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.postalCode}
                    </span>
                  </div>
                  <div class="floating-label">
                    <input
                      class="floating-input"
                      type="text"
                      placeholder=" "
                      id="email"
                      name="email"
                      value={inputValue?.email}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                    />
                    <span class="highlight"></span>
                    <label>Email</label>
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.email}
                    </span>
                  </div>
                  <div class="floating-label">
                    <input
                      class="floating-input"
                      type="text"
                      placeholder=" "
                      id="phone"
                      name="phone"
                      value={inputValue?.phone}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                      onKeyPress={bindInput}
                    />
                    <span class="highlight"></span>
                    <label>Telefon</label>
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.phone}
                    </span>
                  </div>
                </div>
                <div className="ab-button">
                  <button onClick={(e) => submitContact(e)}>Absenden</button>
                </div>
                {/* <form>
                  <div className="input">
                    <input
                      type="text"
                      placeholder="Vorname"
                      id="fname"
                      name="fname"
                      value={inputValue?.fname}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                    />
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.fname}
                    </span>

                    <input
                      type="text"
                      placeholder="Nachname"
                      id="lname"
                      name="lname"
                      value={inputValue?.lname}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                    />
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.lname}
                    </span>

                    <input
                      type="text"
                      placeholder="Postleitzahl"
                      id="postalCode"
                      name="postalCode"
                      value={inputValue?.postalCode}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                      onKeyPress={bindInput}
                    />
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.postalCode}
                    </span>

                    <input
                      type="text"
                      placeholder="Email"
                      id="email"
                      name="email"
                      value={inputValue?.email}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                    />
                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.email}
                    </span>

                    <input
                      type="text"
                      placeholder="Telefon"
                      id="phone"
                      name="phone"
                      value={inputValue?.phone}
                      onChange={(e) => {
                        handleOnChange(e);
                      }}
                      onKeyPress={bindInput}
                    />

                    <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                      {errors?.phone}
                    </span>
                  </div>
                  <div className="ab-button">
                    <button onClick={(e) => submitContact(e)}>Absenden</button>
                  </div>
                </form> */}

                <div className="checkbox-content-alignment">
                  <div style={{ display: "flex", marginRight: "2px" }}>
                    <input
                      type="checkbox"
                      checked={terms}
                      name="check1"
                      id="new-check1"
                      onChange={(e) => setTerms(e.target.checked)}
                    />
                    <label for="new-check1"></label>
                  </div>
                  <h5 style={{ margin: "0" }}>
                    Hiermit akzeptiere ich die Datenschutzbestimmungen der FE
                    Finance GmbH.
                  </h5>
                </div>
                {terms === false && (
                  <span style={{ color: "#d92c2c", fontSize: "12px" }}>
                    {errors?.check1}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
