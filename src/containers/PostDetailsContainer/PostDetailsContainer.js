import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../assets/css/style.css'

import { PostComments } from '../../components/PostComments'
import { PostReplay } from '../../components/PostReplay'
import { PostContainer } from '../../containers/PostContainer'
import Header from '../../components/header/Header'

import { 
    loadPostsById, 
    loadCommentsByPostId, 
    handleToggleVoteScoreComments,
    handleToggleVoteScorePostItem,
    handleDeleteComment
} from '../../redux/actions/actions-creator'

class PostDetailsContainer extends Component {

    componentDidMount(){
        const postId = this.props.match.params.id
        this.props.loadPostsById(postId)
        this.props.loadCommentsByPostId(postId)
    }
    render(){
        const { 
            post, 
            comments, 
            handleToggleVoteScore, 
            handleToggleVoteScorePostItem,
            handleDeleteComment,
            loadPostsById
        } = this.props
        const postNotFound = post.id === undefined
        return (
            <div>
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">
                              {postNotFound && (
                                 <span>Ops, it seems this post not found!</span>
                              )}
                              {!postNotFound && (
                                <div className="col-md-8">
                                    <div className="section-row">   
                                        <PostContainer 
                                            key={post.id} 
                                            post={post} 
                                            handleToggleVoteScore={handleToggleVoteScorePostItem}
                                            commentsEnabled={false}
                                            editDeleteEnabled={true}
                                            linkPostDetailEnabled={false}
                                        />                 
                                    </div>
                                    <div className="section-row">
                                        <h2>Leave a reply</h2>
                                        <PostReplay postId={post.id} />
                                    </div>
                                    <div className="section-row">
                                        <div className="section-title">
                                            <h2>{`${post.commentCount} comments`}</h2>
                                        </div>
                                        {comments.map((comment) =>{
                                            return (
                                                <PostComments 
                                                    key={comment.id} 
                                                    comment={comment} 
                                                    handleToggleVoteScore={handleToggleVoteScore}
                                                    handleDeleteComment={handleDeleteComment}
                                                    loadPostsById={loadPostsById}
                                                />
                                            )
                                        })}
                                    </div> 
                                </div>
                              )}  
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

const mapStateToProps = ({ postReducer, commentsReducer }) =>{
    return {
        post: postReducer.post,
        comments: commentsReducer.comments
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadPostsById: (id) => dispatch(loadPostsById(id)),
        loadCommentsByPostId: (id) => dispatch(loadCommentsByPostId(id)),
        handleToggleVoteScore: (id, option) => dispatch(handleToggleVoteScoreComments(id, option)),
        handleToggleVoteScorePostItem: (id, option) => dispatch(handleToggleVoteScorePostItem(id, option)),
        handleDeleteComment: (id) => dispatch(handleDeleteComment(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PostDetailsContainer)