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
.active{ 
  button {
    /* background:red; */
    background:#1890ff;
    color:white
  }
}
    button {
      width: 150px;
      color:#1890ff;
      border-color:#1890ff;
    }
  }
`;

