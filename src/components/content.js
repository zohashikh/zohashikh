import React from 'react';
//import { ContentItems } from "./ContentItems";
import youtubeLogo from "../images/logo.jpg";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";
import pic4 from "../images/pic4.jpg";
import pic5 from "../images/pic5.jpg";
import pic6 from "../images/pic6.jpg";
import pic7 from "../images/pic7.jpg";
import pic8 from "../images/pic8.jpg";
import pic9 from "../images/pic9.jpg";
import { Tags } from "./tags";
import './content.css';



export function Content() { 
  function Welcome(props) {
  return(
    <div> 
      <img className="img" alt="logo" src={props.name} />
       <p>{props.message}</p></div>
 
   );
}
 
 //<ContentItems videos={videos} />
  return (
    <div class="content-container">
      <Tags />
      <div className="items">
      
         <Welcome name={pic1} message="sdcscd" />
         <Welcome name={pic2} message="sdcscd" />
         <Welcome name={pic3} message="sdcscd" />
         </div>
         <div className="items">
         <Welcome name={pic4} message="sdcscd" />
         <Welcome name={pic5} message="sdcscd" />
         <Welcome name={pic6} message="sdcscd" />
         </div>
         <div className="items">
         <Welcome name={pic7} message="sdcscd" />
         <Welcome name={pic8} message="sdcscd" />
         <Welcome name={pic9} message="sdcscd" />

     </div>
    </div>
  );
}