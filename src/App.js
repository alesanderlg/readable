import React from 'react';
import './assets/css/style.css'

import { PostsPage } from './pages/PostsPage'
import { NewPostPage } from './pages/NewPostPage'
import { PostDetailsPage } from './pages/PostDetailsPage'
import { EditCommentPage } from './pages/EditCommentPage'

import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
      <div>
          <Switch>
              <Route path="/" exact component={ PostsPage }  />
              <Route path='/editComment/:id' exact component={ EditCommentPage }/>
              <Route path='/edit/:id' exact component={ NewPostPage }/>
              <Route path="/newPost" render={ NewPostPage} />
              <Route path="/:category/:id" component={ PostDetailsPage } />
              <Route path='/:category(react|redux|udacity)' component={ PostsPage }/>
          </Switch>
      </div>      
    )
}

export default (App)
