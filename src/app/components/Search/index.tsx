"use client";
import { useState } from "react";
import { renderToString } from "react-dom/server";
import {
  InstantSearchServerState,
  InstantSearchSSRProvider,
  getServerState,
  SearchBox,
  Hits,
  Pagination,
  Configure,
} from "react-instantsearch";
import type { InstantSearchProps } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { InstantSearchNext } from "react-instantsearch-nextjs";

import Hit from "./Hit";

import styles from "./styles.module.css";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
);

type SearchPageProps = {
  serverState?: InstantSearchServerState;
};

export default function SearchPage({ serverState }: SearchPageProps) {
  const [currentQuery, setCurrentQuery] = useState("");

  const onStateChange: InstantSearchProps["onStateChange"] = ({
    uiState,
    setUiState,
  }) => {
    // This fires when the state changes; this lets us hide the box when there's no query
    const query = uiState.nextindex.query || "";
    setCurrentQuery(query);
    setUiState(uiState);
  };

  return (
    <div className={styles.search}>
      <InstantSearchSSRProvider {...serverState}>
        <InstantSearchNext
          indexName="nextindex"
          searchClient={searchClient}
          future={{ preserveSharedStateOnUnmount: true }}
          onStateChange={onStateChange}
        >
          <Configure hitsPerPage={10} />

          <SearchBox
            placeholder="Search Old School resources and events"
            // queryHook={(query, search) => setQuery(query)}
          />
          <div
            className={`${styles.searchresults} ${currentQuery.length ? "on" : ""}`}
          >
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </InstantSearchNext>
      </InstantSearchSSRProvider>
    </div>
  );
}

export async function getStaticProps() {
  const serverState = await getServerState(<SearchPage />, { renderToString });
  return {
    props: {
      serverState,
    },
  };
}
