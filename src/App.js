import React, { Component } from 'react';
import './assets/css/style.css'

import Posts from './components/posts/Posts'
import NewPost from './components/newPost/NewPost'
import PostDetails from './components/postDetails/PostDetails'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {

  render(){
    return (
      <div>
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Posts} />
              <Route path="/newPost" render={() => <NewPost/>} />
              <Route path="/postDetails" render={() => <PostDetails/>} />
              <Route path='/:category(react|redux|udacity|all)' component={Posts}></Route>
          </Switch>
        </BrowserRouter>
      </div>      
    )
  }
}

export default (App)
