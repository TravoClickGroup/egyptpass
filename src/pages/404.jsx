import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Translator from "../components/Translator";

const NotFoundPage = () => {
  return (
    <Layout>
      <div
        style={{
          height: 500,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background:
                "linear-gradient(0deg,var(--light-blue-1) 0%,var(--dark-blue-1) 100%)",
              color: "var(--white)",
              width: 300,
              height: 200,
              margin: "auto",
              marginBottom: 30,
              flexDirection: "column",
              borderRadius: 10,
              boxShadow: "gray 1px 1px 5px 0px",
            }}
          >
            <h1>404</h1>
            <h1>
              <Translator>Nothing Here</Translator>
            </h1>
          </div>
        </div>
        <h1>
          <Link to="/" style={{ color: "var(--light-blue-1)" }}>
            <Translator>Go home</Translator>
          </Link>
        </h1>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
