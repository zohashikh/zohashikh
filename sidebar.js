import React from 'react';
import './sidebar.css';
import {FaHome,FaCompass,FaYoutube,FaHistory,FaCaretSquareRight,FaRegCaretSquareRight,FaClock,FaThumbsUp,FaFileDownload} from "react-icons/fa";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';



function sidebar() {
  return (
  <ProSidebar>
  <Menu iconShape="square" >
    <MenuItem icon={<FaHome className="icon" />} className="item">  Home</MenuItem>
    <MenuItem icon={<FaCompass className="icon"  />} className="item"> Explore</MenuItem>
    <MenuItem icon={<FaYoutube className="icon" />} className="item"> Subscriptions</MenuItem>
    <MenuItem icon={<FaCaretSquareRight className="icon" />} className="item"> Library</MenuItem>
    <MenuItem icon={<FaHistory className="icon" />} className="item"> History</MenuItem>
    <MenuItem icon={<FaRegCaretSquareRight className="icon" />} className="item"> Your videos</MenuItem>
    <MenuItem icon={<FaClock className="icon" />} className="item"> Watch Later</MenuItem>
    <MenuItem icon={<FaThumbsUp className="icon" />} className="item"> Liked videos</MenuItem>
   
  </Menu>
</ProSidebar>
    
  );
}

export default sidebar;
