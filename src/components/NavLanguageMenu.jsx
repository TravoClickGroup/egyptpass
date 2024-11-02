import React from "react";
import { SetLanguage } from "./Translator";

export default function NavLanguageMenu() {
  return (
    <div className="langs-selector">
      <ul>
        <li>
          <button
            onClick={() => {
              SetLanguage("en");
            }}
          >
            English
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              SetLanguage("ar");
            }}
          >
            العربية
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              SetLanguage("fr");
            }}
          >
            Français
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              SetLanguage("gr");
            }}
          >
            Deutsch
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              SetLanguage("ru");
            }}
          >
            русский
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              SetLanguage("jp");
            }}
          >
            日本語
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              SetLanguage("ch");
            }}
          >
            中国人
          </button>
        </li>
      </ul>
    </div>
  );
}
