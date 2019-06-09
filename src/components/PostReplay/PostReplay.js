import React from 'react'

const PostReplay = () =>{
    return (
        <form className="post-reply">
			<div className="row">
				<div className="col-md-12">
					<div className="form-group">
						<span>Name *</span>
						<input className="input" type="text" name="name"/>
					</div>
				</div>
				<div className="col-md-12">
					<div className="form-group">
						<textarea className="input" name="message" placeholder="Message"></textarea>
					</div>
				    <button className="primary-button">Submit</button>
				</div>
			</div>
		</form>

    )
}

export default PostReplay