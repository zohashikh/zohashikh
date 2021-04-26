import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {postAdded} from './postsSlice';
import './add_proj.css';

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [Content, setContent] = useState('')
  const [time,setTime] = useState('')

 const dispatch = useDispatch()
  const onTitleChanged = e => setTitle(e.target.value) 
  const time1 = new Date().toLocaleTimeString()
  const onContentChanged = e =>{ setContent(e.target.value);setTime(time1)}


  const onSavePostClicked = () => {
     
    if (title && Content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
         Content,
         time
        })
      )

      setTitle('')
      setContent('')
        setTime('')
  
    }
  }
 
  return (
       <section className="section">  
      <h2>Add Project</h2>
      <form>
        <label htmlFor="postTitle">Project name:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
          className="input"
           
        />
        <label htmlFor="postContent">Project detail:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={Content}
          onChange={onContentChanged}
          className="input"
          rows='9'
         
      />
   
        <button type="button" className="add_proj_btn" onClick={onSavePostClicked}>
          Add
        </button>
      </form>
    </section>


  )
}