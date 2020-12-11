import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LoginPage from "./components/login/login-page";
import RegisterPage from "./components/register/register-page";
import DashboardPage from "./components/dashboard/dashboard-page";

const Routes = (props) => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route
        to={{
          pathname: "/dashboard/:id",
          state: { loginStatus: false },
        }}
        component={DashboardPage}
      />
    </Switch>
  </Router>
);

export default Routes;
