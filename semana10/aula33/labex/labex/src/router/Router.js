import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "../SobrePage/AboutPage";
import HomePage from "../Components/HomePage/HomePage";
import ActivityPage from "../ActiviPage/ActivityPage";
import Lista from "../Components/ListaVi/ListTripsPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sobre/:linguagem">
          <AboutPage />
        </Route>
        <Route exact path="/application-form">
          <Lista />
        </Route>
        <Route exact path="/atividade/:id">
          <ActivityPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <div>Erro 404</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
