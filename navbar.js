import React from 'react';
import '../styles/sass/nav.scss';
import { Nav, Navbar } from 'react-bootstrap';
import youtubeLogo from "../images/logo.jpg";
import SearchField from "react-search-field";
import {FaMicrophone,FaVideo,FaTh,FaBell} from "react-icons/fa";


export const NavigationBar = () => (
    <Navbar class="navbar p-2" expand="lg" >
      <Navbar.Brand href="/"><img className="logo" alt="logo" src={youtubeLogo} /></Navbar.Brand>
        <Nav className="ml-auto">
         <Nav.Item ><Nav.Link  href="/"><SearchField placeholder="Search..."classNames="searchbar" /></Nav.Link>
         <Nav.Link   href="/"><FaMicrophone class="navicon" /></Nav.Link>
         <Nav.Link  href="/"><FaVideo class="nav-right-icon" /></Nav.Link>
         <Nav.Link  href="/"><FaTh class="nav-right-icon" /></Nav.Link>
         <Nav.Link  href="/"><FaBell class="nav-right-icon" /></Nav.Link>
         <Nav.Link  href="/"><im /></Nav.Link>
         </Nav.Item>
      
       </Nav>
     
    </Navbar>

    
  
);
export default NavigationBar;