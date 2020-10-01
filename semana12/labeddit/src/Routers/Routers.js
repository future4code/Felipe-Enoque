import React from 'react';
import { Switch, Route } from 'react-router-dom'
import CadastroPage from '../Telas/CadastroPage/CadastroPage';
import FeedPage from '../Telas/FeedPage/FeedPage';
import LoginPage from '../Telas/LoginPage/LoginPage';
import PostPage from '../Telas/PostPage/PostPage';
import ErroPage  from '../Telas/ErroPage/ErroPage';

const Routers = (props) => {
  return (
    <div>
        <Switch>
            <Route exact path="/">
                <LoginPage/>
            </Route>
            <Route exact path="/Login">
                <LoginPage setBotaoSair={props.setBotaoSair}/>
            </Route>
            <Route exact path="/cadastro">
                <CadastroPage setBotaoSair={props.setBotaoSair}/>
            </Route>
            <Route exact path="/Feed">
                <FeedPage/>
            </Route>
            <Route exact path="/Post">
                <PostPage/>
            </Route>
            <Route>
                <ErroPage/>
            </Route>
        </Switch>        
    </div>
  );
}
export default Routers;