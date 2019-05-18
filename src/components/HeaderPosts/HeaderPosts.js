import React from 'react'

const HeaderPosts = () =>(
    <div class="row" style={{width: '100%'}}>
        <div class="col">
            <h2>Recent Posts</h2>
        </div>
        <div class="col" >
            <select class="browser-default custom-select">
                <option selected>Order by</option>
                <option value="1">Date</option>
                <option value="2">Votes</option>
                </select>
        </div>
        <div class="col" >
            <button type="button" class="btn btn-primary" style={{float: 'right'}}>New Post</button>
        </div>
    </div>

)

export default HeaderPosts