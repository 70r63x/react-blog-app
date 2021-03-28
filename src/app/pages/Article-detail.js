import React, { Component } from 'react';
import axios from "axios";
import environment from "../../environments/environments";
import Moment from "react-moment";
import "moment/locale/es";
import Sidebar from '../sections/Sidebar';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class ArticleDetail extends Component{

    servidor = environment.server;
    state =  {
        dataArticle: {},
        status: null
    }

    componentDidMount(){
        this.getArticle();
    }

    getArticle = () =>{
        var id = this.props.match.params.id;
        axios.get(this.servidor+"/article/"+id)
        .then(resp =>{
            console.log(resp.data);
            this.setState({
                dataArticle: resp.data.article,
                status: resp.data.status
            })
        });
    }

    deletArticle = (idArticle) =>{
        axios.delete(this.servidor+"/article/"+idArticle)
        .then(resp =>{
            this.setState({
                dataArticle: resp.data.article,
                status: 'deleted'
            })
        })
    }

    render(){
        if(this.state.status === 'deleted'){
            return <Redirect to="/blog"></Redirect>
        }
        return(
            <React.Fragment>
            <div className="center">
                <section id="content">
                    
                    <article className="article-item article-detail">
                        <div className="image-wrap">
                        {this.state.dataArticle.image ? 
                            (<img src={this.servidor +'/get-image/'+ this.state.dataArticle.image} alt={this.state.dataArticle.title} />)
                            :
                            (<img src={this.servidor +'/get-image/no-image.jpg'} alt={this.state.dataArticle.title} />)
                            }
                        </div>
    
                        <h1 className="subheader">{this.state.dataArticle.title}</h1>
                        <span className="date">
                            <Moment fromNow>{this.state.dataArticle.date}</Moment>
                        </span>
                        <p>
                        {this.state.dataArticle.content}
                        </p>

                        <Link to={'/editar-articulo/'+this.state.dataArticle._id} className="btn btn-success">Editar</Link>
                        <a onClick={
                            () =>{
                                this.deletArticle(this.state.dataArticle._id)
                            }
                            } className="btn btn-success">Borrar</a>

                        <div className="clearfix"></div>
                    </article>

                </section>

                <Sidebar></Sidebar>
            </div>
            </React.Fragment>
        )
    }
}

export default ArticleDetail;