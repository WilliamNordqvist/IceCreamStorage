import React, { useEffect, useState } from "react";
import * as Styled from "./style";
import * as GlobalStyle from "../../globalStyle";
import StoreItem from "../../components/StoreItem";
// import data from "./test.json";
import firebase from '../../firebase/config'

const CustomerDash = () => {
 const [DBstores, setDBstores] = useState([]);

 const GetStores = () => {
  const itemsRef = firebase.database().ref('stores');
  let newArr = [];
  
    Object.entries(
    itemsRef.on('value', (snapshot) => {
      Object.entries(snapshot.val()).map((i) => {
        newArr = [...newArr, i[1]]
      })
      setDBstores(newArr)
    })
   )
}

useEffect(()=>{
  GetStores()
  
},[])
 
  return (
    <GlobalStyle.ContentContainer background="#457b9d">
      <h1> Ice Cream Stores </h1>

      <Styled.StoreItemContainer>
        {DBstores.length > 0 && DBstores.map((store) => (
          <StoreItem
            key={store.name}
            name={store.name}
            status={store.status}
            chairs={store.chairs}
            tables={store.tables}
          />
        ))}
      </Styled.StoreItemContainer>
      <button onClick={ () => console.log('test')}> FIREBASE </button>
    </GlobalStyle.ContentContainer>
  );
};

export default CustomerDash;
