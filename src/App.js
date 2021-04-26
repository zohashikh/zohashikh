import React from 'react'
//import ProSidebar from './features/sidebar.js';
//import { PostsList }  from './features/posts/PostsList.js';
import {Content} from './dashboard.js'


import './App.css'


       /* <div className="content">
           <ProSidebar />
           <PostsList />
        
            
        </div>
      */
function App() {
  return (
    
    <div className="App">
      <header className="App-header">
     
       <Content />
        
      </header>
    </div>
  );
}

export default App;
