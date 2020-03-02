import React from "react";
import { Demo } from "./pages/demo";
import { Home } from "./pages/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactDOM from "react-dom";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/demo">
          <Demo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<Router />, document.getElementById("root"));
