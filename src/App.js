import React from 'react';
import './assets/css/style.css'

import { PostsPage } from './pages/PostsPage'
import { NewPostPage } from './pages/NewPostPage'
import { PostDetailsPage } from './pages/PostDetailsPage'

import { Route, Switch } from 'react-router-dom'

const App = () => {
    return (
      <div>
          <Switch>
              <Route path="/" exact component={ PostsPage }  />
              <Route path="/newPost" render={() => <NewPostPage/>} />
              <Route path="/postDetails/:id" component={ PostDetailsPage } />
              <Route path='/:category(react|redux|udacity)' component={ PostsPage }/>
          </Switch>
      </div>      
    )
}

export default (App)
