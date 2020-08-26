import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import * as Styled from "./style";
import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import Vinden from "./Vinden";
import CustomerDash from "./CustomerDash";

const App = () => {
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
        <NavLink exact={true} to="/" activeClassName="active">
          <Button size="large">Huvudsida</Button>
        </NavLink>
        <NavLink to="/vinden" activeClassName="active">
          <Button size="large">Vinden</Button>
        </NavLink>
      </Footer>
    </Styled.MainContainer>
  );
};

export default App;
