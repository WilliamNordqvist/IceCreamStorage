import styled from "styled-components";

export const OrderItemContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 0.5%;
  width: 300px;
  height: 200px;
  border: 2px solid #1d3557;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  margin: 10px 5px;
  p {
    font-size: 13px;
  }
`;

export const FlexItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  .Icons {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    p {
      font-size: 18px;
      margin: 0;
    }
  }
  button,
  button:hover,
  button:focus {
    background: #1d3557;
    color: #a8dadc;
    border-color: #1d3557;
  }
`;
