import React, { useState } from 'react'
import './showusers.css'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function Userdata() {
  const classes = useStyles();
 
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
    var tabledata =(
     user.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.password}</TableCell>
                    <TableCell align="right"><button  onClick={()=>deleteuser(row.id)} >Delete</button></TableCell>
                  </TableRow>
                ))
    )
   const deleteuser = (id) => {
    const confirm =  window.confirm("Are you sure")
   if (confirm == 'yes') {

     console.log(id-1)
      user.splice(id,1)
     
} else {
  //don't proceed
}
     
   
  } 


  return (
   
    <div>
    
 <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Password</TableCell>
                  <TableCell align="right">Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody id="table">
                {tabledata}
              </TableBody>
            </Table>
          </TableContainer> 

        <div id="sd"></div>
      
    <p>No. of users: {user.length}</p>

        
         <Button variant="contained" color="primary">
     <Link className="link" to="/adduser">Add User</Link> 
    </Button> 
     <Button variant="contained" color="primary">
     <Link className="link" to="/updateuser">Update User</Link> 
    </Button> 

     </div>
  );
            }
