import {
  faChevronLeft,
  faChevronRight,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Translator, { isRtl } from "./Translator";
import { Link } from "gatsby";

export default function HeaderDiscountAlert() {
  return (
    <>
      <div className="header-alert">
        <div className="header-alert-content">
          <p>
            <FontAwesomeIcon icon={faHourglassHalf} />{" "}
            <Translator>header_discount_alert_desc</Translator>
          </p>
          <div>
            <Link to="/BuyNow">
              <Translator>Buy a pass</Translator>{" "}
              <FontAwesomeIcon
                icon={!isRtl() ? faChevronRight : faChevronLeft}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
