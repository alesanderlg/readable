import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import '../../assets/css/style.css'

import { CategoriesMenu } from '../../components/CategoriesMenu'
import { Post } from '../../components/Post'
import { HeaderPosts } from '../../components/HeaderPosts'
import { loadPosts, loadPostsByCategory, handleToggleVoteScore } from '../../redux/actions/actions-creator'

class PostsContainer extends Component{

    componentDidMount(){
        this.props.loadPosts()
    }

    componentDidUpdate(prevProps){       
        const previousCategory = prevProps.match.params.category
        const selectedCategory = this.props.match.params.category

        if(selectedCategory !== previousCategory) {
            if(selectedCategory !== undefined){
                this.props.loadPostsByCategory(selectedCategory)
            }else{
                this.props.loadPosts() 
            }
        }
    }

    render(){
        const { isFetching, posts, allPosts, handleToggleVoteScore } = this.props
        const myPosts = !isFetching ? posts.map((post) => 
                    <Post 
                        key={post.id} 
                        post={post} 
                        handleToggleVoteScore={handleToggleVoteScore}
                        commentsEnabled={true}
                        editDeleteEnabled={false}
                        linkPostDetailEnabled={true}
                    /> ) 
                    : []
        return(    
            <div>  
                <div className="section">
                    <div className="container">
                        <div className="row">	
                            <div className="col-md-8">
                                <div className="row">
                                    <HeaderPosts /> 
                                    {myPosts}                       
                                </div>
                            </div>
                            <CategoriesMenu allPosts={allPosts}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ postReducer }) =>{
    return {
       isFetching: postReducer.isFetching,
       posts: postReducer.posts,
       allPosts: postReducer.allPosts
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        loadPosts: () => dispatch(loadPosts()),
        loadPostsByCategory: (category) => dispatch(loadPostsByCategory(category)),
        handleToggleVoteScore: (id, option) => dispatch(handleToggleVoteScore(id, option))
    }
}

PostsContainer.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
    allPosts: PropTypes.array.isRequired,
    loadPosts: PropTypes.func.isRequired,
    loadPostsByCategory: PropTypes.func.isRequired,
    handleToggleVoteScore: PropTypes.func.isRequired,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (PostsContainer))

