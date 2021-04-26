import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {postAdded} from './postsSlice';
import  './postlist.css'
import { useSelector } from 'react-redux'
import './Project_details.css'

export const Postsdetails = () => {
  const posts = useSelector(state => state.posts)
 const renderedPostsid = posts.map(post => (
     <div className="container">
 <div className="title">
     <p className="det_circle"></p>
     <div><p>{post.title}</p>
 <p>{post.time}</p>
</div>
    </div> <p className="detail">Project Detail</p>
  <p> {post.content}</p>
   </div>
   
  ))

const renderedcomment = posts.map(post => (
     <div className="container">
 <div className="title">
     <p className="det_circle"></p>
     <div>
    
       <p>{post.Comment}</p>
 <p>{post.time}</p>
</div>
    </div> 
   </div>
   
  ))
 const [title, setTitle] = useState('')
  const [Content, setContent] = useState('')
  const [time,setTime] = useState('')
 const dispatch = useDispatch()
  
  const time1 = new Date().toLocaleTimeString()
  const onContentChanged = e =>{ setContent(e.target.value);setTime(time1)}


  const onSavePostClicked = () => {
     
    if (title && Content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title:'wfcsdc',
         Content:'adadfc',
         time,
         Comment,
         
        })
      )
      setTime('')
      setContent('')
       
  
    }
  }
 


  return (
    <div>
    <header>
      <h3>DASHBOARD</h3>
    </header>
     {renderedPostsid}
    <p>Coments:</p>
    
   <form>
        <textarea
          id="postContent"
          name="postContent"
          value={Content}
          onChange={onContentChanged}
          className="input"
          rows='9'
          placeholder="Add Coment"
         
      />
   
        <button type="button" className="add_proj_btn" onClick={onSavePostClicked}>
          Add
        </button>
       
      </form>
  {renderedcomment}
    </div>
  )
}
















/*

export const Postsdetails = () => {
  const [title, setTitle] = useState('')
  const [Content, setContent] = useState('')
  const [time,setTime] = useState('')
 const dispatch = useDispatch()
  
  const time1 = new Date().toLocaleTimeString()
  const onContentChanged = e =>{ setContent(e.target.value);setTime(time1)}


  const onSavePostClicked = () => {
     
    if (title && Content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title:'wfcsdc',
         Content:'adadfc',
         time,
         Comment,
         
        })
      )
      setTime('')
      setContent('')
       
  
    }
  }
 

  return (
    <div>
    <header>
      <h3>DASHBOARD</h3>
    </header>
     {renderedPostsid}
    <h1>Coments</h1>
    
   <form>
        <textarea
          id="postContent"
          name="postContent"
          value={Content}
          onChange={onContentChanged}
          className="input"
          rows='9'
          placeholder="Add Coment"
         
      />
   
        <button type="button" className="add_proj_btn" onClick={onSavePostClicked}>
          Add
        </button>
       
      </form>
    </div>
  )
}*/