import styled from "styled-components";

export const OrderListItem = styled.li`
.divider {
  margin:5px 0;
}
.conten {
  display:flex;
  justify-content:space-between;
  @media only screen and (max-width: 600px) {
   flex-direction:column; 
  }
}
`;