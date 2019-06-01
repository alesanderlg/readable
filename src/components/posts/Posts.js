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
         const posts = !this.props.isFetching ? 
                this.props.posts.map((post) => <Post key={post.id} post={post}/> ) 
                : []
        return(    
            <div>  
            <div className="section">
                <div className="container">
                    <div className="row">	
                        <div className="col-md-8">
                            <div className="row">
                                <HeaderPosts /> 
                                {posts}                          
                            </div>
                        </div>
                         <CategoriesMenu />
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) =>{
    return {
        isFetching: posts.isFetching,
        posts: posts.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadPosts: () => dispatch(loadPosts()),
        loadPostsByCategory: (category) => dispatch(loadPostsByCategory(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Posts)

