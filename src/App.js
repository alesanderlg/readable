import React, { Component } from 'react';
import './assets/css/style.css'

import Posts from './components/posts/Posts'
import NewPost from './components/newPost/NewPost'
import PostDetails from './components/postDetails/PostDetails'

import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <div>
          <Switch>
              <Route path="/" exact component={Posts} />
              <Route path="/newPost" render={() => <NewPost/>} />
              <Route path="/postDetails" render={() => <PostDetails/>} />
              <Route path='/:category(react|redux|udacity)' component={Posts}></Route>
          </Switch>
      </div>      
    )
  }
}

export default (App)
