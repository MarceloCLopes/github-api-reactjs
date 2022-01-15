import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;

  input {
    border: 1px solid #ff8177;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    margin-right: 8px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-image: linear-gradient(
      to right,
      #ff8177 0%,
      #ff867a 0%,
      #ff8c7f 21%,
      #f99185 52%,
      #cf556c 78%,
      #b12a5b 100%
    );
    padding: 8px 16px;
    margin: 0 8px;
    border-radius: 8px;
    font-size: 16px;
    text-transform: uppercase;

    &:hover {
      background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
      box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.5);
    }

    span {
      color: #fff;
      font-weight: bold;
    }
  }
`;
