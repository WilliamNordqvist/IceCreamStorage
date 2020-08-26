import React, { useContext } from "react";
import Icon from "../../icons";
import * as Styled from "./style";
import { GlobalContext } from "../../context/index";

const Storage = () => {
  let size = "40px";
  const {
    storage: {
      DBstorage: { tables, chairs },
    },
  } = useContext(GlobalContext);

  return (
    <Styled.StorageContainer>
      <div className="storageItem">
        <Icon type="table" size={size} />
        <p>{tables}</p>
      </div>

      <div className="storageItem">
        <Icon type="chair" size={size} />
        <p>{chairs}</p>
      </div>
    </Styled.StorageContainer>
  );
};

export default Storage;
