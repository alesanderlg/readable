import React from 'react'

import upVote from '../../assets/icons/arrow-up-30.png'
import downVote from '../../assets/icons/arrow-down-30.png'
import '../../assets/css/style.css'

const PostDetail = () =>(

    <div class="post post-row">
        <div class="card border-light h-60 shadow bg-white rounded">
            <div class="card-body">
                <div class="post-meta">
                    <a class="post-category cat-2" href="category.html">React</a>
                    <span class="post-date">March 27, 2018</span>
                    <span style={{float: 'right'}}> by Alesander Lopes</span>
                </div>
                <h3 class="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                <div class="post-meta">
                    <a class="post-category comments" href="#">90 comments</a>
                    <a class="post-category edit" href="#">Edit</a>
                    <a class="post-category delete" href="#">Delete</a>
                    <div style={{float: 'right'}}>
                        <span>Vote</span>
                        <a href="#"><img src={upVote} alt=""/></a>
                        <span> 90</span>
                        <a href="#"><img src={downVote} alt=""/></a>  
                    </div>                               
                </div>
            </div>
        </div>
   </div>  
)

export default PostDetail