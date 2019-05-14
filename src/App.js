import React from 'react';
import Posts from './components/posts/Posts'

function App() {
  return (
    <div>
        {/** Nav */}
        <a href='#'>Home</a> |
        <a href='#'>React</a> |
        <a href='#'>Redux</a> |
        <a href='#'>Udacity</a> |

        {/** Posts */}
        <Posts />
        
    </div>
  );
}

export default App;
