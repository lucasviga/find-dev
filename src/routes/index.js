import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/app" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
