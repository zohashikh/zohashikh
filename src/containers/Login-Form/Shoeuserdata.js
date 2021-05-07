/*import React from 'react'

import { useSelector } from 'react-redux'

export const PostsList = () => {
  const users = useSelector(state => state.User)


 const renderedPosts = users.map(user => (
 <div className="content"><p className="circle"></p><p>{user.email}</p>
 <p class="file_time">{user.password}</p>
    </div>
   
   
  ))
 
  
 

  return (
    <div>
    <header>
      <h3>DASHBOARD</h3>
    </header>
      <p>{renderedPosts}</p> 
     
            
  
    </div>
    
  )
}
*/


import React from 'react'
import { useSelector } from 'react-redux'

export const Showdata = () => {
  const posts = useSelector(state => state.posts)

  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">
        {post.content}</p>
    </article>
  ))
 const renderedPostsid = posts.map(post => (
 <div className="content"><p className="circle"></p><p>{post.email}</p>
 <p class="file_time">{post.password}</p>
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
