import React, { Component } from 'react'
import '../../assets/css/style.css'

import CategoriesMenu from '../CategoriesMenu/CategoriesMenu'
import Post from '../PostDetails/PostDetails'
import HeaderPosts from '../HeaderPosts/HeaderPosts'

class Posts extends Component{
    render(){
        return(
        <div class="section">
          <div class="container">
              <div class="row">	
                  <div class="col-md-8">
                      <div class="row">
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