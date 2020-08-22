import React, { useState } from "react";
import * as Styled from "./style"
import Icon from "../../icons";
import { Button, Typography } from "antd";
import "antd/dist/antd.css";

const StoreItem = ({ name, tables, chairs, status }) => {
  const { Title } = Typography;

  const [isSummer, setSummer] = useState(true);

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
              <Icon type="table" size="30px" />{" "}
              <span className="amount">{tables}</span>
              <span className="add">+</span> <span className="remove">-</span>
            </div>
            <div className="IconContainer">
              <Icon type="chair" size="30px" />{" "}
              <span className="amount">{chairs}</span>
              <span className="add">+</span> <span className="remove">-</span>
            </div>
          </div>

          <div className="Buttons">
            <Button
              onClick={() => setSummer(true)}
              type={isSummer ? "primary" : null}
              ghost={isSummer ? false : true}
              size={"small"}
            >
              Sommar
            </Button>
            <Button
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
