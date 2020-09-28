import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import CadastroPage from '../Telas/CadastroPage/CadastroPage';
import FeedPage from '../Telas/FeedPage/FeedPage';
import LoginPage from '../Telas/LoginPage/LoginPage';
import PostPage from '../Telas/PostPage/PostPage';



function Routers() {
  return (
    <div>
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
            <Route exact path="/Login">
                <LoginPage/>
            </Route>
            <Route exact path="/cadastro">
                <CadastroPage/>
            </Route>
            <Route exact path="/Feed">
                <FeedPage/>
            </Route>
            <Route exact path="/Post">
                <PostPage/>
            </Route>
            <Route>
                <p>ERRO</p>
            </Route>
        </Switch>
    </BrowserRouter>    
    </div>
  );
}

export default Routers;