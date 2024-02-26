import styled, { css } from "styled-components";
import SearchBox from "./SearchBox";
import SearchResult from "./SearchResult";

const open = css`
  width: 10em;
  background: var(--white);
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
`;

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`;

export const StyledSearchBox = styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  margin-left: 12px;
  & .SearchInput {
    outline: none;
    margin-top: 2px;
    border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    font-size: 24px;
    transition: 100ms;
    border-radius: 2px;
    color: var(--darkText);
    font-family: var(--mainFont);
    border-width: 1px;
    &::placeholder {
      color: var(--darkBrown);
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }
  & .SearchIcon {
    width: 1em;
    color: var(--darkText);
    pointer-events: none;
    width: 23px;
    height: 23px;
    margin-top: 2px;
    margin-right: ${({ hasFocus }) => (hasFocus ? "8px" : "0")};
  }
`;

export const StyledSearchResult = styled(SearchResult)`
  --bottomMargin: 24px;
  display: ${(props) => (props.show ? `block` : `none`)};
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 99;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: var(--insidePadding);
  border-radius: 2px;
  background: var(--backdrop);
  & a {
    text-decoration: none;
  }
  & li {
    text-transform: initial !important;
  }
  & h4 {
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-weight: normal;
    align-items: baseline;
    font-size: 28px;
    font-family: var(--headerFont);
    font-weight: bold;
    color: var(--green);
    text-transform: uppercase;
    &:hover > span:not(.type) {
      text-decoration: underline;
    }

    & > span.type {
      white-space: nowrap;
      margin-left: var(--insidePadding);
      text-decoration: none;
      font-size: 24px;
      color: var(--white);
      text-transform: uppercase;
      background-color: var(--lightBrown);
      padding: 0 4px 1px 4px;
      border-radius: 4px;
      font-family: var(--headerFont);
      text-decoration: none !important;
      text-decoration-color: var(--lightBrown);
    }
  }
  & .HitCount {
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--insidePadding);
  }
  & .Hits {
    ul {
      list-style: none;
      margin-left: 0;
      padding: 0;
    }
    li.ais-Hits-item {
      margin-bottom: var(--bottomMargin);
      a {
        color: var(--darkText);
        h4 {
          margin-bottom: 0.2em;
          line-height: 28px;
        }
      }
      & .ais-Snippet {
        font-family: var(--mainFont);
        font-weight: normal;
        font-size: 18px;
        line-height: 24px;
        display: block;
        & .ais-Snippet-highlighted {
          /* background-color: var(--lightBrown); */
        }
      }
    }
  }
  & .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 16px;
    font-weight: normal;
    text-transform: initial;
    font-family: var(--mainFont);
    align-items: center;
    svg {
      width: 70px;
      margin-left: 5px;
      margin-top: 7px;
    }
  }
  & .ais-Pagination {
    display: flex;
    justify-content: center;
    & ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      & li {
        margin: 10px;
        color: var(--lightBrown);
        & a {
          color: var(--darkBrown);
          transition: 0.5s;
          &:hover {
            color: var(--green);
          }
          &.ais-Pagination-link--selected {
            color: var(--white);
            background-color: var(--green);
            border-radius: 4px;
            padding: 0 6px 3px 6px;
          }
        }
      }
    }
  }
`;
