import React, { Component } from 'react'
import uuid from 'uuid/v4'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
    handleSaveComment,
	handleUpdateCommentsCount,
	handleEditComment
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
		body: '',
		toPostDetails: false,
		updatedComment: false,
		postId: ''
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.comment !== this.props.comment){
			this.setState({
				author: nextProps.comment.author,
				body: nextProps.comment.body,
				postId: nextProps.comment.parentId,
				updatedComment: true,
				newComment:{
					id: nextProps.comment.id,
					parentId: nextProps.comment.parentId,
				}
			})
		}
	}

	handleChangeName = (e) =>{
		const author = e.target.value
		this.setState(prevState =>({
			author,
			newComment:{
				...prevState.newComment,
				author
			}
		 }))
	}
	handleChangeComment = (e) =>{
		const comment = e.target.value
		this.setState(prevState =>({ 
			body: comment,
			newComment:{
				...prevState.newComment,
				body: comment
			}
		 }))
		 
	}
	
	handleSubmit = (e) =>{
		e.preventDefault()
		const { updatedComment, newComment, body } = this.state
		if(updatedComment){
			this.setState({
				toPostDetails: true,
				newComment: {
					...newComment,
					body,
					timestamp: Date.now(),
				}
			})
			this.props.dispatch(handleEditComment(newComment.id, newComment))
		}else{
		let newComment = this.state.newComment
		newComment.id = uuid()
		newComment.parentId = this.props.postId
		newComment.timestamp = Date.now()

		this.props.dispatch(handleSaveComment(newComment))
		this.props.dispatch(handleUpdateCommentsCount())
		}
	
		this.setState(() =>({
			newComment: {},
			author: '',
			body: '',
			updatedComment: false
		}))
		
	}

	render(){
		const { author, body, toPostDetails, postId, updatedComment} = this.state
		const commentLeft = 250 - body.length 
		const errors = validador.validatePostReplay(this.state.author, this.state.body);
		const isEnabled = !Object.keys(errors).some(x => errors[x] === true)
		if(toPostDetails === true){
            return <Redirect to={`/${this.props.category}/${postId}`} />
        }
		return(
			<form className='post-reply' onSubmit={this.handleSubmit}>
				<div className='row'>
					<div className='col-md-12'>
						<div className='form-group'>
							<span>Name *</span>
							<input 
							    disabled={updatedComment}
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
								placeholder='Comment *'
								value={body}
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