import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../../assets/css/style.css'

import { loadCategories } from '../../redux/actions/actions-creator'

class CategoriesMenu extends PureComponent{

    componentDidMount(){
        this.props.loadCategories()
    }

    render(){
      return(
        <div className="col-md-4">
          <div className="aside-widget">
            <div className="section-title">
                <h2>Catagories</h2>
            </div>
            <div className="category-widget">
              <ul>
                <li><Link to='/' href="#" className="cat-1">All<span>340</span></Link></li>
                <li><Link to='/react' className="cat-2">React<span>74</span></Link></li>
                <li><Link to='/redux' href="#" className="cat-3">Redux<span>41</span></Link></li>
                <li><Link to='/udacity' href="#" className="cat-4">Udacity<span>35</span></Link></li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
}

const postsCountByCategory = (posts, category) =>{
  return posts.filter(post => post.category === category).length
}

const mapStateToProps = ({categories}) =>{
   console.log("state categories", categories)
    return {
       categories: categories
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
      loadCategories: () => dispatch(loadCategories())
    } 
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoriesMenu)