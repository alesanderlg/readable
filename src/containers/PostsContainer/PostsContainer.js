import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import '../../assets/css/style.css'

import { CategoriesMenu } from '../../components/CategoriesMenu'
import { PostContainer } from '../../containers/PostContainer'
import { loadPosts, loadPostsByCategory, handleToggleVoteScore, handleDeletePost } from '../../redux/actions/actions-creator'
import { Header } from '../../components/Header'
class PostsContainer extends Component{

    state = {
        orderBy: ''
    }

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

    handleOrderBy = (e) => {
        const orderBy = e.target.value
        this.setState({orderBy})
        if(orderBy === 'date'){
            this.orderByDate()
        }else{
            this.orderByVoteCounter()
        } 
    }

    orderByDate = () =>{
        const { posts } = this.props
        posts.sort((a,b) => a.timestamp - b.timestamp).reverse()
    }

    orderByVoteCounter = () =>{
        const { posts } = this.props
        posts.sort((a,b) => a.voteScore - b.voteScore).reverse()
    }

    render(){
        const { isFetching, posts, allPosts, handleToggleVoteScore } = this.props
        const { orderBy } = this.state
        const myPosts = !isFetching ? posts.map((post) => 
                    <PostContainer 
                        key={post.id} 
                        post={post} 
                        handleToggleVoteScore={handleToggleVoteScore}
                        commentsEnabled={true}
                        editDeleteEnabled={false}
                        linkPostDetailEnabled={true}
                        handleDeletePost={handleDeletePost}
                    /> ) 
                    : []
        return(    
            <div>  
                <Header />
                <div className="section">
                    <div className="container">
                        <div className="row">	
                            <div className="col-md-8">
                                <div className="row" style={{width: '100%'}}>
                                    <div className="col">
                                        <h2>Recent Posts</h2>
                                    </div>
                                    <div className="col" >
                                        <select value={orderBy} className="browser-default custom-select" onChange={this.handleOrderBy}>
                                            <option defaultValue>Order by</option>
                                            <option value="date">Date</option>
                                            <option value="votes">Votes</option>
                                            </select>
                                    </div>
                                    <div className="col" >
                                        <Link to="/newPost" className="btn btn-primary" style={{float: 'right'}}>New Post</Link>
                                    </div>
                                </div>
                                <div className="row">
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

