import React from 'react';
import axios from "axios";
import environment from "../../environments/environments";

const ArticleService = () => {

    const getArticles = (last = null) => {
        var articles = 'articles';
        if(last != null){
          articles = 'articles/true'
        }

        return axios.get(environment.server+"/"+articles);
    }
      
    return getArticles()
}

export default ArticleService;