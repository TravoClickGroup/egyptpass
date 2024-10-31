import React from "react";
import Cookies from "js-cookie";
import { en } from "../lang/en";
import { ar } from "../lang/ar";

export const langKey = "lang-key";

export default function Translator({ children }) {
  const lng = getCurrentLangResources();
  var val = lng[children];
  return <>{val || children}</>;
}

export function SetLanguage(key) {
  Cookies.set(langKey, key);
  window.location.reload();
}

export function getCurrentLangResources() {
  var lkey = Cookies.get(langKey);
  let lng = { ...en };
  switch (lkey) {
    case "ar":
      lng = { ...en, ...ar };
      break;

    default:
      break;
  }
  return lng;
}

export function isRtl() {
  return getCurrentLangResources().isRtl;
}

export function getCurrentLanguageCode() {
  return Cookies.get(langKey) || "en";
}
