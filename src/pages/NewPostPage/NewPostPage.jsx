import React, { Fragment } from 'react'
import { NewPostContainer } from '../../containers/NewPostContainer'
const NewPostPage = (props) =>{
    return (
        <Fragment>
            <NewPostContainer match={props.match}/>
        </Fragment>
    )
}

export default NewPostPage