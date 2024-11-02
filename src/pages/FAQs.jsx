import React, { useState } from "react";
import Layout from "../components/Layout";
import Translator from "../components/Translator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function FAQs() {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(null);

  return (
    <Layout>
      <div
        className="centered-container"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <div class="grid grid-cols-[1fr_2fr] gap-4">
          <div
            style={{
              borderInlineStart: "solid 2px #b4b4b4",
            }}
          >
            {data.map((x, i) => (
              <p
                style={{
                  fontWeight: "bold",
                  marginBottom: 10,
                  paddingInlineStart: 10,
                  color: selectedQuestionIndex === i ? "var(--black)" : "gray",
                  borderInlineStart:
                    selectedQuestionIndex === i
                      ? "solid 3px var(--black)"
                      : "none",
                  borderRadius: 3,
                }}
              >
                <button onClick={setSelectedQuestionIndex.bind(this, i)}>
                  {x.quesstion}
                </button>
              </p>
            ))}
          </div>
          <div>
            {data.map((x, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <div style={{ marginBottom: 20 }}>
                  <h3 style={{ marginBottom: 20, fontWeight: "bold" }}>
                    <button onClick={setSelectedQuestionIndex.bind(this, i)}>
                      {x.quesstion}
                    </button>
                  </h3>
                  {selectedQuestionIndex === i && (
                    <div>
                      <p>{x.answer}</p>
                    </div>
                  )}
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "var(--light-gray-2)", paddingBlock: 50 }}>
        <div className="centered-container">
          <h1>
            <Translator>Need help now?</Translator>
          </h1>
          <p>
            <Translator>Use our live chat and talk to an agent now.</Translator>
          </p>
          <p>
            <b>
              <Translator>
                If you have a question about an attraction, whether it's a
                general request or a booking query, we recommend getting in
                touch with them directly.
              </Translator>
            </b>
          </p>

          <div
            style={{ height: 1, backgroundColor: "#3f3f3f", marginBlock: 25 }}
          ></div>

          <div>
            <div>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
              <span style={{ marginInlineStart: 10 }}>
                <Translator>E-mail</Translator>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="faq-input">
                <input type="text" placeholder="First name" />
              </div>
              <div className="faq-input">
                <input type="text" placeholder="last name" />
              </div>
            </div>
            <div className="faq-input">
              <input type="text" placeholder="Email address" />
            </div>

            <div style={{ marginTop: 50 }}>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
              <span style={{ marginInlineStart: 10 }}>
                <Translator>Subject</Translator>
              </span>
            </div>
            <div className="faq-input">
              <select>
                <option>
                  <Translator>How to use</Translator>
                </option>
                <option>
                  <Translator>Refund</Translator>
                </option>
                <option>
                  <Translator>Reservations</Translator>
                </option>
                <option>
                  <Translator>Can't find my pass</Translator>
                </option>
              </select>
            </div>
            <div className="faq-input">
              <textarea placeholder="Message" rows={5}></textarea>
            </div>

            <div>
              <button className="faq-btn">
                <Translator>Submit</Translator>
              </button>
            </div>
          </div>

          <div
            style={{ height: 1, backgroundColor: "#3f3f3f", marginBlock: 25 }}
          ></div>

          <div>
            <div>
              <FontAwesomeIcon icon={faPhone} />
              <span style={{ marginInlineStart: 10 }}>
                <Translator>Call us</Translator>
              </span>
            </div>

            <p style={{ marginTop: 10 }}>
              <Translator>
                Feel free to give us a toll-free call on the following numbers.
              </Translator>
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 50,
              }}
            >
              {contacts.map((x, i) => (
                <div key={i}>
                  <h4>
                    <b>{x.title}</b>
                  </h4>
                  <p style={{ textDecoration: "underline" }}>{x.no}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const data = [
  {
    quesstion: "Does my pass include transportation?",
    answer:
      "While our passes don't include public transport, they do have a variety of tours and sightseeing buses to choose from. Some might say that's even better than a busy public bus. Just saying.",
  },
  {
    quesstion: "Can I upgrade my pass after purchasing?",
    answer: "Sorry, we aren't offering pass upgrades at this time.",
  },
  {
    quesstion: "Can I purchase a pass for someone else?",
    answer:
      "Of course! Just be sure to add their name and email address at checkout.",
  },
  {
    quesstion: "How do I sync my pass to the Go City app?",
    answer:
      "The Go City app is your key to exploring the city. Download for free to your Apple or Android device and follow the instructions in your confirmation email to sync your pass to the app. It'll then be ready for scanning.To help make your experience even better, we’ve loaded the app with tons of attraction info, tips, and a handy itinerary tool so can plan your perfect trip.",
  },
  {
    quesstion: "Can other people use my pass?",
    answer:
      "Pfft, this isn't your ex's Netflix account. Our passes cannot be resold or used by more than one person. We're sorry about that!",
  },
  {
    quesstion: "Can I cancel my attraction reservation?",
    answer:
      "Yes! Follow the instructions in your booking confirmation or contact the attraction directly to cancel your booking. Remember, a missed visit may be automatically redeemed from your pass, so be sure to cancel to avoid losing one of your days or choices.",
  },
];

const contacts = [
  { title: "Egypt", no: "011111111" },
  { title: "United States", no: "022222222" },
  { title: "UAE", no: "033333333" },
  { title: "KSA", no: "044444444" },
  { title: "All other countries", no: "055555555" },
];
