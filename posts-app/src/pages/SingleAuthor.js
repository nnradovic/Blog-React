import React from "react";
import {Link} from "react-router-dom";
import "./SingleAuthor.css";

const SingleAuthor = ()=>{
    return(

<div className="container">
<Link to="/authors" className="waves-effect waves-light btn-large "><i className="material-icons left">backspace</i>back</Link>
<div className="col s12 m7">
    <h2 className="header">Horizontal Card</h2>
    <div className="card horizontal">
      <div className="card-image">
        <img src="https://via.placeholder.com/300/300"/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
   
      </div>
    </div>
  </div>
  <hr/>
<div className="col s12 m7">
    <h2 className="header">Horizontal Card</h2>
    <div className="card horizontal">
      <div className="card-image right">
        <img src="https://via.placeholder.com/300/300"/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.</p>
        </div>
      </div>
    </div>
    <hr/>

<div className="col s12 m7 guraj">
    <h2 className="header">Horizontal Card</h2>
    <div className="card horizontal">
    
      <div className="card-stacked">
        <div className="card-content">
          <p> Name: I am a very simple card. I am good at containing small bits of information.</p>
          <p> Slogan: I am a very simple card. I am good at containing small bits of information.</p>
        </div>
      </div>
    </div>
  </div >
  <div className="center">
        <Link to="/newpost" className="waves-effect waves-light btn-large "><i className="material-icons right">save</i>New Post</Link>
  </div>

  </div>
</div> 

    )
}
export default SingleAuthor;