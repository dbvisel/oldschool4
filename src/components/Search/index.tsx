"use client";
import { useState, Suspense, useRef, useEffect } from "react";
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

// TODO: We should replace the searchbox with one made with useSearchBox():
// https://www.algolia.com/doc/api-reference/widgets/search-box/react/#hook

const InfiniteHits2 = (props: any) => {
  const { hits } = useInfiniteHits(props);
  return hits && hits.length ? (
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
          {hits &&
            hits.length &&
            hits.map((hit) => <Hit key={hit.id} hit={hit} />)}
        </Masonry>
      </ResponsiveMasonry>
      <div style={{ height: "var(--paddingOutside)" }} />
    </div>
  ) : (
    <div className={styles.hitwrapper}>
      <p className={styles.notFound}>
        Can’t find what you are looking for? Create it! Want input or
        collaborators? Submit a proposal to our{" "}
        <a href="/hubsters">projects page</a>!
      </p>
    </div>
  );
};

export default function SearchPage({ serverState }: SearchPageProps) {
  const [currentQuery, setCurrentQuery] = useState("");

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: any) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          ref.current?.clientHeight
        ) {
          // TODO: figure out how to close this!
          setCurrentQuery("");
          // Does this actually work?
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const onStateChange: InstantSearchProps["onStateChange"] = ({
    uiState,
    setUiState,
  }) => {
    // This fires when the state changes; this lets us hide the box when there's no query
    const query = uiState.nextindex.query || "";
    setCurrentQuery(query);
    setUiState(uiState);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

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
            <Configure hitsPerPage={1000} />

            <SearchBox
              className="searchbox"
              placeholder="Search Old School resources and events"
              autoFocus={false}
              // onSubmit={(e) => {
              //   e.preventDefault();
              //   if (!currentQuery.length) {
              //     console.log("search box clicked, no query");
              //   }
              // }}
              // queryHook={(query, search) => {
              //   setCurrentQuery(query);
              // }}
            />
            <div
              className={`${styles.searchresults} ${currentQuery.length ? "on" : ""}`}
              ref={wrapperRef}
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
