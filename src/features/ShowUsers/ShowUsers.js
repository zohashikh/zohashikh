import React, { useState } from 'react'
import './showusers.css'
import RegistrationForm from '../Register/Register'
import { useForm } from "react-hook-form";
import Routes from '../../Routes';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function Userdata() {
 
  var user = [{
             id:1,
             email:'jsnxjns',
             password:'skdcns'
  }];
  user.push({
            id:2,
             email:'sdjhbbfv',
             password:'asmbc'
            }
           ) 
        
         
   const deleteuser = (id) => {
      user.splice(id-1,1)
      console.log(user)
  
   
  } 
  
   
 const users = user.map(users => (
 <div className="content">
  <table>
     <tr>
       <td>{users.id}</td>
       <td>{users.email}</td>
       <td>{users.password}</td>
       <td><button  onClick={()=>deleteuser(users.id)} >Delete</button></td>
    </tr>
  </table>
    </div>
   
   
  ))



 
  return (
   
    <div>
    <div ></div>
    <p id="show">
      <table>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
           
           
          </tr>
   
      </table>
      {users}
    </p>
    

<p>No. of users: {user.length}</p>

        <button><Link to="/adduser">Add User</Link></button>
        <button><Link to="/updateuser">Update User</Link></button>
    

    </div>
  )
            }
