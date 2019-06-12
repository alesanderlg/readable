import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/style.css'
import upVote from '../../assets/icons/arrow-up-30.png'
import downVote from '../../assets/icons/arrow-down-30.png'

import { colorByCategory, formatDate } from '../../utils/CommonUtils'


const PostItem = ({ post, handleToggleVoteScorePostItem }) =>{
    return (
        <Fragment>
            <div className="post-body">
                <div className="post-meta">
                    <a className={colorByCategory(post.category)} href="category.html">{post.category}</a>
                    <span className="post-date">{formatDate(post.timestamp)}</span>
                </div>
                <h3 className="post-title" style={{'marginTop': '15px'}}>{post.title}</h3>
                <p>{post.body}</p>
            </div>
            <div className="post-meta">
                <h4>{`by ${post.author}`}</h4>
                <Link to='/newPost' className="post-category edit">Edit</Link>
                <Link to='/' className="post-category delete">Delete</Link>
                <div style={{float: 'right'}}>
                    <span>Vote</span>
                    <button className='btn btn-link' onClick={() => handleToggleVoteScorePostItem(post.id, 'upVote')}>
                        <img src={upVote} alt=""/>
                    </button>
                    <span>{post.voteScore}</span>
                    <button className='btn btn-link' onClick={() => handleToggleVoteScorePostItem(post.id, 'downVote')}>
                        <img src={downVote} alt=""/>
                    </button>  
                </div>
            </div>
            
        </Fragment>
    )
}

export default PostItem