import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Translator, { isRtl } from "../components/Translator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faMoneyBillTrendUp,
  faStar,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import RatingStars from "../components/RatingStars";
import HomeSlider1 from "../components/HomeSlider1";
import HomeAttractionSliders from "../components/HomeAttractionSliders";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import HomeReviewsSlider1 from "../components/HomeReviewsSlider";

export default function index({ data }) {
  const cover_bg = getImage(data.coverImage);
  return (
    <Layout>
      <div className="home-cover">
        <GatsbyImage
          image={cover_bg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ position: "absolute" }}
        />
        <div className="overlay">
          <div className="cover-content">
            <div>
              <h1 style={{ marginBottom: 10 }}>
                <Translator>
                  The Egypt Pass® | Save big on all your must-sees
                </Translator>
              </h1>
              <p style={{ marginBottom: 20 }}>
                <Translator>
                  The best Egypt attractions and activities, all for one low
                  price.
                </Translator>
              </p>

              <div className="cover-counters">
                <div>
                  <h1>4.3M</h1>
                  <small>
                    <Translator>purchases</Translator>
                  </small>
                </div>
                <div>
                  <h1>95+</h1>
                  <small>
                    <Translator>attractions included</Translator>
                  </small>
                </div>
                <div>
                  <h1>$150</h1>
                  <small>
                    <Translator>potential savings per trip</Translator>
                  </small>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <button className="btn btn-blue m-i-ed">
                  <Translator>Buy now</Translator>
                </button>

                <button className="btn btn-transparent m-i-ed">
                  <Translator>View all attractions</Translator>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-ab-rate">
        <b>
          <Translator>Excelent</Translator>
        </b>
        <RatingStars rate={4.5} />
        22,920 <Translator>Reviews on</Translator>{" "}
        <FontAwesomeIcon icon={faStar} color="var(--light-green-1)" />{" "}
        <Translator>Trustpilot</Translator>
      </div>

      <div className="h-about">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3>
              <Translator>Why choose The Egypt Pass®?</Translator>
            </h3>
            <h1>
              <Translator>
                We guarantee you'll save on your sightseeing!
              </Translator>
            </h1>
            <ul>
              <li>
                <Translator>
                  The Egypt Pass® is a credits package, so you'll get a set
                  number of credits to use for the number of days you choose.
                </Translator>
              </li>
              <li>
                <Translator>
                  It's easy to scan in at attractions to redeem your credits.
                </Translator>
              </li>
              <li>
                <Translator>
                  Enjoy savings of up to 50% on all your sightseeing vs. buying
                  individual attraction tickets.
                </Translator>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>

      <div className="h-slider-1">
        <div className="in">
          <HomeSlider1 />
        </div>
      </div>

      <div className="home-attractions">
        <h3 style={{ textAlign: "center" }}>
          <Translator>Access 90+ Egypt attractions</Translator>
        </h3>
        <h1 style={{ textAlign: "center" }}>
          <Translator>
            From river cruises to royal stomping grounds, we've got you
            covered...
          </Translator>
        </h1>

        <HomeAttractionSliders />
      </div>

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Link to="/Attractions" className="btn btn-transparent-light">
          <Translator>View all 90+ attractions</Translator>
        </Link>
      </div>

      <div className="home-how-it-works">
        <h3 style={{ textAlign: "center" }}>
          <Translator>How it works</Translator>
        </h3>
        <h1 style={{ textAlign: "center", marginBottom: 40 }}>
          <Translator>We make sightseeing easy</Translator>
        </h1>

        <div className="in">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <FontAwesomeIcon
                icon={faTicket}
                fontSize={40}
                color="var(--light-blue-1)"
              />
              <h3>
                <b>
                  <Translator>Buy</Translator>
                </b>
              </h3>
              <p>
                Pick a 1, 2, 3, 4, 5, 6, 7 or 10-day credits package, whichever
                works for your trip.
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faSearchengin}
                fontSize={40}
                color="var(--light-blue-1)"
              />
              <h3>
                <b>
                  <Translator>Scan</Translator>
                </b>
              </h3>
              <p>
                Download our highly-rated app to scan in at each attraction.
              </p>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faMoneyBillTrendUp}
                fontSize={40}
                color="var(--light-blue-1)"
              />
              <h3>
                <b>
                  <Translator>Save</Translator>
                </b>
              </h3>
              <p>
                Enjoy guaranteed savings (or we'll refund you the difference!).
              </p>
            </div>
          </div>
        </div>

        <div>
          <button className="btn btn-blue hover-transparent">
            <Translator>Find out more</Translator>
          </button>
        </div>
      </div>

      <div className="centered-container buy-with-conf">
        <h1 style={{ marginBottom: 40 }}>
          <Translator>Buy with confidence</Translator>
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3>
              <b>
                <Translator>Free cancellation</Translator>
              </b>
            </h3>
            <p>
              <Translator>
                Plans can change, we get it. All non-activated credits packages
                are eligible for a refund within 30 days of your purchase date.
              </Translator>
            </p>
            <p>
              <Link to="/BuyNow">
                <Translator>Find out more</Translator>{" "}
                <FontAwesomeIcon
                  icon={isRtl() ? faChevronLeft : faChevronRight}
                />
              </Link>
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3>
                <b>
                  <Translator>Got a question?</Translator>
                </b>
              </h3>
              <p>
                <Translator>
                  Check out our FAQs or live chat with our customer service
                  agents now
                </Translator>
              </p>
              <p>
                <Link to="/FAQs">
                  <Translator>See our FAQs</Translator>{" "}
                  <FontAwesomeIcon
                    icon={isRtl() ? faChevronLeft : faChevronRight}
                  />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-reviews">
        <div className="centered-container">
          <h3 style={{ textAlign: "center" }}>
            <b>
              <Translator>
                The Egypt Pass® is highly rated, but don't just take our word
                for it!
              </Translator>
            </b>
          </h3>
          <br />
          <div>
            <HomeReviewsSlider1 />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const Head = () => <Seo title={"Home"}></Seo>;

export const query = graphql`
  query {
    coverImage: file(relativePath: { eq: "img4.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, formats: [AUTO, WEBP])
      }
    }
  }
`;
