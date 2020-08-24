import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import * as Styled from "./style";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import Vinden from "./Vinden";
import CustomerDash from "./CustomerDash";


const App = () => {
  const [buttonColor, setButtonColor] = useState("huvudsida");


  const { Footer } = Layout;
  return (
    <Styled.MainContainer>
      <div className="content">
        <Switch>
          <Route path="/" component={CustomerDash} exact />
          <Route path="/vinden" component={Vinden} />
        </Switch>
      </div>

      <Footer>
        <Link to="/" onClick={() => setButtonColor("huvudsida")}>
          <Button
            ghost={buttonColor === "huvudsida" ? false : true}
            type={buttonColor === "huvudsida" ? "primary" : null}
            size="large"
          >
            Huvudsida
          </Button>
        </Link>
        <Link to="/vinden" onClick={() => setButtonColor("vinden")}>
          <Button
            ghost={buttonColor === "vinden" ? false : true}
            type={buttonColor === "vinden" ? "primary" : null}
            size="large"
          >
            Vinden
          </Button>
        </Link>
      </Footer>
    </Styled.MainContainer>
  );
};

export default App;
