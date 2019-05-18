import React from 'react'

import upVote from '../../assets/icons/arrow-up-30.png'
import downVote from '../../assets/icons/arrow-down-30.png'
import '../../assets/css/style.css'

import { Link } from 'react-router-dom'

const Post = () =>(
    <div className="post post-row">
        <div className="card border-light h-60 shadow bg-white rounded">
            <div className="card-body">
                <div className="post-meta">
                    <a className="post-category cat-2" href="category.html">React</a>
                    <span className="post-date">March 27, 2018</span>
                    <span style={{float: 'right'}}> by Alesander Lopes</span>
                </div>
                <h3 className="post-title">
                    <Link to='/postDetails'>Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</Link>
                </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                <div class="post-meta">
                    <a className="post-category comments" href="#">90 comments</a>
                    <Link to='/newPost' className="post-category edit" href="#">Edit</Link>
                    <a className="post-category delete" href="#">Delete</a>
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

export default Post