import React from 'react'

import upVote from '../../assets/icons/arrow-up-30.png'
import downVote from '../../assets/icons/arrow-down-30.png'
import '../../assets/css/style.css'

import { Link } from 'react-router-dom'

const Post = (props) =>(
    <div className="post post-row">
        <div className="card border-light h-60 shadow bg-white rounded">
            <div className="card-body" style={{width:'730px'}}>
                <div className="post-meta">
                    <a className={colorByCategory(props.post.category)} href="category.html">{props.post.category}</a>
                    <span className="post-date">{formatDate(props.post.timestamp)}</span>
                    <span style={{float: 'right'}}> {`by ${props.post.author}`}</span>
                </div>
                <h3 className="post-title">
                    <Link to='/postDetails'>{`${props.post.title}`}</Link>
                </h3>
                <p>{props.post.body}</p>
                <div className="post-meta">
                    <a className="post-category comments" href="#">{`${props.post.commentCount} comments`}</a>
                    <Link to='/newPost' className="post-category edit" href="#">Edit</Link>
                    <a className="post-category delete" href="#">Delete</a>
                    <div style={{float: 'right'}}>
                        <span>Vote</span>
                        <a href="#"><img src={upVote} alt=""/></a>
                        <span>{props.post.voteScore}</span>
                        <a href="#"><img src={downVote} alt=""/></a>  
                    </div>                               
                </div>
            </div>
        </div>
   </div>  
)

const formatDate = (date) =>{
    return new Date(date).toDateString()
}

const colorByCategory = (category) =>{
    switch(category){
        case 'react':
            return 'post-category cat-2'
        case 'redux':
            return 'post-category cat-3'
        case 'udacity':
            return 'post-category cat-4'
        default:
        return 'post-category cat-1'
    }
}

export default Post