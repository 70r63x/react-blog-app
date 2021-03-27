import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from "./shared/Header";
import Footer from "./shared/Footer";

import Home from '../app/pages/Home';
import Pagina from '../app/pages/Pagina';
import Blog from '../app/pages/Blog';
import Formulario from '../app/pages/Formulario';
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
                <Route exact path="/formulario" component={Formulario} />

                <Route component={Error404} />
            </Switch>
            <Footer></Footer>
        </BrowserRouter>
        )
    }
}

export default Router;