import React, { Component } from 'react';
import Sidebar from '../sections/Sidebar';
import Slider from '../sections/Slider';
import Articles from '../sections/Articles';

class Blog extends Component{

    render(){
        
        return(
            <React.Fragment>
            <Slider title="Blog" size="slider-small"></Slider>

            <div className="center">
                <section id="content">
                    
                    <h1 className="subheader">Blog</h1>

                    <Articles></Articles>

                </section>

                <Sidebar></Sidebar>
            </div>
            </React.Fragment>
        )
    }
}

export default Blog;