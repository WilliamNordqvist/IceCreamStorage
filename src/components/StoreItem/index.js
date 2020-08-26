import React, { useState, useEffect } from "react";
import * as Styled from "./style";
import Icon from "../../icons";
import { Button, Typography } from "antd";
import "antd/dist/antd.css";
import { sendOrder,getStoreStatus } from '../../helpers'

const StoreItem = ({ store }) => {
  // const {
  //   actions: { setOrder, order },
  // } = useContext(GlobalContext);

  const { Title } = Typography;
  const { name, tables, chairs, status } = store;
  const [isSummer, setSummer] = useState(true);

  useEffect(()=>{
    console.log('running')
    if(chairs && tables > 0){
      setSummer(true)
    } else {
      setSummer(false)
    }
  },[chairs,tables])
  
  return (
    <>
      <Styled.Box status={status}>
        <Title className="StoreName" level={3}>
          {name}
        </Title>
        <p className="status">{getStoreStatus(store)}</p>

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
              onClick={!isSummer ? () => sendOrder(store, 'add'): null}
              type={isSummer ? "primary" : null}
              ghost={isSummer ? false : true}
              size={"small"}
              disabled={store.status === "request sent" ? true : false}
            >
              Sommar
            </Button>
            <Button
              className={isSummer ? "GhostBtn" : "FilledBtn"}
              onClick={() => sendOrder(store, 'remove')}
              type={isSummer ? null : "primary"}
              ghost={isSummer ? true : false}
              size={"small"}
              disabled={store.status === "request sent" ? true : false}
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
