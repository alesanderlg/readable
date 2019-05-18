import React from 'react';
import './assets/css/style.css'

import Header from './components/Header/Header'
import Posts from './components/Posts/Posts'
import NewPost from './components/NewPost/NewPost'
import PostDetails from './components/PostDetails/PostDetails'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
            <Route path="/" exact render={() => <Posts/>} />
            <Route path="/newPost" render={() => <NewPost/>} />
            <Route path="/postDetails" render={() => <PostDetails/>} />
      </Switch>
    </div>      
  );
}

export default App;
