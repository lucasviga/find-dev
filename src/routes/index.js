import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
