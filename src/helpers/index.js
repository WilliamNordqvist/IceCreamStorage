import { PushToDB, UpdateDB } from "../firebase/functions";

export const sendOrder = (store, type) => {
  let newOrder;
  let updateObj = {};

  switch (type) {
    case "add":
      updateObj = {
        tables: 10,
        chairs:20,
      };
      break;
    case "remove":
      updateObj = {
        tables: -store.tables,
        chairs: -store.chairs,
      };
      break;
    default:
      updateObj = null;
  }


  newOrder = {
    ...store,
    ...updateObj,
    storeID: store.id,
    storeName: store.name,
    status: "request sent",
  };

  delete newOrder.id;
  delete newOrder.name;

  if (type === "add" || type === "remove") {
    PushToDB("orders", newOrder);
    UpdateDB("stores", store.id, { status: "request sent" });
  } else {
    console.log("specify type in SendOrder functions");
  }
};

export const getStoreStatus = (store) => {
  let text;
  const { status } = store;

  switch (status) {
    case "open":
      text = "Sommaröppet";
      break;
    case "request sent":
      text = "Leverans skickad";
      break;
    case "closed":
      text = "Vinterstängt";
      break;
    default:
      text = null;
  }

  return text;
};

export const ConfirmOrder = (order, DBstores, DBstorage) => {
  let findStore = DBstores.filter((store) => store.id === order.storeID)[0];
  let newChairs = order.chairs + findStore.chairs;
  let newTables = order.tables + findStore.tables;
  let changStatus = newChairs && newTables >= 0 ? "open" : "closed";

  let storeUpdatedObj = {
    chairs: newChairs,
    tables: newTables,
    status: changStatus,
  };

  let orderUpdateObj = {
    ...order,
    status: "completed",
  };

  let storageUpdateObj = {
    chairs: DBstorage.chairs - order.chairs,
    tables: DBstorage.tables - order.tables,
  };

  UpdateDB("stores", order.storeID, storeUpdatedObj);
  UpdateDB("orders", order.orderID, orderUpdateObj);
  UpdateDB("storage", null, storageUpdateObj);
};
