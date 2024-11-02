import React from "react";
import Translator, { isRtl } from "./Translator";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function HomeInspiringCultures() {
  var settings = {
    rtl: isRtl(),
    autoplay: false,
    infinite: true,
    dots: true,
    arrows: true, // Hides arrows
    variableWidth: true,
  };
  return (
    <div style={{ marginTop: 50, marginBottom: 50 }}>
      <h1 style={{ marginBottom: 10 }}>
        <Translator>Awe-inspiring culture around the world</Translator>
      </h1>
      <Slider {...settings}>
        {datalist.map((x, i) => (
          <HomeInspiringCulturesItem key={i} data={x} index={i + 1} />
        ))}
      </Slider>
    </div>
  );
}

const HomeInspiringCulturesItem = ({ data, index }) => (
  <Link to="/">
    <div className="HomeInspiringCulturesItem">
      {data.img}
      <div className="content">
        <h3>{data.title}</h3>
      </div>
    </div>
  </Link>
);

const datalist = [
  {
    title: "Dahshur",
    img: <StaticImage alt="" src="../images/dahshur_Thumb.jpg" />,
  },
  {
    title: "Luxur",
    img: <StaticImage alt="" src="../images/medinethabu.jpg" />,
  },
  {
    title: "Cairo",
    img: <StaticImage alt="" src="../images/museumofislamicart.jpg" />,
  },
  {
    title: "New CAiro",
    img: <StaticImage alt="" src="../images/Nemc.jpg" />,
  },
  {
    title: "Aswan",
    img: <StaticImage alt="" src="../images/Valleyofthequeens.jpg" />,
  },
  {
    title: "Giza",
    img: <StaticImage alt="" src="../images/valleyofthekings.jpg" />,
  },
];
