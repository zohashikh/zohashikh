import React from 'react'
import ProSidebar from './features/sidebar.js';
import { PostsList } from "./features/posts/PostsList";
import './dashboard.css'
import { AddPostForm }  from './features/posts/Add_Project';
import {Postsdetails} from './features/posts/Project_details'

export function Content() { 
  


 //<ContentItems videos={videos} />
  return ( 
   <div className="App">
    
      <header className="App-header">
       
        <div className="items">
           <ProSidebar />
           <PostsList />
        
            
        </div>
      
      </header>
      <div className="items">
        <ProSidebar />
        <AddPostForm />
      </div>
       <div className="items">
        <ProSidebar />
        <Postsdetails />
      </div>
    </div>
  );
}