import React from "react";
import HeaderNav from "./HeaderNav";
import Footer from "./Footer";
import HeaderDiscountAlert from "./HeaderDiscountAlert";
import HeaderSearch from "./HeaderSearch";

export default function Layout({ children }) {
  return (
    <>
      <HeaderSearch />
      <HeaderNav />
      <HeaderDiscountAlert />
      <div>{children}</div>
      <Footer />
    </>
  );
}
