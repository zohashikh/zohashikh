import React from "react";
import './tags.css'
export function Tags() {
  
 function Welcome(props) {
  return <button class="round-button btn">{props.name}</button>;
}

const element = <Welcome name="food" />;
const element1 = <Welcome name="hollywood" />;
const element2 = <Welcome name="tv" />;
const element3 = <Welcome name="music" />;
const element4 = <Welcome name="lifehacks" />;
const element5 = <Welcome name="math" />;
const element6 = <Welcome name="vlogs" />;
const element7 = <Welcome name="food" />;
const element8 = <Welcome name="hollywood" />;
const element9 = <Welcome name="tv" />;
const element11 = <Welcome name="music" />;
const element22 = <Welcome name="lifehacks" />;

  return (
    <div>
      <ul>
      <li class="tags">{element}</li>
      <li class="tags">{element1}</li>
      <li class="tags">{element2}</li>
      <li class="tags">{element3}</li>
      <li class="tags">{element4}</li>
      <li class="tags">{element5}</li>
      <li class="tags">{element6}</li>
      <li class="tags">{element7}</li>
      <li class="tags">{element}</li>
      <li class="tags">{element9}</li>
      <li class="tags">{element11}</li>
      <li class="tags">{element22}</li>
      </ul>
    </div>
  );
}