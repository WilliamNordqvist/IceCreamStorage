import React, { useState, useContext } from "react";
import * as Styled from "./style";
import Icon from "../../icons";
import { Button, Typography } from "antd";
import "antd/dist/antd.css";
import { GlobalContext } from "../../context";
import { UpdateStore } from '../../firebase/functions'


const StoreItem = ({ store }) => {
  const {
    actions: { setStore, selectedStore },
  } = useContext(GlobalContext);

  const { Title } = Typography;
  const { name, tables, chairs, status } = store;
  const [isSummer, setSummer] = useState(true);

  const summer = (store) => {
    let removeFurniture;
    removeFurniture = {
      ...store,
      tables: +store.tables,
      chairs: +store.chairs,
    };
    setStore(removeFurniture)
    setSummer(true);
    console.log(removeFurniture);
    // UpdateStore('store', store.id).update({ status: "request sent" });
  };

  return (
    <>
      <Styled.Box status={status}>
        <Title className="StoreName" level={3}>
          {name}
        </Title>
        <p className="status">Sommaröppet</p>

        <Styled.FlexItem>
          <div className="Icons">
            <div className="IconContainer">
              <Icon type="table" size="30px" />
              <span className="amount">{tables}</span>
              <span className="add">+</span> <span className="remove">-</span>
            </div>
            <div className="IconContainer">
              <Icon type="chair" size="30px" />
              <span className="amount">{chairs}</span>
              <span className="add">+</span> <span className="remove">-</span>
            </div>
          </div>

          <div className="Buttons">
            <Button
              className={isSummer ? "FilledBtn" : "GhostBtn"}
              onClick={() => summer(store)}
              type={isSummer ? "primary" : null}
              ghost={isSummer ? false : true}
              size={"small"}
            >
              Sommar
            </Button>
            <Button
              className={isSummer ? "GhostBtn" : "FilledBtn"}
              onClick={() => setSummer(false)}
              type={isSummer ? null : "primary"}
              ghost={isSummer ? true : false}
              size={"small"}
            >
              Vinter
            </Button>
            <Button type="primary" danger size={"small"}>
              Radera
            </Button>
          </div>
        </Styled.FlexItem>
      </Styled.Box>
    </>
  );
};

export default StoreItem;
