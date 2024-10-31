import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RatingStars from "./RatingStars";
import { isRtl } from "./Translator";

export default function HomeReviewsSlider1() {
  var settings = {
    rtl: isRtl(),
    autoplay: false,
    infinite: true,
    dots: true,
    arrows: true, // Hides arrows
    variableWidth: true,
    centerMode: true, // Enable center mode
    centerPadding: "30px",
  };
  return (
    <Slider {...settings}>
      {datalist.map((x, i) => (
        <HomeReviewsSlider1Item key={i} data={x} />
      ))}
    </Slider>
  );
}

const HomeReviewsSlider1Item = ({ data }) => (
  <div className="HomeReviewsSlider1Item">
    <div>
      <RatingStars rate={data?.rate} />
    </div>
    <p className="oneline" style={{ marginTop: 5 }}>
      <b>{data?.title}</b>
    </p>
    <p className="review">{data?.review}</p>
    <p style={{ fontSize: 12 }}>
      <b>{data?.name}</b>
      {", "}
      <span style={{ color: "var(--light-gray-1)" }}>{data?.date}</span>
    </p>
  </div>
);

const datalist = [
  {
    rate: 5,
    title: "Everything is one",
    review: "Everything in one. So easy to plan and you save a lot of many",
    name: "Katja",
    date: "2 days ago",
  },
  {
    rate: 2.3,
    title: "Saved money",
    review: "Saved money. Great service.",
    name: "Gary",
    date: "2 days ago",
  },
  {
    rate: 4.6,
    title: "It was very comfortable using the…",
    review: "It was very comfortable using the Egypt Pass..",
    name: "Kathleen",
    date: "2 days ago",
  },
];
