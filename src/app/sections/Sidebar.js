import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Sidebar extends Component{

    busqueda = React.createRef();

    state = {
        buscar: '',
        redirect: false
    }

    buscar = (e) =>{
        e.preventDefault();

        if(this.busqueda.current.value){
            this.setState({
                buscar: this.busqueda.current.value,
                redirect: true
            })
        }
        
    }

    render(){

        if(this.state.redirect){
            return(
                <Redirect to={'/search-redirect/'+ this.state.buscar}></Redirect>
            )
        }
        
        return(
            <React.Fragment>
                <aside id="sidebar">
                    <div id="nav-blog" className="sidebar-item">
                        <h3>Puedes hacer esto</h3>
                        <a href="#" className="btn btn-success">Crear artículo</a>
                    </div>

                    <div id="search" className="sidebar-item">
                            <h3>Buscador</h3>
                            <p>Encuentra el artículo que buscas</p>
                            <form onSubmit={this.buscar}>
                                <input type="text" name="search" ref={this.busqueda}/>
                                <input type="submit" name="submit" value="Buscar" className="btn" />
                            </form>
                    </div>
                </aside>

                <div className="clearfix"></div>
            </React.Fragment>
        )
    }
}

export default Sidebar;