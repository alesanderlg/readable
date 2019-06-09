import React, { Fragment } from 'react'

const PostItem = () =>{
    return (
        <Fragment>
            <div className="post-body">
                <div className="post-meta">
                    <a className="post-category cat-2" href="category.html">JavaScript</a>
                    <span className="post-date">March 27, 2018</span>
                </div>
                <h3 className="post-title">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
            </div>
            <h4> by John Doe</h4>
        </Fragment>
    )
}

export default PostItem