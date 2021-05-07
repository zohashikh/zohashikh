/*import React, {useState,props} from 'react';
import { useDispatch } from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import {userAdded} from './UserData'



export default function RegistrationForm() {

 const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
 const [confirmPassword, setConfirmpassword] = useState('')
 const dispatch = useDispatch()
  const onEmailChanged = e => setemail(e.target.value) 
  const onPasswordChanged = e => setpassword(e.target.value)
   const onConfirmPasswordChanged = e => setConfirmpassword(e.target.value)

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(setpassword('') === setConfirmpassword('')) {
            if (email && password) {         
      dispatch(
        userAdded({
          id: nanoid(),
          email,
         password 
        })
      )
      setemail('')
      setpassword('')
    }
 
 
        } else {
            props.showError('Passwords do not match');
        }
    } 
  return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       onChange={onEmailChanged}
                      
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={onPasswordChanged}
                     
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        onChange={onConfirmPasswordChanged}
                        
                    />
                </div>
              ] <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                 
          >
                    Register
          </button>
            </form>
        </div>
    )
}*/






import React, { useState,props } from 'react'
import { useDispatch } from 'react-redux';
import {nanoid} from '@reduxjs/toolkit'
import '../RegisterUser/Register.css'
import {postAdded} from '../UserData';


export const RegistrationForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

 const dispatch = useDispatch()
  const onEmailChanged = e => setEmail(e.target.value) 
  const onPasswordChanged = e => setPassword(e.target.value)
   const onConfirmPasswordChanged = e => setConfirmPassword(e.target.value)


  const onSaveUserClicked = () => {
  debugger;
    if (email && password) {
      dispatch(
        postAdded({
          id: nanoid(),
         email,
         password
        })
      )

      setEmail('')
      setPassword('')
  
    }}
 
  return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center section">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                       onChange={onEmailChanged}
                      
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={onPasswordChanged}
                     
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        onChange={onConfirmPasswordChanged}
                        
                    />
                </div>
               <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={onSaveUserClicked}
                 
          >
                    Register
          </button>
            </form>
        </div>

  )
            }
