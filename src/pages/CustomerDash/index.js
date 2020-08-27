import React, { useContext } from "react";
import { GlobalContext } from "../../context";
import * as Styled from "./style";
import * as GlobalStyle from "../../globalStyle";
import StoreItem from "../../components/StoreItem";
import Storage from "../../components/Storage";
import OrderList from "../../components/OrderList";
import { Divider } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const CustomerDash = () => {
  const {
    store: { DBstores },
  } = useContext(GlobalContext);

  return (
    <GlobalStyle.ContentContainer background="#B9DEED">
      <h1> Ice Cream Stores </h1>

      <Storage />

      <Divider className="divider" orientation="center">
        Butiker
      </Divider>

      <Styled.StoreItemContainer>
        {DBstores.length > 0 ? (
          DBstores.map((store) => <StoreItem key={store.name} store={store} />)
        ) : (
          <LoadingOutlined className="LoadingIcon" />
        )}
      </Styled.StoreItemContainer>

      {/* ORDERLISTA */}


      <OrderList />
    </GlobalStyle.ContentContainer>
  );
};

export default CustomerDash;
