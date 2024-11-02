import React, { useEffect, useState } from "react";
import Translator from "./Translator";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faEarth,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import NavLanguageMenu from "./NavLanguageMenu";

export default function HeaderNav() {
  const [showLanguagesList, setShowLanguagesList] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 63) {
        // Adjust 50 to the scroll distance you want
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showLanguagesList && (
        <div
          className="g-overlay"
          onClickCapture={() => {
            setShowLanguagesList(false);
          }}
        ></div>
      )}
      {isFixed && <div style={{ height: 63 }}></div>}
      <header className={isFixed ? "fixed" : ""}>
        <nav className="head-main-nav">
          <div className="head-logo">
            <Link to="/">
              <StaticImage src="../images/logo.png" width={100} alt="logo" />
            </Link>
          </div>
          <div className="main-nav">
            <ul>
              <li>
                <Link to="/BuyNow">
                  <Translator>Buy now</Translator>
                </Link>
              </li>
              <li>
                <Link to="/Attractions">
                  <Translator>Attractions</Translator>
                </Link>
              </li>
              <li>
                <Link to="/HowItWorks">
                  <Translator>How it works</Translator>
                </Link>
              </li>
              <li>
                <Link to="/SavingsGuarantee">
                  <Translator>Savings guarantee</Translator>
                </Link>
              </li>
              <li>
                <Link to="/EgyptTravel">
                  <Translator>Egypt travel</Translator>
                </Link>
              </li>
              <li>
                <Link to="/Reservations">
                  <Translator>Reservations</Translator>
                </Link>
              </li>
              <li>
                <Link to="/FAQs">
                  <Translator>FAQs</Translator>
                </Link>
              </li>
              <li>
                <Link to="/ThingsToDo">
                  <Translator>Things to do</Translator>
                </Link>
              </li>
              <li>
                <div style={{ marginInlineStart: 10, position: "relative" }}>
                  <div className="langs-btn">
                    <button
                      onClick={setShowLanguagesList.bind(
                        this,
                        !showLanguagesList
                      )}
                    >
                      <FontAwesomeIcon icon={faEarth} />{" "}
                      <Translator>language</Translator>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                  </div>

                  {showLanguagesList && <NavLanguageMenu />}
                </div>
              </li>
              <li className="separator"></li>
              <li>
                <Link to="/">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
