import React, { useState } from 'react'
import './showusers.css'


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
            var email1 =[]
          
            for (let index = 0; index < user.length; index++) {
            email1[index] = user[index].id
           
           
           
          } console.log(email1)
         
   const deleteuser = () => {
     var id = document.getElementById("deletedata").value
      
console.log(id,user.findIndex(x => x.id == id),document.getElementById("deletedata").value)

       user.splice(id,1)
  console.log(user)

  
   
  } 

 const users = user.map(users => (
 <div className="content">
  <table>
     <tr>
       <td>{users.id}</td>
       <td>{users.email}</td>
       <td>{users.password}</td>
       <td><button id="deletedata" value={user.findIndex(x => x.id == users.id)} onClick={deleteuser} >Delete</button></td>
     <td><button  onClick={deleteuser} >Update</button></td>
     </tr>
  </table>
    </div>
   
   
  ))



 
  return (
    <div>
    <div ></div>
    <p id="s.how">
      <table>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>Password</th>
            <th>Delete</th>
            <th>Update</th>
           
          </tr>
   
      </table>
      {users}
      <button>Add User</button></p>
    

<p>No. of users: {user.length}</p>
    

    </div>
  )
            }
