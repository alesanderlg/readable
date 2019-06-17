import React, { Fragment } from 'react'
import { EditComment } from '../../components/EditComment'

const EditCommentPage = (props) =>{
    return (
        <Fragment>
            <EditComment match={props.match}/>
        </Fragment>
    )
}

export default EditCommentPage