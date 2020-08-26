import React, { createContext, useState, useEffect } from "react";
import firebase from "../firebase/config";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [DBstores, setDBstores] = useState([]);
  const [DBstorage, setDBStorage] = useState({});
  const [DBorders, setDBorders] = useState([]);
  
  const [order, setOrder] = useState([]);

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
      res = snapshot.val()
      setDBStorage(res)
    })
    
  };

  const GetOrders = () => {
    let item
    let newArr
    const itemsRef = firebase.database().ref("orders");
  

    itemsRef.on("value", (snapshot) => {
      newArr = [];

      if(snapshot.val()){
        Object.entries(snapshot.val()).map((i) => {
          item = { ...i[1], orderID: i[0] };
          newArr = [...newArr, item];
        });
      }

      setDBorders(newArr)
    });

      
  }


  useEffect(() => {
    GetStores();
    GetStorage();
    if(GetOrders()){
      GetOrders();
    }
  }, []);
  
  return (
    <GlobalContext.Provider
      value={{
        orders: {
          DBorders,
        },
        store: {
          DBstores,
        },
        storage: {
          DBstorage,
        },
        actions:{
          order,
          setOrder,
        }
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
