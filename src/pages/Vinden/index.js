import React, { useContext } from "react";
// import * as Styled from './style'
import * as GlobalStyle from '../../globalStyle'
import { UpdateStore } from '../../firebase/functions'
import { GlobalContext } from "../../context/index";


const Vinden = () => {
  // const { store:{test, DBstores, SetStores, setDBstores} } = useContext(GlobalContext)
  
  
  return (
    <GlobalStyle.ContentContainer background="#a8dadc">
      <h1> Vinden Dashboard </h1>
      <button onClick={() => UpdateStore()} > FIRABSE </button>
    </GlobalStyle.ContentContainer>
  );
};

export default Vinden;
