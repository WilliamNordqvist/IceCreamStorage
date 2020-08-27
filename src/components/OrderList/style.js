import styled from "styled-components";

export const OrderListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .iconContaine {
    margin:0 0 20px 0;
    span {
      font-size: 30px;
    }
  }

`;

export const OrderListConten = styled.div`
  width: 100%;
  max-height: ${(props) => (props.isOpen ? "2000px" : "0px")};
  transition: all .5s ease;
  background: rgba(255, 255, 255, 0.7);
  border: ${(props) => (props.isOpen ? "2px solid #1d3557" : "0px solid #1d3557")};
  border-radius: 5px;
  overflow:hidden;
  padding:${(props) => (props.isOpen ? " 5px 30px 5px 10px" : "0px")} ;
  ul {
    list-style:none;
    display:flex; 
    flex-direction:column-reverse;
  }
`;
