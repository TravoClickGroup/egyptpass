import React from "react";
import Cookies from "js-cookie";
import { en } from "../lang/en";
import { ar } from "../lang/ar";
import { jp } from "../lang/jp";
import { ch } from "../lang/ch";
import { fr } from "../lang/fr";
import { gr } from "../lang/gr";
import { ru } from "../lang/ru";

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
    case "jp":
      lng = { ...en, ...jp };
      break;
    case "ch":
      lng = { ...en, ...ch };
      break;
    case "fr":
      lng = { ...en, ...fr };
      break;
    case "gr":
      lng = { ...en, ...gr };
      break;
    case "ru":
      lng = { ...en, ...ru };
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
