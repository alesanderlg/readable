import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../assets/css/style.css'

import { PostComments } from '../../components/PostComments'
import { PostReplay } from '../../components/PostReplay'
import { TagsMenu } from '../../components/TagsMenu'
import { Post } from '../../components/Post'

import { 
    loadPostsById, 
    loadCommentsByPostId, 
    handleToggleVoteScoreComments,
    handleToggleVoteScorePostItem 
} from '../../redux/actions/actions-creator'

class PostDetailsContainer extends Component {

    componentDidMount(){
        console.log("this.props", this.props)
        const postId = this.props.match.params.id
        this.props.loadPostsById(postId)
        this.props.loadCommentsByPostId(postId)
    }
    render(){
        const { post, comments, handleToggleVoteScore, handleToggleVoteScorePostItem } = this.props
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="section-row">   
                                    <Post 
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
                                    <PostReplay />
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
                                            />
                                        )
                                    })}
                                </div>     
                            </div>
                            <div className="col-md-4">
                                <TagsMenu />
                            </div>
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
        handleToggleVoteScorePostItem: (id, option) => dispatch(handleToggleVoteScorePostItem(id, option))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PostDetailsContainer)