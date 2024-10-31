import React, { useState } from "react";
import Translator, { isRtl } from "./Translator";
import Slider from "react-slick";

import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import img6 from "../images/img6.png";
import img7 from "../images/img7.png";
import img8 from "../images/img8.png";
import img9 from "../images/img9.png";
import img10 from "../images/img10.png";
import img11 from "../images/dahshur_Thumb.jpg";

export default function HomeAttractionSliders() {
  const [selectedTab, setselectedTab] = useState(1);

  return (
    <>
      <div className="h-attractions-tabs">
        <button
          className={selectedTab === 1 ? "active" : ""}
          onClick={setselectedTab.bind(this, 1)}
        >
          <Translator>Must-sees</Translator>
        </button>
        <button
          className={selectedTab === 2 ? "active" : ""}
          onClick={setselectedTab.bind(this, 2)}
        >
          <Translator>All things Royal</Translator>
        </button>
        <button
          className={selectedTab === 3 ? "active" : ""}
          onClick={setselectedTab.bind(this, 3)}
        >
          <Translator>Museums</Translator>
        </button>
        <button
          className={selectedTab === 4 ? "active" : ""}
          onClick={setselectedTab.bind(this, 4)}
        >
          <Translator>Tours</Translator>
        </button>
        <button
          className={selectedTab === 5 ? "active" : ""}
          onClick={setselectedTab.bind(this, 5)}
        >
          <Translator>City views</Translator>
        </button>
      </div>

      <div>{selectedTab === 1 && <HomeAttarctionSlider1 data={data1} />}</div>
      <div>{selectedTab === 2 && <HomeAttarctionSlider1 data={data2} />}</div>
      <div>{selectedTab === 3 && <HomeAttarctionSlider1 data={data3} />}</div>
      <div>{selectedTab === 4 && <HomeAttarctionSlider1 data={data4} />}</div>
      <div>{selectedTab === 5 && <HomeAttarctionSlider1 data={data5} />}</div>
    </>
  );
}

function HomeAttarctionSlider1({ data }) {
  var settings = {
    rtl: isRtl(),
    // slidesToShow: 5,
    // slidesToScroll: 1,
    dots: true, // Enables dots navigation
    autoplay: false,
    infinite: true,
    arrows: true, // Hides arrows
    variableWidth: true,
    centerMode: true, // Enable center mode
    centerPadding: "10px", // Adjust space on either side of the centered slide
    // adaptiveHeight: true,
    // autoplaySpeed: 0, // No delay between scrolls
    // speed: 5000, // Adjust speed for continuous scroll effect
    // cssEase: "linear", // Linear easing for continuous scrolling
    // pauseOnHover: true, // Prevents pausing on hover
    // pauseOnFocus: true, // Prevents pausing on focus
  };
  return (
    <Slider {...settings}>
      {data &&
        data.map((x, i) => <HomeAttarctionSlider1Item key={i} data={x} />)}
    </Slider>
  );
}

const HomeAttarctionSlider1Item = ({ data }) => (
  <div className="HomeAttarctionSlider1Item">
    <img src={data.img} alt="" />
    <p className="title">{data?.title}</p>
    <p>
      <b>{data?.price?.toFixed(2)} $</b> {data.person && "/"} {data?.person}
    </p>
    <p className="note">{data.note}</p>
  </div>
);

const data1 = [
  {
    img: img1,
    title: "Giza Plateau",
    price: 55.5,
    person: "person normally",
    note: "PM only",
  },
  {
    img: img2,
    title: "Grand Egyption Meseum",
    price: 99.0,
    person: "person normally",
    note: "10% off food & shop",
  },
];

const data2 = [
  {
    img: img4,
    title: "National Museum of Egyptian Civilization",
    price: 55.5,
    person: "person normally",
    note: "PM only",
  },
  {
    img: img5,
    title: "Baron Empain Palace",
    price: 99.0,
    person: "person normally",
    note: "10% off food & shop",
  },
];

const data3 = [
  {
    img: img6,
    title: "Salah Al-Din Citadel",
    price: 55.5,
    person: "person normally",
    note: "PM only",
  },
  {
    img: img7,
    title: "Dahshur",
    price: 99.0,
    person: "person normally",
    note: "10% off food & shop",
  },
];

const data4 = [
  {
    img: img8,
    title: "Saqqara Complex",
    price: 55.5,
    person: "person normally",
    note: "PM only",
  },
  {
    img: img9,
    title: "Dandera Temple",
    price: 99.0,
    person: "person normally",
    note: "10% off food & shop",
  },
];

const data5 = [
  {
    img: img10,
    title: "Memphis",
    price: 55.5,
    person: "person normally",
    note: "PM only",
  },
  {
    img: img11,
    title: "Karnak Temple",
    price: 99.0,
    person: "person normally",
    note: "10% off food & shop",
  },
];
