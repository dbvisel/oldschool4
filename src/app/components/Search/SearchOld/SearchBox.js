import * as React from "react";
import { connectSearchBox } from "react-instantsearch/dom";
import { MagnifyingGlass as SearchIcon } from "@styled-icons/fa-solid";

const SearchBox = connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <SearchIcon
        className="SearchIcon"
        width={24}
        height={24}
        title="Search"
      />
    </form>
  )
);

export default SearchBox;
