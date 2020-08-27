import React, { useState, useContext } from "react";
import * as Styled from "./style";
import { DownCircleOutlined, UpCircleOutlined } from "@ant-design/icons";
import ORderListItem from "./OrderListItem/";
import { GlobalContext } from "../../context";
import { Divider } from "antd";

const OrderList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    orders: { DBorders },
  } = useContext(GlobalContext);

  console.log(DBorders.reverse())

  return (
    <>
      <Divider className="divider" orientation="center">
        Orderlist
      </Divider>
      <Styled.OrderListContainer>
        <div className="iconContaine">
          {isOpen ? (
            <UpCircleOutlined onClick={() => setIsOpen(false)} />
          ) : (
            <DownCircleOutlined onClick={() => setIsOpen(true)} />
          )}
        </div>

        <Styled.OrderListConten isOpen={isOpen}>
          <ul>
            {DBorders
              ? DBorders.map((order) => (
                  <ORderListItem key={order.orderID} order={order} />
                ))
              : null}
          </ul>
        </Styled.OrderListConten>
      </Styled.OrderListContainer>
    </>
  );
};

export default OrderList;
