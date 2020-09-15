import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/homePage/Home";
import ListaViagem from "../components/listaViagens/listaViagens";
import Login from "../components/login/login";
import DetalheViagem from "../components/detalheViagem/detalheViagem";
import FormViagem from "../components/novaViagem";


const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/application-form">
            <FormViagem />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/trips/create">
            <HomePage />
          </Route>
          <Route exact path="/trips/list">
            <ListaViagem />
          </Route>
          <Route exact path="/trips/details">
            <DetalheViagem />
          </Route>
          <Route>
            <h1>Erro 404</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };
  export default Router;