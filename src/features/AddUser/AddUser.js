import React from "react";
import { useForm } from "react-hook-form";


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
  const onSubmit = data => {
    var id = users.length + 1
   users.push({
            id:id,
             email:data.example,
             password:data.exampleRequired
            }
           ) 
   console.log(users)

  }
  return (
<div>
 <form onSubmit={handleSubmit(onSubmit)}>
     
      <p>Email</p>
      <input  {...register("example", { required: true })} />
      
     
      <p>Password</p>
      <input {...register("exampleRequired", { required: true })} />
     
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>  
   
 </div>
 );
}