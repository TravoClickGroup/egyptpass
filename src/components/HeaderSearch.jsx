import React from "react";
import Translator, { getCurrentLangResources } from "./Translator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HeaderSearch() {
  return (
    <>
      <div
        className="centered-container"
        style={{ marginBottom: 10, paddingTop: 10 }}
      >
        <div className="header-search">
          <FontAwesomeIcon
            icon={faSearch}
            fontSize={22}
            style={{ position: "relative", top: 3 }}
          />
          <input
            type="text"
            placeholder={getCurrentLangResources().findPlacesAndThingsToDo}
          />
          <button>
            <Translator>Search</Translator>
          </button>
        </div>
      </div>
    </>
  );
}
