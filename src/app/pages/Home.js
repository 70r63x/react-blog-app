import React, { Component } from 'react';
import Sidebar from '../sections/Sidebar';
import Slider from '../sections/Slider';
import Articles from '../sections/Articles';

class Home extends Component{
    render(){
        
        return(
            <React.Fragment>
            <Slider title="Bienvenido al Blog practico con React y NodeJS (Express)" size="slider-big"></Slider>

            <div className="center">
                <section id="content">
                    
                    <h2 className="subheader">Últimos artículos</h2>

                    <Articles accion='limit'></Articles>

                </section>

                <Sidebar></Sidebar>
            </div>
            </React.Fragment>
        )
    }
}

export default Home;