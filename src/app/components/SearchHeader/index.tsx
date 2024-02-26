import * as React from "react";
import { SearchDiv } from "./elements";
import styles from "./styles.module.css";

const SearchHeader = ({ text, searchingFor, typeSection }) => {
  const inputRef = React.useRef(null);
  return (
    <div className={`${styles.search} ${typeSection ? "typesection" : ""}`}>
      <label>
        {text || "Search for something on Old School:"}
        <div>
          <input
            type="text"
            name="searchFor"
            ref={inputRef}
            onChange={(e) => {
              searchingFor(e.target.value.trim());
            }}
          />
          <button
            onClick={(e) => {
              searchingFor("");
              inputRef.current.value = "";
            }}
          >
            Cancel
          </button>
        </div>
      </label>
    </div>
  );
};
export default SearchHeader;
