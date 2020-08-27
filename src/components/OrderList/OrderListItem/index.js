import React from "react";
import * as Styled from "./style";
import { Divider } from "antd";

const OrderListItem = ({ order }) => {
  
  const {
    chairs,
    orderCompleted,
    orderCreated,
    orderID,
    status,
    storeName,
    tables,
  } = order;
  return (
    <Styled.OrderListItem>
      <Divider className="divider" orientation="left">
        {storeName}
      </Divider>

      <div className="conten">
        <p>{`Stolar: ${chairs}`}</p>
        <p>{`Bord: ${tables}`}</p>
        <p>{`Order-ID: ${orderID}`}</p>
        <p>{`Status: ${status}`}</p>
        <p>{`Skapad: ${orderCreated}`}</p>
        <p>{`Genomförd: ${orderCompleted}`}</p>
      </div>
    </Styled.OrderListItem>
  );
};

export default OrderListItem;
