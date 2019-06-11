import React, { Fragment } from 'react'
import { PostDetails } from '../../components/PostDetails'

const PostDetailsPage = (props) =>{
    return (
        <Fragment>
            <PostDetails match={props.match}/>
        </Fragment>
    )
}

export default PostDetailsPage