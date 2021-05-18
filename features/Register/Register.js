import React, { useState } from 'react'
import {nanoid} from '@reduxjs/toolkit'


export default function RegistrationForm() {
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [confirmPassword,setConfirmPassword] = useState([])
  var user = [{
             id:nanoid(),
             email:'jsnxjns',
             password:'skdcns'
  }];
  const onEmailChanged = e => setEmail(e.target.value) 
  const onPasswordChanged = e => setPassword(e.target.value)
   const onConfirmPasswordChanged = e => setConfirmPassword(e.target.value)

  const onSaveUserClicked = () => {
  
    if (email && password) {
       user.push({
            id:nanoid(),
             email:setEmail([]),
             password:setPassword([])
            }
             );
  
    }
    document.getElementById("show").innerHTML= onEmailChanged
}
 
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
           <p id="show"> {confirmPassword}</p>
        </div>

  )
            }
