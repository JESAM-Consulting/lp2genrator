import React from "react";
import "./steperLine.scss";
export default function SteperLine(props) {
  const { tabview } = props;

  console.log("tabview", tabview);
  return (
    <div>
      <div className="steper-line-all-contnet-alignment">
        <div className="step-container">
          <div className="steper-alignmetn-page">
            <div className="steper-icon-text-design">
              <div className="icon-center-alignment">
                {tabview === "first" ||
                tabview === "second" ||
                tabview === "third" ||
                tabview === "forth" ||
                tabview === "fifth" ? (
                  <div className="icon-design">
                    <div
                      className={`icon-design-active ${
                        tabview === "first" || tabview == "second" ? "now" : ""
                      }`}></div>
                  </div>
                ) : (
                  <div className="icon-design"></div>
                )}
              </div>
              {tabview === "first" ||
              tabview === "second" ||
              tabview === "third" ||
              tabview === "forth" ||
              tabview === "fifth" ? (
                <p style={{ color: "#9DBC78", fontWeigth: "bold" }}>
                  Über dich
                </p>
              ) : (
                <p>Über dich</p>
              )}
            </div>
            <div className="steper-icon-text-design">
              <div className="icon-center-alignment">
                {/* <div className="icon-design">
                            </div>    */}

                {tabview === "third" ||
                tabview === "forth" ||
                tabview === "fifth" ? (
                  <div className="icon-design">
                    <div
                      className={`icon-design-active ${
                        tabview === "third" || tabview == "forth" ? "now" : ""
                      }`}></div>
                  </div>
                ) : (
                  <div className="icon-design"></div>
                )}
              </div>

              {tabview === "third" ||
              tabview === "forth" ||
              tabview === "fifth" ? (
                <p style={{ color: "#9DBC78", fontWeigth: "bold" }}>Kontakt</p>
              ) : (
                <p>Kontakt</p>
              )}
            </div>
            <div className="steper-icon-text-design">
              <div className="icon-center-alignment">
                {tabview === "fifth" ? (
                  <div className="icon-design">
                    <div
                      className={`icon-design-active ${
                        tabview === "fifth" ? "now" : ""
                      }`}></div>
                  </div>
                ) : (
                  <div className="icon-design"></div>
                )}
              </div>

              {tabview === "fifth" ? (
                <p style={{ color: "#9DBC78", fontWeigth: "bold" }}>
                  FE Finance
                </p>
              ) : (
                <p>FE Finance</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
