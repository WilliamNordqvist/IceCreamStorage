import styled from "styled-components";

export const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0.5%;
  width: 270px;
  height: 170px;
  background: rgba(255, 255, 255, 0.2);
  margin: 10px 5px;
  border: 2px solid #1d3557;
  border-radius: 5px;

  .StoreName {
    font-family: "Varela Round", sans-serif;
    height: 20%;
    margin: 0;
  }
  .status {
    color: ${(props) => (props.status === "open" ? "#92D994" : "black")};
  }
`;

export const FlexItem = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;

  .Icons {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;

    .IconContainer {
      display: flex;

      span {
        display: flex;
        align-items: center;
      }
      .amount {
        font-size: 25px;
        margin: 0 0 0 5px;
      }
      .add,
      .remove {
        cursor: pointer;
        font-size: 30px;
        margin: 0 5px;
      }
    }
  }

  .Buttons {
    margin: 0 0 5px 0;

    button {
      margin: 0 10px 0 0;
      width: 70px;
      
    }

    .GhostBtn {
      color: #1d3557;
      border-color: #1d3557;
    }
    .FilledBtn{
      background:#1d3557;
      border-color: #1d3557;
    }
  }
`;
