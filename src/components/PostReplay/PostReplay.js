import React, { Component } from 'react'

class PostReplay extends Component {
	state = {
		newComment: {
			id: '',
        	timestamp: '',
        	body: '',
        	author: '',
        	parentId: ''
		},
		name: '',
		comment: ''
	}
	handleChangeName = (e) =>{
		const name = e.target.value
		this.setState(() =>({ name }))
	}
	handleChangeComment = (e) =>{
		const comment = e.target.value
		this.setState(() =>({ comment }))
	}
	handleSubmit = (e) =>{
		e.preventDefault()
		this.setState(() =>({
			name: '',
			comment: ''
		}))
	}
	render(){
		const { name, comment } = this.state
		const commentLeft = 250 - comment.length 
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
								value={name}
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
							className='primary-button'
							type='submit'
							disabled={(name === '') && (comment === '')}
						> Submit </button>
					</div>
				</div>
			</form>
		)
	}
}

export default PostReplay