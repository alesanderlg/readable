import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/style.css'

import { VoteScore } from '../VoteScore'
import { colorByCategory, formatDate } from '../../utils/CommonUtils'

const Post = ({ 
        post, 
        handleToggleVoteScore, 
        editDeleteEnabled , 
        commentsEnabled, 
        linkPostDetailEnabled }) => {

        return (
            <div className="post post-row">
                <div className="card border-light h-60 shadow bg-white rounded">
                    <div className="card-body" style={{width:'730px'}}>
                        <div className="post-meta">
                            <a className={colorByCategory(post.category)} href="category.html">{post.category}</a>
                            <span className="post-date">{formatDate(post.timestamp)}</span>
                            <h4 style={{float: 'right'}}>{`by ${post.author}`}</h4>
                        </div>
                        <h3 className="post-title">
                            {linkPostDetailEnabled && 
                                <Link to={`/postDetails/${post.id}`}>{`${post.title}`}</Link>
                            }
                            {!linkPostDetailEnabled && 
                                `${post.title}`
                            }
                        </h3>
                        <p>{post.body}</p>
                        <div className="post-meta">
                            {commentsEnabled && 
                                <span style={{'marginRight': '15px'}}>{`${post.commentCount} comments`}</span>
                            }
                            {editDeleteEnabled &&
                                <div className='editDelete'>
                                    <Link to='/newPost' className="post-category edit">Edit</Link>
                                    <Link to='/' className="post-category delete">Delete</Link>
                                </div>
                            }
                            <VoteScore voteScore={post.voteScore} id={post.id} handleToggleVoteScore={handleToggleVoteScore} />                               
                        </div>
                    </div>
               </div>
            </div>  
        )
}

export default Post