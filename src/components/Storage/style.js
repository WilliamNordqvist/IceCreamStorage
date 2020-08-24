import styled from "styled-components";

export const StorageContainer = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;

  * {
    margin: 0;
  }
  .storageItem {
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px 5px;
    border: 2px solid #1d3557;
    border-radius: 5px;
    .icon {
      display: flex;
      justify-content: center;
      margin: 0 5px;
    }
  }
  .loadingIcon {
    color: #f1faee;
    height: 120px;
    display: flex;
    align-items: center;
  }
`;
