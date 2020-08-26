import React, { useContext } from "react";
import * as Styled from "./style";
import * as GlobalStyle from "../../globalStyle";
import { UpdateDB } from "../../firebase/functions";
import { GlobalContext } from "../../context/index";
import Storage from "../../components/Storage";
import Orderitem from "../../components/OrderItem";
import { Divider } from "antd";
import { ConfirmOrder } from '../../helpers'


const Vinden = () => {
  let unCompletedOrders = []

  const {
    store: { DBstores },
    orders: { DBorders },
    storage: { DBstorage }, 
  } = useContext(GlobalContext);



  const temp = () => {
    DBstores.forEach((store) => {
      UpdateDB("stores", store.id, { status: "open" });
    });
  };

   unCompletedOrders =  DBorders && DBorders.filter( order => order.status !== 'completed')

  return (
    <GlobalStyle.ContentContainer background="#a8dadc">
      <h1> Vinden Dashboard </h1>
      <Storage />
      <Divider className="divider" orientation="right">
        Orders
      </Divider>
      <Styled.OrdersContainer>
        {unCompletedOrders &&
          unCompletedOrders.map((order) => (
            <Orderitem
              key={order.orderID}
              order={order}
              ConfirmOrder={() => ConfirmOrder(order, DBstores, DBstorage)}
            />
          ))}
        ;
      </Styled.OrdersContainer>
      <button onClick={() => temp()}> FIRABSE </button>
    </GlobalStyle.ContentContainer>
  );
};

export default Vinden;
