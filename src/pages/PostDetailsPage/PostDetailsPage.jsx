import React, { Fragment } from 'react'
import { PostDetailsContainer } from '../../containers/PostDetailsContainer'

const PostDetailsPage = (props) =>{
    return (
        <Fragment>
            <PostDetailsContainer match={props.match}/>
        </Fragment>
    )
}

export default PostDetailsPage