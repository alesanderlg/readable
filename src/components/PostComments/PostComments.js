import React from 'react'
import { Link } from 'react-router-dom'

import avatar from '../../assets/img/avatar.png'
import upVote from '../../assets/icons/arrow-up-30.png'
import downVote from '../../assets/icons/arrow-down-30.png'

import { formatDate } from '../../utils/CommonUtils'

const PostComments = ({ comment, handleToggleVoteScore}) =>{
    return (
        <div className="card border-light h-60 shadow bg-white rounded" style={{'marginBottom': '15px'}}>
            <div className="card-body" style={{width:'730px'}}>
                <div className="post-comments">
                    <div className="media">
                        <div className="media-left">
                            <img className="media-object" src={avatar} alt=""/>
                        </div>
                        <div className="media-body">
                            <div className="media-heading">
                            <h4>{comment.author}</h4>
                                <span className="time">{formatDate(comment.timestamp)}</span>
                            </div>
                            <p>{comment.body}</p>
                        </div>
                    </div>
                    <div className='post-meta' >             
                        <Link to='/newPost' className="post-category edit">Edit</Link>
                        <Link to='/' className="post-category delete">Delete</Link>
                        <div style={{float: 'right'}}>
                            <span>Vote</span>
                            <button className='btn btn-link' onClick={() => handleToggleVoteScore(comment.id, 'upVote', 'comments')} >
                                <img src={upVote} alt=""/>
                            </button>
                            <span>{comment.voteScore}</span>
                            <button className='btn btn-link' onClick={() => handleToggleVoteScore(comment.id, 'downVote', 'comments')}>
                                <img src={downVote} alt=""/>
                            </button>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComments