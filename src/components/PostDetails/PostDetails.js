import React, { Component } from 'react'

import '../../assets/css/style.css'

import { PostComments } from '../PostComments'
import { PostReplay } from '../PostReplay'
import { PostItem } from '../PostItem'
import { TagsMenu } from '../TagsMenu'

class PostDetails extends Component {

    componentDidMount(){
        console.log("PostDetails", this.props)
    }
    render(){
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="section-row">                  
                                    <PostItem />  
                                </div>                  
                                <div className="section-row">
                                    <h2>Leave a reply</h2>
                                    <PostReplay />
                                </div>
                                <div className="section-row">
                                    <div className="section-title">
                                        <h2>3 Comments</h2>
                                    </div>
                                    <PostComments />
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

export default PostDetails