import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Header from "./shared/Header";
import Footer from "./shared/Footer";

import Home from '../app/pages/Home';
import Pagina from '../app/pages/Pagina';
import Blog from '../app/pages/Blog';
import Formulario from '../app/pages/Formulario';
import Search from "../app/pages/Seacrh-page";
import ArticleDetail from "../app/pages/Article-detail";
import NewArticle from "../app/pages/New-article";
import EditArticle from "../app/pages/Edit-article";
import Error404 from '../app/pages/Error404';

class Router extends Component{
    render(){
        return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pagina" component={Pagina} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:id" component={ArticleDetail} />
                <Route exact path="/search/:id" component={Search} />
                <Route exact path="/search-redirect/:id" render={
                    (props) =>{
                        return(
                        <Redirect to={'/search/'+ props.match.params.id}></Redirect>
                        )
                    }
                }/>
                <Route exact path="/formulario" component={Formulario} />
                <Route exact path="/crear-articulo" component={NewArticle} />
                <Route exact path="/editar-articulo/:id" component={EditArticle} />

                <Route component={Error404} />
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
        )
    }
}

export default Router;