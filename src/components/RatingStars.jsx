import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { decimalToPercentage } from "../helpers/Helpers";

export default function RatingStars({ rate }) {
  return (
    <span className="rate-block" title={rate}>
      {new Array(Math.floor(!isNaN(rate) ? parseInt(rate) : 1))
        .fill(1)
        .map((x, i) => (
          <span className="rate-star" key={i}>
            <FontAwesomeIcon icon={faStar} />
          </span>
        ))}
      {decimalToPercentage(rate) > 0 && (
        <span
          className="rate-star"
          style={{
            background: `linear-gradient(to right, var(--light-green-1) ${decimalToPercentage(
              rate
            )}%, transparent 50%)`,
          }}
        >
          <FontAwesomeIcon icon={faStar} />
        </span>
      )}
    </span>
  );
}
