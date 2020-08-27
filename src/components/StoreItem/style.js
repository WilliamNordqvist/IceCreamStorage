import styled from "styled-components";

export const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0.5%;
  width: 270px;
  height: 170px;
  background: rgba(255, 255, 255, 0.7);
  margin: 10px 5px;
  border: ${(props) => (props.status === "request sent" ? "2px solid #8B0000" : "2px solid #1d3557")};
  border-radius: 5px;


  .status {
    color: ${(props) => (props.status === "request sent" ? "#8B0000" : "#1d3557")};
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
      background:transparent;
    }
    .FilledBtn{
      background:#1d3557;
      border-color: #1d3557;
    }
  }
`;
