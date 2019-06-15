import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'

import {
    handleSaveComment,
    handleUpdateCommentsCount 
} from '../../redux/actions/actions-creator'

import * as validador from '../../utils/validador'

class PostReplay extends Component {
	state = {
		newComment: {
			id: '',
        	timestamp: '',
        	body: '',
        	author: '',
			parentId: '',
		},
		author: '',
		comment: '',
	}

	handleChangeName = (e) =>{
		const author = e.target.value
		this.setState(prevState =>({
			author,
			newComment:{
				...prevState.newComment,
				author: author
			}
		 }))
	}
	handleChangeComment = (e) =>{
		const comment = e.target.value
		this.setState(prevState =>({ 
			comment,
			newComment:{
				...prevState.newComment,
				body: comment
			}
		 }))
		 
	}
	
	handleSubmit = (e) =>{
		e.preventDefault()
		let newComment = this.state.newComment
		newComment.id = uuid()
		newComment.parentId = this.props.postId
		newComment.timestamp = Date.now()
		this.setState(() =>({
			newComment,
			author: '',
			comment: ''
		}))
		this.props.dispatch(handleSaveComment(newComment))
		this.props.dispatch(handleUpdateCommentsCount())
	}

	render(){
		const { author, comment} = this.state
		const commentLeft = 250 - comment.length 
		const errors = validador.validatePostReplay(this.state.author, this.state.comment);
		const isEnabled = !Object.keys(errors).some(x => errors[x] === true)
		return(
			<form className='post-reply' onSubmit={this.handleSubmit}>
				<div className='row'>
					<div className='col-md-12'>
						<div className='form-group'>
							<span>Name *</span>
							<input 
								className='input'
								type='text'
								name='name'
								value={author}
								onChange={this.handleChangeName}
								/>
						</div>
					</div>
					<div className='col-md-12'>
						<div className='form-group'>
							<textarea 
								className='input'
								name='message' 
								placeholder='Comment'
								value={comment}
								maxLength={250}
								onChange={this.handleChangeComment}
								/>
							{commentLeft <= 100 && (
								<span style={{'float': 'right', 'color': 'red'}}>{commentLeft}</span>
							)}
						</div>
						<button 
							className={isEnabled ? 'primary-button': 'btn btn-light'}
							type='submit'
							disabled={!isEnabled}
						> Submit </button>
					</div>
				</div>
			</form>
		)
	}
}

export default connect() (PostReplay)