import React from "react";
import Translator, { isRtl } from "./Translator";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function HomeTopCultures() {
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
        <Translator>Top cultural sights you can't miss</Translator>
      </h1>
      <Slider {...settings}>
        {datalist.map((x, i) => (
          <HomeTopCulturesItem key={i} data={x} index={i + 1} />
        ))}
      </Slider>
    </div>
  );
}

const HomeTopCulturesItem = ({ data, index }) => (
  <Link to="/">
    <div className="HomeTopCulturesItem">
      {data.img}
      <div className="content">
        <h3>
          {index}. {data.title}
        </h3>
        <br />
        <span>
          {data.activities} <Translator>activities</Translator>
        </span>
      </div>
    </div>
  </Link>
);

const datalist = [
  {
    title: "Karnak Temple",
    activities: 95,
    img: <StaticImage alt="" src="../images/Karnak.jpg" />,
  },
  {
    title: "Dahshur City",
    activities: 635,
    img: <StaticImage alt="" src="../images/dahshur_Thumb.jpg" />,
  },
  {
    title: "Luxur City",
    activities: 45,
    img: <StaticImage alt="" src="../images/medinethabu.jpg" />,
  },
  {
    title: "Cairo City",
    activities: 752,
    img: <StaticImage alt="" src="../images/museumofislamicart.jpg" />,
  },
  {
    title: "New CAiro City",
    activities: 156,
    img: <StaticImage alt="" src="../images/Nemc.jpg" />,
  },
  {
    title: "Aswan City",
    activities: 158,
    img: <StaticImage alt="" src="../images/Valleyofthequeens.jpg" />,
  },
  {
    title: "Giza City",
    activities: 354,
    img: <StaticImage alt="" src="../images/valleyofthekings.jpg" />,
  },
];
