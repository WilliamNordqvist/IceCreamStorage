import React, { useContext } from "react";
import Icon from "../../icons";
import * as Styled from "./style";
import { PushStore } from "../../firebase/functions";
import data from "./testStorageDB.json";
import { GlobalContext } from "../../context/index";
import { LoadingOutlined } from "@ant-design/icons";

const Storage = () => {
  let size = "40px";
  const {
    storage: {
      DBstorage,
      DBstorage: { tables, chairs },
    },
  } = useContext(GlobalContext);

  console.log(DBstorage);

  return (
    <Styled.StorageContainer>
      {DBstorage.chairs >= 0 ? (
        <>
          <div className="storageItem">
            <Icon type="table" size={size} />
            <p>{tables}</p>
          </div>

          <div className="storageItem">
            <Icon type="chair" size={size} />
            <p>{chairs}</p>
          </div>
        </>
      ) : (
        <LoadingOutlined className="loadingIcon"/>
      )}
    </Styled.StorageContainer>
  );
};

export default Storage;
