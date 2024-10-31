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
            <Translator>
              24-HOURS ONLY | Save up to 10% + extra 5% off your first order.
              Code: DESCOVEREGY
            </Translator>
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
