import React,{Component} from 'react';
import './sidebar.css';
//import {FaHome,FaCompass,FaYoutube,FaHistory,FaCaretSquareRight,FaRegCaretSquareRight,FaClock,FaThumbsUp} from "react-icons/fa";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
//import Routes from "../Routes";
//import { history } from '../history'
import history, {histtory} from '../history'
import {Button} from 'react-bootstrap'

  


function sidebar() {

 
  function handlesubmit(event){
    
   //() => history.push('/Add')
  }
  
  return (
   <div>
  
  <ProSidebar>
  <Menu iconShape="square" class="sidebar" > 
   
    <MenuItem  className="item1"><b>Project Management System</b> </MenuItem>
    <MenuItem  className="item"><button class="add_proj"  onClick={handlesubmit}>Add Project</button></MenuItem>
    <MenuItem  className="item2"><button  class="signout">Sign Out</button></MenuItem>
   
   </Menu>
</ProSidebar>

 
    </div>
  );
}

export default sidebar;
