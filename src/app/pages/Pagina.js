import React, { Component } from 'react';
import Sidebar from '../sections/Sidebar';
import Slider from '../sections/Slider';

class Pagina extends Component{
    render(){
        
        return(
            <React.Fragment>
            <Slider title="Pagina"></Slider>

            <div className="center">
                <section id="content">
                    
                    <h1 class="subheader">Pagina de prueba</h1>

                    

                </section>

                <Sidebar></Sidebar>
            </div>
            </React.Fragment>
        )
    }
}

export default Pagina;