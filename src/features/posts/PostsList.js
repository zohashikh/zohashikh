import React from 'react'
import  './postlist.css'
import { useSelector } from 'react-redux'

export const PostsList = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">
        {post.content}</p>
    </article>
  ))
 const renderedPostsid = posts.map(post => (
 <div className="content"><p className="circle"></p><p>{post.title}</p>
 <p class="file_time">{post.time}</p>
    </div>
   
   
  ))
 

  return (
    <div>
    <header>
      <h3>DASHBOARD</h3>
    </header>
      <p>{renderedPostsid}</p> 
     
            
  
    </div>
    
  )
}
