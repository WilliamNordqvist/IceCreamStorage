import styled from "styled-components";

export const ContentContainer = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.background};
  padding: 3% 5%;
  overflow: scroll;
  h1 {
    text-align: center;
    font-size: 35px;
    color: black;
    font-family: "Bree Serif", serif;
  }
  .divider {
    font-size: 18px;
    font-family: "Bree Serif", serif;
    margin: 40px 0 15px 0;
    ::before,
    ::after {
      border-top: 1px solid rgba(0, 0, 0, 0.15);
    }
  }

  .icon {
    display: flex;
    align-items:center;
  }
`;
