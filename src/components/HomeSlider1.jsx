import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faCheckCircle,
  faExclamationCircle,
  faMoneyBillTransfer,
  faPercent,
  faStar,
  faTags,
  faTicket,
  faTimesCircle,
  faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import Translator from "./Translator";

export default function HomeSlider1() {
  var settings = {
    // slidesToShow: 5,
    // slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true, // Hides arrows
    variableWidth: true,
    // adaptiveHeight: true,
    // autoplaySpeed: 0, // No delay between scrolls
    // speed: 5000, // Adjust speed for continuous scroll effect
    // cssEase: "linear", // Linear easing for continuous scrolling
    // pauseOnHover: true, // Prevents pausing on hover
    // pauseOnFocus: true, // Prevents pausing on focus
  };
  return (
    <Slider {...settings}>
      <HomeSlider1Item
        icon={faExclamationCircle}
        text={"Easy planning with the in-app itinerary builder"}
      />
      <HomeSlider1Item icon={faTicket} text={"Choose attractions as you go"} />
      <HomeSlider1Item
        icon={faTimesCircle}
        text={"Free cancellation within 30 days"}
      />
      <HomeSlider1Item
        icon={faMoneyBillTransfer}
        text={"Save with us or we'll refund the difference"}
      />
      <HomeSlider1Item
        icon={faUmbrellaBeach}
        text={"Plan your trip with the highly-rated Go City® app"}
      />
      <HomeSlider1Item
        icon={faPercent}
        text={"Save up to 50% vs. buying individual tickets"}
      />
      <HomeSlider1Item
        icon={faCheckCircle}
        text={"Valid for two years from purchase date"}
      />
      <HomeSlider1Item
        icon={faArrowUpFromBracket}
        text={"Our best line-up ever!"}
      />
      <HomeSlider1Item
        icon={faStar}
        text={"Exclusive perks at selected attractions"}
      />
      <HomeSlider1Item
        icon={faTags}
        text={"The more you see, the more you save!"}
      />
    </Slider>
  );
}

const HomeSlider1Item = ({ icon, text }) => (
  <div className="HomeSlider1Item">
    <div>
      <FontAwesomeIcon icon={icon} color="var(--light-blue-1)" fontSize={24} />
    </div>
    <p>
      <Translator>{text}</Translator>
    </p>
  </div>
);
