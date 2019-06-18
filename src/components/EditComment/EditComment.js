import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from '../../components/Header'
import { PostReplay } from '../../components/PostReplay'

import {
	handleLoadCommentById 
} from '../../redux/actions/actions-creator'

class EditComment extends Component{

    componentDidMount(){
        const { match } = this.props 
        this.props.loadCommentById(match.params.id)
    }

    render(){
        return (
            <div id='editComment'>
                <Header />
                <div className='section'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <div className='section-row'>
                                    <PostReplay comment={this.props.comment}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ commentsReducer}) =>{
    return {
        comment: commentsReducer.comment
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        loadCommentById: (id) => dispatch(handleLoadCommentById(id))
    }
}
    
export default connect(mapStateToProps, mapDispatchToProps) (EditComment)