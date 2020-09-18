import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "../screens/AboutPage/AboutPage";
import HomePage from "../screens/HomePage/HomePage";
import ActivityPage from "../screens/ActivityPage/ActivityPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sobre/:linguagem">
          <AboutPage />
        </Route>
        <Route exact path="/atividade/:id">
          <ActivityPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <div>Eita Giovanna, o forninho caiu (404)</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
