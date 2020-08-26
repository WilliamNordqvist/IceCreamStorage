import React from "react";
import * as Styled from "./style";
import { Button, Typography } from "antd";
import Icon from '../../icons'

const Orderitem = ({ ConfirmOrder, order }) => {
  const { Title } = Typography;
  const { storeName, chairs, tables } = order


  return (
    <Styled.OrderItemContainer>
      <Title className="StoreName" level={3}>
        {storeName}
      </Title>
      <p> DATUM </p>

      <Styled.FlexItem>
        <div className="Icons">
          <div className="IconContainer">
            <Icon type="table" size="45px" />
            <p className="amount">{tables}</p>
          </div>
          <div className="IconContainer">
            <Icon type="chair" size="45px" />
            <p className="amount">{chairs}</p>
          </div>
        </div>
        <Button onClick={ () => ConfirmOrder() } > Bekräfta </Button>
      </Styled.FlexItem>
    </Styled.OrderItemContainer>
  );
};

export default Orderitem;
