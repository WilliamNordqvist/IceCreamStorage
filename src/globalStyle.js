import styled from "styled-components";

export const ContentContainer = styled.section`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.background};
  padding: 3% 5%;
  h1 {
    text-align: center;
    font-size: 35px;
    color:black;
    font-family: 'Bree Serif', serif;
  }
`;
