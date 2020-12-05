import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import RegisterPage from "./components/register/register";

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={RegisterPage} />
    </Switch>
  </Router>
);

export default Routes;
