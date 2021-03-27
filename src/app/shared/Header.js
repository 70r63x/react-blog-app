import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/images/react.svg';

class Header extends Component{
    render(){
        
        return(
        <header id="header">
            <div className="center">
                {/*  */}
                <div id="logo">
                    <img src={Logo} className="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>React</strong> Blog
                    </span>
                </div>
                
                {/* <!-- MENU --> */}
                <nav id="menu">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="menuActive">Inicio</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Blog" activeClassName="menuActive">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formulario" activeClassName="menuActive">Formulario</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pagina" activeClassName="menuActive">Pagina 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/pagina" activeClassName="menuActive">Pagina 2</NavLink>
                        </li>                            
                    </ul>
                </nav>

                {/* <!--LIMPIAR FLOTADOS--> */}
                <div className="clearfix"></div>
            </div>
        </header>
        );
    }
}

export default Header;