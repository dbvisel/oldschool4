import styled from "styled-components";

export const SearchDiv = styled.div`
  --textColor: ${(props) =>
    props.typeSection ? "var(--white)" : "var(--green)"};
  --buttonText: ${(props) =>
    props.typeSection ? "var(--green)" : "var(--white)"};
  --searchColor: var(--green);
  width: 100%;
  padding: 50px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  & label {
    font-size: 24px;
    text-align: center;
    box-sizing: border-box;
    width: 100%;
    color: var(--textColor);
    font-weight: bold;
    & div {
      display: flex;
      margin-top: 24px;
      & input {
        box-sizing: border-box;
        width: 100%;
        height: 48px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        border: none;
        margin-right: 16px;
        flex: 2;
        font-family: var(--mainFont);
        color: var(--searchColor);
        border-radius: 16px;
        transition: 0.25s;
        &:focus {
          appearance: none;
          border: none;
          outline: none;
          box-shadow: 0 0 10px var(--textColor);
        }
      }
      & button {
        cursor: pointer;
        user-select: none;
        height: 48px;
        padding: 0 16px 2px 16px;
        border-radius: 16px;
        font-size: 24px;
        font-family: var(--headerFont);
        text-transform: uppercase;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: var(--textColor);
        color: var(--buttonText);
        border: none;
        transition: 0.25s;
        &:hover {
          box-shadow: 0 0 10px var(--textColor);
        }
        &:focus {
          appearance: none;
          border: none;
          outline: none;
        }
      }
    }
  }
`;

export const SearchErrorMessage = styled.p`
  text-align: center;
  font-weight: bold;
  width: 100%;
  font-size: 36px;
  padding: 0 50px;
  cursor: pointer;
  box-sizing: border-box;
  color: var(--lightText);
  & a {
    color: var(--lightBrown);
    transition: 0.25s;
    &:hover {
      color: var(--lightText);
    }
  }
`;
