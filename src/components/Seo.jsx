import React from "react";
import { getCurrentLanguageCode, isRtl } from "./Translator";

export default function Seo({ title, children, desc, kewards }) {
  return (
    <>
      <html dir={isRtl() ? "rtl" : "ltr"} lang={getCurrentLanguageCode()} />
      <title>{title && title + " | "}Egypt Pass</title>
      {desc && <meta name="description" content={desc} />}
      {kewards && <meta name="keywords" content={kewards} />}
    </>
  );
}
