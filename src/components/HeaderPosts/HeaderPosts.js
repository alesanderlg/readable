import React from 'react'
import { Link } from 'react-router-dom'

const HeaderPosts = () =>(
    <div className="row" style={{width: '100%'}}>
        <div className="col">
            <h2>Recent Posts</h2>
        </div>
        <div className="col" >
            <select className="browser-default custom-select">
                <option selected>Order by</option>
                <option value="1">Date</option>
                <option value="2">Votes</option>
                </select>
        </div>
        <div className="col" >
            <Link to="/newPost" className="btn btn-primary" style={{float: 'right'}}>New Post</Link>
        </div>
    </div>

)

export default HeaderPosts