import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { postsCountByCategory } from '../../utils/CommonUtils'
import '../../assets/css/style.css'

const CategoriesMenu = ({ allPosts }) =>(
        <div className="col-md-4">
          <div className="aside-widget">
            <div className="section-title">
                <h2>Catagories</h2>
            </div>
            <div className="category-widget">
              <ul>
                <li><Link to='/' className="cat-1">All<span>{postsCountByCategory(allPosts, 'all')}</span></Link></li>
                <li><Link to='/react' className="cat-2">React<span>{postsCountByCategory(allPosts,'react')}</span></Link></li>
                <li><Link to='/redux' className="cat-3">Redux<span>{postsCountByCategory(allPosts,'redux')}</span></Link></li>
                <li><Link to='/udacity' className="cat-4">Udacity<span>{postsCountByCategory(allPosts,'udacity')}</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
)

CategoriesMenu.propTypes = {
  allPosts: PropTypes.array.isRequired
}

export default CategoriesMenu