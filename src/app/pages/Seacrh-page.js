import React, { Component } from 'react';
import Sidebar from '../sections/Sidebar';
import Slider from '../sections/Slider';
import Articles from '../sections/Articles';

class Search extends Component{

    render(){
        var busqueda = this.props.match.params.id;

        return(
            <React.Fragment>
            <Slider title={"Busqueda: "+ busqueda} size="slider-small"></Slider>

            <div className="center">
                <section id="content">
                    
                    <h1 className="subheader">Articulos encontrados</h1>

                    <Articles accion='search' search={busqueda}></Articles>

                </section>

                <Sidebar></Sidebar>
            </div>
            </React.Fragment>
        )
    }
}

export default Search;