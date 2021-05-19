import React from "react";
import { useForm } from "react-hook-form";
import { useState } from 'react'
export default function AddUser() {

  var users = [{
             id:1,
             email:'jsnxjns',
             password:'skdcns'
  }];
  users.push({
            id:2,
             email:'sdjhbbfv',
             password:'asmbc'
            }
           ) 

 const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmitupdate = data => {
    if(data.example != null && data.exampleRequired != null){
      for (let index = 0; index < users.length; index++) {
           
           if(users[index].id == data.id){
             console.log(data.id) 
               users[index].email = data.example
               users[index].password = data.exampleRequired
            console.log(users)
           }
           else{
    console.log('Id not found')
           }
           
      }

  
  

    }
 
  }


  return (


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
}