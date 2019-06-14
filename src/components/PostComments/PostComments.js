import React from 'react'
import { Link } from 'react-router-dom'

import avatar from '../../assets/img/avatar.png'

import { VoteScore } from '../VoteScore'
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
                        <VoteScore voteScore={comment.voteScore} id={comment.id} handleToggleVoteScore={handleToggleVoteScore}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComments