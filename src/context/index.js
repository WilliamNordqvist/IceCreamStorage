import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/config";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [DBstores, setDBstores] = useState([]);
  const [DBstorage, setDBStorage] = useState([]);
  const [selectedStore, setStore] = useState([]);

  const GetStores = () => {
    const itemsRef = firebase.database().ref("stores");
    let newArr;
    let item;

    itemsRef.on("value", (snapshot) => {
      newArr = [];
      Object.entries(snapshot.val()).map((i) => {
        item = { ...i[1], id: i[0] };
        newArr = [...newArr, item];
      });
      setDBstores(newArr);
    });
  };

  const GetStorage = () => {
    let res
    const itemsRef = firebase.database().ref("storage");
    itemsRef.on("value", (snapshot) => {
      res = Object.entries(snapshot.val())
      setDBStorage(res[0][1])
    })
  };


  useEffect(() => {
    GetStores();
    GetStorage();
  }, []);

  // console.log(DBstorage)
  return (
    <GlobalContext.Provider
      value={{
        store: {
          DBstores,
        },
        storage: {
          DBstorage,
        },
        actions:{
          selectedStore,
          setStore,
        }
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
