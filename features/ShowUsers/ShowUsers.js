import React, { useState } from 'react'
import './showusers.css'
import RegistrationForm from '../Register/Register'
import { useForm } from "react-hook-form";

export default function Userdata() {
 
  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [confirmPassword,setConfirmPassword] = useState([])
  var user = [{
             id:1,
             email:'jsnxjns',
             password:'skdcns'
  }];
  const onEmailChanged = e => setEmail(e.target.value) 
  const onPasswordChanged = e => setPassword(e.target.value)
   const onConfirmPasswordChanged = e => setConfirmPassword(e.target.value)
  user.push({
            id:2,
             email:'sdjhbbfv',
             password:'asmbc'
            }
           ) 
           // document.getElementById("show").innerHTML = user[0].email
        
         
   const deleteuser = (id) => {
      user.splice(id-1,1)
      console.log(user)
  
   
  } 
  
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    var id = user.length + 1
   user.push({
            id:id,
             email:data.example,
             password:data.exampleRequired
            }
           ) 
   console.log(user)

  }

  
   const Adduser = (
     /*
 <form onSubmit={handleSubmit(onSubmit)}>
     
      <p>Email</p>
      <input  {...register("example", { required: true })} />
      
     
      <p>Password</p>
      <input {...register("exampleRequired", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>    
*/
<p>hjxbc</p>
);

  const onSubmitupdate = data => {
    if(data.example != null && data.exampleRequired != null){
      for (let index = 0; index < user.length; index++) {
           
           if(user[index].id == data.id){
             console.log(data.id) 
               user[index].email = data.example
               user[index].password = data.exampleRequired
            console.log(user)
           }else{
    console.log('Id not found')
  }
           
          }

  
  

  }
 
}
   const update = (

 <form onSubmit={handleSubmit(onSubmitupdate)}>
      
       <p>Enter Id to update certain user *number</p>
      <input type="number" {...register("id", { required: true })} />
      <p>Email</p>
      <input  {...register("example", { required: true })} />
      
      <p>Password</p>
      <input {...register("exampleRequired", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>    

);
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
    
<h2>Add User</h2> {Adduser}

<h2>Update</h2>
{update}
    </div>
  )
            }
