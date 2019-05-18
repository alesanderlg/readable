import React from 'react'

import '../../assets/css/style.css'

const CategoriesMenu = () =>(
    <div className="col-md-4">
        <div className="aside-widget">
          <div className="section-title">
              <h2>Catagories</h2>
          </div>
          <div className="category-widget">
              <ul>
                <li><a href="#" className="cat-1">All<span>340</span></a></li>
                <li><a href="#" className="cat-2">React<span>74</span></a></li>
                <li><a href="#" className="cat-3">Redux<span>41</span></a></li>
                <li><a href="#" className="cat-4">Udacity<span>35</span></a></li>
              </ul>
          </div>
        </div>
    </div>
)

export default CategoriesMenu