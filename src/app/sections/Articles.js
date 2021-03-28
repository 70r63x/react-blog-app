import React, { Component } from 'react';
import axios from "axios";
import environment from "../../environments/environments";
import Moment from "react-moment";
import "moment/locale/es";
import {Link} from "react-router-dom";

class Articles extends Component{

    servidor = environment.server;
    state = {
        articles: [],
        status: null
    }

    componentDidMount(){
        var props = this.props.accion;
        var search = this.props.search;

        if(props === 'limit'){
            this.getArticles('yes');
        }else if(props === 'search'){
            this.getSearch(search);
        }else {
            this.getArticles();
        }
        
    }

    getArticles = (limit = null) =>{
        var articles = 'articles';
        if(limit === 'yes'){
        articles = 'articles/true'
        }

        axios.get(this.servidor+"/"+articles)
        .then(resp =>{
            console.log(resp.data);
            this.setState({
                articles: resp.data.articles,
                status: resp.data.status
            })
        });
    }

    getSearch = (busqueda) => {
        axios.get(this.servidor+"/search/"+busqueda)
        .then(resp =>{
            console.log(resp.data);
            if(resp.data.status === 'success'){
                this.setState({
                    articles: resp.data.articles,
                    status: resp.data.status
                })
            }else{
                console.log("Error al consultar data")
                this.setState({
                    articles: [],
                    status: resp.data.status
                })
            }
            
        });
    }

    render(){
        if(this.state.articles.length >= 1){

            var listArticles = this.state.articles.map((article, i) => {
                return(
                    <article className="article-item" id="article-template" key={i}>
                        <div className="image-wrap">
                            {article.image ? 
                            (<img src={this.servidor +'/get-image/'+ article.image} alt={article.title} />)
                            :
                            (<img src={this.servidor +'/get-image/no-image.jpg'} alt={article.title} />)
                            }
                        </div>
    
                        <h2>{article.title}</h2>
                        <span className="date">
                            <Moment fromNow>{article.date}</Moment>
                        </span>
                        <Link to={'blog/'+ article._id}>Leer más</Link>
    
                        <div className="clearfix"></div>
                    </article>
                )
            })

            return(
                <div id="articles">
                    {listArticles}
                </div>
            )
        }else if(this.state.articles.length === 0){
            return(
                <div className="loading">
                    No hay articulos disponibles con la busqueda
                </div>
            )
        }else{
            return(
                <div className="loading">
                    Cargando...
                </div>
            )
        }
        
    }
}

export default Articles;