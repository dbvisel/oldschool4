import * as React from "react";
import Link from "next/link";
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
  Pagination,
} from "react-instantsearch/dom";

// Remember: there's an example for how to change pagination here:
// https://www.algolia.com/doc/api-reference/widgets/pagination/react/
// but putting in that code crashes it?

const HitCount = connectStateResults(({ searchResults }) => {
  // this revision get hidden results out of here
  // console.log(searchResults.hits, Boolean(searchResults.hits));
  const hitCount =
    searchResults && searchResults.hits && searchResults.hits.length
      ? searchResults.hits.filter((x) => x.Types).length
      : 0;
  // const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : (
    <p className="notfound">
      We couldn’t find anything. Try searching for something else?
    </p>
  );
});

const PaginationWrapper = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits;
  return hitCount > 20 ? <Pagination /> : null;
});

const PageHit = ({ hit }) => {
  // console.log(typeof hit.Short_Description);
  // this ternary is to filter out things that show up without a type – e.g. hidden things
  return hit.Types ? (
    <div>
      <Link href={`/resource/${hit.slug}/`}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
          <span className="type">{hit.Types.join(", ")}</span>
        </h4>
      </Link>
      <Snippet attribute="Short_Description" hit={hit} tagName="mark" />
    </div>
  ) : null;
};

const HitsInIndex = ({ index }) => {
  return (
    <Index indexName={index.name}>
      <HitCount />
      <Hits className="Hits" hitComponent={PageHit} />
      <PaginationWrapper />
    </Index>
  );
};

const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map((index) => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
);

export default SearchResult;
