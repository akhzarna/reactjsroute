
import React, {Component} from 'react'

class Webserviceone extends Component{

  constructor(props){
    super(props);
  }

  MyFirstButton=()=>{
    alert('In The Name Of Allah');
  }

  render(prop){
    return (

      <div>

      <h1> Settings </h1>

      <button onClick={this.MyFirstButton}>
      My First Button
      </button>

      </div>

    );
  }
}

export default Webserviceone;
