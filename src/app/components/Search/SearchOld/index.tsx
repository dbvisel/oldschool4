import * as React from "react";
import dynamic from "next/dynamic";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch/dom";
import useClickOutside from "./useClickOutside";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

import styles from "./styles.module.css";

const Search = ({ indices }) => {
  const rootRef = React.createRef();
  const [query, setQuery] = React.useState();
  const [hasFocus, setFocus] = React.useState(false);
  const searchClient = React.useMemo(
    () =>
      algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY
      ),
    []
  );
  useClickOutside(rootRef, () => setFocus(false));
  return (
    <div className={styles.styledsearchroot} ref={rootRef}>
      <InstantSearch
        searchClient={searchClient}
        indexName={"nextindex"}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <SearchBox
          onFocus={() => setFocus(true)}
          className={`${styles.searchbox} ${hasFocus ? "hasFocus" : ""}`}
        />
        <SearchResult
          className={`${styles.searchresult} ${query && query.length > 0 && hasFocus ? "show" : ""}`}
          indices={indices}
        />
      </InstantSearch>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Search), {
  ssr: false,
});
