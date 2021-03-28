import React, { Component } from 'react';
import axios from "axios";
import environment from "../../environments/environments";
import "moment/locale/es";
import {Redirect} from "react-router-dom";
import Sidebar from '../sections/Sidebar';

class NewArticle extends Component{

    articleRef = {
        title: React.createRef(),
        content: React.createRef()
    }

    servidor = environment.server;
    state = {
        article: {},
        status: null,
        imagenSelect: null
    }

    changeState = () =>{
        this.setState({
            article: {
                title: this.articleRef.title.current.value,
                content: this.articleRef.content.current.value
            }
        })
    }

    fileChange = (event) => {
        this.setState({
            imagenSelect: event.target.files[0]
        })
    }

    sendForm = (e) =>{
        e.preventDefault();

        this.changeState();
        console.log("entre");

        axios.post(this.servidor+"/save/", this.state.article)
        .then(resp =>{
            console.log(resp);
            if(resp.data.article){
                this.setState({
                    article: resp.data.article,
                    status: 'waiting'
                })

                if(this.state.imagenSelect !== null){
                    var articleId = this.state.article._id

                    const formData = new FormData();

                    formData.append(
                        'file0',
                        this.state.imagenSelect,
                        this.state.imagenSelect.name
                    )

                    axios.post(this.servidor+'/upload-image/'+articleId, formData)
                    .then(resp =>{
                        if(resp.data.article){
                            this.setState({
                                article: resp.data.article,
                                status: resp.data.status
                            })
                        }else{
                            this.setState({
                                status: resp.data.status
                            })
                        }
                    })
                }else{
                    this.setState({
                        status: resp.data.status
                    })
                }
            }else{
                this.setState({
                    status: resp.data.status
                })
            }
        });
    }

    render(){

        if(this.state.status === 'success'){
            return <Redirect to="/blog"></Redirect>
        }

        return(
            <React.Fragment>

            <div className="center">
                <section id="content">
                    
                    <h1 className="subheader">Crear articulo</h1>

                    <form className="mid-form" onSubmit={this.sendForm}>
                        <div className="form-group">
                            <label htmlFor="title">Titulo</label>
                            <input type="text" name="title" required ref={this.articleRef.title} onChange={this.changeState}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Contenido</label>
                            <textarea name="content" required ref={this.articleRef.content} onChange={this.changeState}></textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="title">Imagen</label>
                            <input type="file" name="imgInput"onChange={this.fileChange}/>
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

export default NewArticle;