import React, { Component } from 'react'
import '../../assets/css/style.css'

import CategoriesMenu from '../categoriesMenu/CategoriesMenu'
import Post from '../post/Post'
import HeaderPosts from '../headerPosts/HeaderPosts'

import { connect } from 'react-redux'
import { loadPosts, loadPostsByCategory } from '../../redux/actions/actions-creator'

class Posts extends Component{

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
        const { isFetching, posts } = this.props
        const myPosts = !isFetching ? posts.map((post) => <Post key={post.id} post={post}/> ) : []
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
                         <CategoriesMenu allPosts={this.props.allPosts}/>
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

const mapDispatchToProps = (dispatch) =>{
    return {
        loadPosts: () => dispatch(loadPosts()),
        loadPostsByCategory: (category) => dispatch(loadPostsByCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts)

