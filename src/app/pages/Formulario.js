import React, { Component } from 'react';
import Sidebar from '../sections/Sidebar';
import Slider from '../sections/Slider';

class Formulario extends Component{

    userRef = {
        nombre: React.createRef(),
        apellido: React.createRef(),
        bio: React.createRef(),
        genero: React.createRef()
    }

    sendForm = (e) =>{
        e.preventDefault();

        var user = {
            nombre : this.userRef.nombre.current.value,
            apellido : this.userRef.apellido.current.value,
            bio : this.userRef.bio.current.value,
            genero : this.userRef.genero.current.value
        }

        console.log(user);
      }

    render(){
        
        return(
            <React.Fragment>
            <Slider title="Formulario Blog" size="slider-small"></Slider>

            <div className="center">
                <section id="content">
                    
                    <h1 className="subheader">Formulario</h1>

                    <form className="mid-form" onSubmit={this.sendForm}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" name="nombre" ref={this.userRef.nombre}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" ref={this.userRef.apellido}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Biografia</label>
                            <textarea name="bio" ref={this.userRef.bio}></textarea>
                        </div>

                        <div className="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" ref={this.userRef.genero}/> Hombre 
                            <input type="radio" name="genero" value="mujer" ref={this.userRef.genero}/> Mujer 
                            <input type="radio" name="genero" value="otro" ref={this.userRef.genero}/> Otro
                        </div>

                        <div className="clearfix"></div>

                        <input type="submit" value="Enviar" className="btn btn-success" />

                   </form>
                    

                </section>

                <Sidebar></Sidebar>
            </div>
            </React.Fragment>
        )
    }
}

export default Formulario;