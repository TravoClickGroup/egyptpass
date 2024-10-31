import React from "react";
import Translator, { getCurrentLangResources } from "./Translator";

export default function FooterDiscountAlert() {
  return (
    <>
      <div className="footer-alert">
        <div className="grid grid-cols-2 gap-6 footer-alert-in">
          <div>
            <h1 style={{ marginBottom: 15 }}>
              <Translator>Have a 10% discount, on us!</Translator>
            </h1>
            <p>
              <Translator>footer_discount_alert_desc</Translator>
            </p>
          </div>
          <div>
            <div style={{ display: "flex", marginBottom: 10 }}>
              <input
                className="subscribe-input"
                type="email"
                placeholder={getCurrentLangResources().enter_your_email_address}
              />
              <button className="subscribe-btn">
                <Translator>Subscribe now</Translator>
              </button>
            </div>
            <div>
              <label style={{ padding: 5, display: "flex" }}>
                <input type="checkbox" className="checkbox" />
                <span>
                  <Translator>Subscribe_accept_check</Translator>{" "}
                  <a href="/" style={{ textDecoration: "underline" }}>
                    <Translator>privacy policy</Translator>
                  </a>
                  . <Translator>We do not sell your personal data</Translator>.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
