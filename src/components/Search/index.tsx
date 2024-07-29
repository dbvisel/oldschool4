"use client";
import { useState, Suspense } from "react";
import { renderToString } from "react-dom/server";
import {
  InstantSearchServerState,
  InstantSearchSSRProvider,
  getServerState,
  SearchBox,
  Configure,
} from "react-instantsearch";
import { Highlight, useInfiniteHits, Snippet } from "react-instantsearch";

import type { InstantSearchProps } from "react-instantsearch";
import algoliasearch from "algoliasearch/lite";
import { InstantSearchNext } from "react-instantsearch-nextjs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Hit from "./Hit";

import styles from "./styles.module.css";

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || "",
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY || ""
);

type SearchPageProps = {
  serverState?: InstantSearchServerState;
};

const InfiniteHits2 = (props: any) => {
  const { hits } = useInfiniteHits(props);

  return (
    <div className={styles.hitwrapper}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          262: 1,
          544: 2,
          826: 3,
          1108: 4,
          1390: 4,
          1672: 5,
          1954: 6,
          2236: 7,
        }}
        className={styles.cardHolder}
      >
        <Masonry gutter={"var(--paddingOutside)"}>
          {hits.length ? (
            hits.map((hit) => <Hit key={hit.id} hit={hit} />)
          ) : (
            <p className={styles.notFound}>Nothing found, sorry!</p>
          )}
        </Masonry>
      </ResponsiveMasonry>
      <div style={{ height: "var(--paddingOutside)" }} />
    </div>
  );
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
    <Suspense fallback="Loading...">
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
              className="searchbox"
              placeholder="Search Old School resources and events"
              // queryHook={(query, search) => setQuery(query)}
            />
            <div
              className={`${styles.searchresults} ${currentQuery.length ? "on" : ""}`}
            >
              <h2 className="pageheader">
                <span>Search Results</span>
              </h2>
              <InfiniteHits2 hitComponent={Hit} />
            </div>
          </InstantSearchNext>
        </InstantSearchSSRProvider>
      </div>
    </Suspense>
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
