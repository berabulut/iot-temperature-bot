import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginPage from "./components/login/login-page";
import RegisterPage from "./components/register/register-page";

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
    </Switch>
  </Router>
);

export default Routes;
