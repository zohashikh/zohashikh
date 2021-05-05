import React from 'react'

import { useSelector } from 'react-redux'

export const PostsList = () => {
  const user = useSelector(state => state.User)

  const renderedPosts = user.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.email}</h3>
      <p className="post-content">
        {post.password}</p>
    </article>
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
