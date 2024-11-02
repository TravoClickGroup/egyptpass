import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function ThingsToDo() {
  return <Layout></Layout>;
}

export const Head = () => <Seo title={"Things to do"}></Seo>;
