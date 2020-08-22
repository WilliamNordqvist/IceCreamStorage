import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;

  .content {
    height: 90%;
    overflow:scroll;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    background-color: #1d3557;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    a { 
      margin: 0 15px;
    }

    button {
      width: 150px;
    }
  }
`;

