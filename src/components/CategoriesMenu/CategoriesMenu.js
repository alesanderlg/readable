import React from 'react'

import '../../assets/css/style.css'

const CategoriesMenu = () =>(

    <div class="col-md-4">
        <div class="aside-widget">
          <div class="section-title">
              <h2>Catagories</h2>
          </div>
          <div class="category-widget">
              <ul>
                <li><a href="#" class="cat-1">All<span>340</span></a></li>
                <li><a href="#" class="cat-2">React<span>74</span></a></li>
                <li><a href="#" class="cat-3">Redux<span>41</span></a></li>
                <li><a href="#" class="cat-4">Udacity<span>35</span></a></li>
              </ul>
          </div>
        </div>
    </div>
)

export default CategoriesMenu