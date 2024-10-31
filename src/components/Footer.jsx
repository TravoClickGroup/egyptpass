import React from "react";
import Translator from "./Translator";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import FooterDiscountAlert from "./FooterDiscountAlert";

export default function Footer() {
  return (
    <>
      <FooterDiscountAlert />
      <footer>
        <div className="footer-wrapper">
          <hr />
          <div style={{ padding: 5 }} className="grid grid-cols-4 gap-4">
            <div>
              <h4 style={{ fontWeight: "bold" }}>
                <Translator>Company</Translator>
              </h4>
              <ul>
                <li>
                  <Link to="/">
                    <Translator>Home</Translator>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Translator>About us</Translator>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Translator>Things to do</Translator>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Translator>Careers</Translator>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: "bold" }}>
                <Translator>Support</Translator>
              </h4>
              <ul>
                <li>
                  <Link to="/">
                    <Translator>Help</Translator>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontWeight: "bold" }}>
                <Translator>Partners</Translator>
              </h4>
              <ul>
                <li>
                  <Link to="/">
                    <Translator>Work With Us</Translator>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Translator>Affiliates</Translator>
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <Translator>Partner Login</Translator>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <h1 style={{ marginBottom: 20, marginTop: 20 }}>
            <Translator>Get the app</Translator>
          </h1>
          <div className="apps">
            <div className="apps-links">
              <a
                href="https://play.google.com/store/games?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage src="../images/playStore.svg" alt="Google Play" />
              </a>
              <a
                href="https://www.apple.com/eg/app-store/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage src="../images/appStore.svg" alt="App Store" />
              </a>
            </div>
            <div className="copyrights">
              <div className="socials">
                <span style={{ marginInlineEnd: 10 }}>
                  <b>
                    <Translator>Follow us</Translator>:
                  </b>
                </span>
                <a href="https://fb.com">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://fb.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://fb.com">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://fb.com">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </div>
              <div>
                <span style={{ display: "inline-block" }}>
                  ©EgyptPass {new Date().getFullYear()}
                </span>
                <div style={{ display: "inline-block" }}>
                  <ul>
                    <li>
                      <Link to="/">
                        <Translator>Privacy</Translator>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Translator>Terms</Translator>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <Translator>Cookie Policy</Translator>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
