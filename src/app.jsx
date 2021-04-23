// Importing combination
import React, {Component} from 'react';


class ChangeColor extends Component {
    constructor(props)
    {
        super(props);
        this.state = { color : '#4cb96b' };
       
    }
    
    getClick()
    {
         
         
    
        if (this.state.color === '#4cb96b')
            this.setState({ color : '#aaa' });
        else
            this.setState({ color : '#4cb96b' });
    }
 

  render()
  {
      return (
         
      <div>
          <nav>
              <ul>
                  <li>hwedb</li>
              </ul>
          </nav>
          <button style={this.state}>Button</button>
        <p id="root">knkjfc</p>
         <button style = { this.state } onClick = {this.getClick.bind(this)}>
            {this.props.title} </button></div>
        );
  }
} 

// Exporting the component
export default ChangeColor;