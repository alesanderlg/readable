import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import '../../assets/css/style.css'

import { VoteScore } from '../../components/VoteScore'
import { colorByCategory, formatDate } from '../../utils/readableUtils'
import { handleDeletePost } from '../../redux/actions/actions-creator'

class Post extends Component {
    render(){
        const { post, 
            handleToggleVoteScore, 
            editDeleteEnabled , 
            commentsEnabled, 
            linkPostDetailEnabled,
            dispatch
        } = this.props

        return (
            <div className="post post-row">
                <div className="card border-light h-60 shadow bg-white rounded">
                    <div className="card-body" style={{width:'730px'}}>
                        <div className="post-meta">
                            <span className={colorByCategory(post.category)}>{post.category}</span>
                            <span className="post-date">{formatDate(post.timestamp)}</span>
                            <h4 style={{float: 'right'}}>{`by ${post.author}`}</h4>
                        </div>
                        <h3 className="post-title">
                            {linkPostDetailEnabled && 
                                <Link to={`/${post.category}/${post.id}`}>{`${post.title}`}</Link>
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
                                    <Link to={`/edit/${post.id}`} className="post-category edit">Edit</Link>
                                    <Link to='/' onClick={() => dispatch(handleDeletePost(post.id))} className="post-category delete" >Delete</Link>
                                </div>
                            }
                            <VoteScore voteScore={post.voteScore} id={post.id} handleToggleVoteScore={handleToggleVoteScore} />                               
                        </div>
                    </div>
               </div>
            </div>  
        )
    }       
}

export default connect() (Post)