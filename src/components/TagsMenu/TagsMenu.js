import React from 'react'
import { Link } from 'react-router-dom'

const TagsMenu = () =>{
    return (
        <div className="aside-widget">
            <div className="tags-widget">
                <ul>
                    <li><Link to='/'>All</Link></li>
                    <li><Link to='/react'>React</Link></li>
                    <li><Link to='/redux'>Redux</Link></li>
                    <li><Link to='/udacity'>Udacity</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default TagsMenu