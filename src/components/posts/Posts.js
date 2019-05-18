import React, { Component } from 'react'
import '../../assets/css/style.css'

import CategoriesMenu from '../CategoriesMenu/CategoriesMenu'
import Post from '../Post/Post'
import HeaderPosts from '../HeaderPosts/HeaderPosts'

class Posts extends Component{
    render(){
        return(
        <div className="section">
          <div className="container">
              <div className="row">	
                  <div className="col-md-8">
                      <div className="row">
                          <HeaderPosts/>  
                          <Post/>
                      </div>
                  </div>
                  <CategoriesMenu/>
              </div>
          </div>
        </div>
        )
    }
}

export default Posts