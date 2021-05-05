//import React, {useState,props} from 'react';
//import { useDispatch } from 'react-redux';
//import {nanoid} from '@reduxjs/toolkit';
//import {userAdded} from './UserData'
export default function RegistrationForm() {
    /*      const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState
        }))
    }
 
     const dispatch = useDispatch()
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            if (email && password) {         
      dispatch(
        userAdded({
          id: nanoid(),
          email,
         password 
        })
      )
      state.email
      state.password
    }
 
 
        } else {
            props.showError('Passwords do not match');
        }
    } */
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
                      
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                     
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        
                    />
                </div>
              ] <button 
                    type="submit" 
                    className="btn btn-primary"
                 
          >
                    Register
          </button>
            </form>
        </div>
    )
}