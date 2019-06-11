import React from 'react'
import { Link } from 'react-router-dom'

import upVote from '../../assets/icons/arrow-up-30.png'
import downVote from '../../assets/icons/arrow-down-30.png'
import '../../assets/css/style.css'

import { colorByCategory, formatDate } from '../../utils/CommonUtils'

const UPVOTE = 'upVote'
const DOWNVOTE = 'downVote'

const Post = ({ post, handleToggleVoteScore }) => {
        return (
            <div className="post post-row">
                <div className="card border-light h-60 shadow bg-white rounded">
                    <div className="card-body" style={{width:'730px'}}>
                        <div className="post-meta">
                            <a className={colorByCategory(post.category)} href="category.html">{post.category}</a>
                            <span className="post-date">{formatDate(post.timestamp)}</span>
                            <span style={{float: 'right'}}> {`by ${post.author}`}</span>
                        </div>
                        <h3 className="post-title">
                            <Link to={`/postDetails/${post.id}`}>{`${post.title}`}</Link>
                        </h3>
                        <p>{post.body}</p>
                        <div className="post-meta">
                            <span style={{'marginRight': '15px'}}>{`${post.commentCount} comments`}</span>
                            <div style={{float: 'right'}}>
                                <span>Vote</span>
                                <button className='btn btn-link' onClick={() => handleToggleVoteScore(post.id, UPVOTE)}>
                                    <img src={upVote} alt=""/>
                                </button>
                                <span>{post.voteScore}</span>
                                <button className='btn btn-link' onClick={() => handleToggleVoteScore(post.id, DOWNVOTE)}>
                                    <img src={downVote} alt=""/>
                                </button>  
                            </div>                               
                        </div>
                    </div>
               </div>
            </div>  
        )
}

export default Post