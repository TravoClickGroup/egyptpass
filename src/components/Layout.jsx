import React from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import HeaderDiscountAlert from "./HeaderDiscountAlert";

export default function Layout({ children }) {
  return (
    <>
      <HeaderNav />
      <HeaderDiscountAlert />
      <div>{children}</div>
      <Footer />
    </>
  );
}
