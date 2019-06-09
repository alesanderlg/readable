import React from 'react'
import avatar from '../../assets/img/avatar.png'

const PostComments = () =>{
    return (
        <div className="post-comments">
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src={avatar} alt=""/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        <h4>John Doe</h4>
                        <span className="time">March 27, 2018 at 8:00 am</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    )
}

export default PostComments